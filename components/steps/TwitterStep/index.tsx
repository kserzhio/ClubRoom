import React from 'react';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { MainContext, UserData } from '../../../pages';
import Cookies from 'js-cookie';
export const TwitterStep: React.FC = () => {
  const { onNextStep, setUserData } = React.useContext(MainContext);

  const onclickAuth = () => {
    window.open(
      'http://localhost:3001/auth/github',
      'Auth',
      'width=400,height=400'
    );
  };
  React.useEffect(() => {
    window.addEventListener('message', ({ data }) => {
      const user: string = data;
      if (typeof user === 'string' && user.includes('avatarUrl')) {
        const json: UserData = JSON.parse(user);
        setUserData(json);
        onNextStep();

        Cookies.set('token', json.token);
      }
    });
  }, []);
  return (
    <div>
      <WhiteBlock>
        <div>TwitterStep</div>
        <Button onClick={onclickAuth}>Import GitHab</Button>
      </WhiteBlock>
    </div>
  );
};
