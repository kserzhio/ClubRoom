import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { MainContext } from '../../../pages';
import { StepInfo } from '../../StepInfo';
export const EnterNameStep = () => {
  const { onNextStep, userData, setFieldValue } = React.useContext(MainContext);
  const [inputValue, setInputValue] = React.useState<string>(userData.fullname);
  const nextDisabled = !inputValue;
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const onClickNextStep = () => {
    setFieldValue('fullname', inputValue);
    onNextStep();
  };
  return (
    <div>
      <StepInfo
        title="What's your full name"
        description='People use real names on Club'
        icons='https://img.icons8.com/fluent/48/000000/hitchhike.png'
      ></StepInfo>
      <WhiteBlock>
        <div>
          <input
            className='form-control__input'
            onChange={handleChangeInput}
            value={inputValue}
            placeholder='Enter fullname'
          />
        </div>
        <Button
          className='mr-t-20'
          icons={faArrowRight}
          onClick={onClickNextStep}
          disabled={nextDisabled}
        >
          Next
        </Button>
      </WhiteBlock>
    </div>
  );
};
