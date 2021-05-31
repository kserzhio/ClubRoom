import React from 'react';
import { WhiteBlock } from '../../WhiteBlock';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../Button';
import { MainContext } from '../../../pages';
import { StepInfo } from '../../StepInfo';
export const WelcomeStep: React.FC = () => {
  const { onNextStep } = React.useContext(MainContext);
  return (
    <div>
      <StepInfo
        title=''
        description=''
        icons='https://img.icons8.com/fluent/48/000000/connected-people.png'
      ></StepInfo>
      <WhiteBlock>
        <h3>Welcome to Clubhouse</h3>
        <p>Test</p>
        <div>
          <Button icons={faArrowRight} onClick={onNextStep}>
            Get your username
          </Button>
        </div>
      </WhiteBlock>
    </div>
  );
};
