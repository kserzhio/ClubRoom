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

app.post(
  '/auth/phone',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const phone = req.body.phone;
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
