import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import cors from 'cors';
import { nanoid } from 'nanoid';
import { Code } from '../models';
declare global {
  namespace Express {
    interface User extends UserData {}
  }
}
dotenv.config({
  path: 'server/.env',
});
import './core/db';
import { passport } from './core/passport';
import { UserData } from '../pages';
import { Axios } from '../core/axios';
const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
const upload = multer({
  storage: multer.diskStorage({
    destination: function (_, __, cb) {
      cb(null, 'public/avatars');
    },
    filename: function (_, file, cb) {
      cb(null, nanoid() + '.' + file.mimetype.split('/').pop());
    },
  }),
});
const randomCode = (max: number = 9999, min: number = 1000) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
app.get('/auth/github', passport.authenticate('github'));

app.get(
  '/auth/me',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);
app.get(
  '/auth/sms/activate',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const user_id = req.user.id;
    const smsCode = req.query.code;
    if (!smsCode) {
      res.status(400).send();
    }
    const whereQuery = { code: smsCode, user_id: user_id };
    try {
      const findCode = await Code.findOne({
        where: whereQuery,
      });
      if (findCode) {
        Code.destroy({
          where: whereQuery,
        });
        // TODO: Активировать пользователя
        return res.send();
      } else {
        throw new Error('User not found');
      }
    } catch (err) {
      res.status(500).json({
        message: 'Ошибка при активации аккаунта',
      });
    }
  }
);
app.get(
  '/auth/sms',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const phone = req.query.phone;
    const user_id = req.user.id;
    const smsCode = randomCode();
    if (!phone) {
      return res.status(400).send();
    }
    try {
      // const data = await Axios.get(
      //   `https://sms.ru/sms/send?api_id=${process.env.SMS_API_KEY}&to=380687100550,74993221627&msg=${smsCode}`
      // );
      await Code.create({
        code: smsCode,
        user_id: user_id,
      });
      res.status(201).send();
    } catch (err) {
      res.status(500).json(err);
    }
  }
);
app.post('/upload', upload.single('photo'), (req, res) => {
  res.json({
    url: `/avatars/${req.file.filename}`,
  });
});
app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.send(
      `<script>window.opener.postMessage('${JSON.stringify(
        req.user
      )}','*');window.close();</script>`
    );
  }
);
app.listen(3001, () => {
  console.log('server run');
});
