import React from 'react';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { MainContext } from '../../../pages';
export const WelcomeStep: React.FC = () => {
  const { onNextStep } = React.useContext(MainContext);
  return (
    <WhiteBlock>
      <h3>Welcome to Clubhouse</h3>
      <p>Test</p>
      <div>
        <Button onClick={onNextStep} >Get your username</Button>
      </div>
    </WhiteBlock>
  );
};
