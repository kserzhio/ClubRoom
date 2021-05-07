import React from 'react';
import { useRouter } from 'next/router';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';
import Axios from '../../../core/axios';
export const EnterCodeStep = () => {
  const router = useRouter();
  const [codes, setCodes] = React.useState(['', '', '', '']);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const nextDisabled = codes.some((v) => !v);
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute('id')) - 1;
    const value = event.target.value;
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
    if (event.target.nextSibling) {
      (event.target.nextSibling as HTMLInputElement).focus();
    }
  };
  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await Axios.get('./todos');
      router.push('/room');
    } catch (error) {
      alert('Error');
    }

    setIsLoading(false);
  };
  return (
    <div>
      <StepInfo
        icons='/static/number.svg'
        title='Enter your active code'
      ></StepInfo>
      {!isLoading ? (
        <WhiteBlock>
          <div>
            <input
              placeholder='X'
              type='tel'
              maxLength={1}
              id='1'
              onChange={handleChangeInput}
              value={codes[0] || ''}
            />
            <input
              placeholder='X'
              type='tel'
              maxLength={1}
              id='2'
              onChange={handleChangeInput}
              value={codes[1] || ''}
            />
            <input
              placeholder='X'
              type='tel'
              maxLength={1}
              id='3'
              onChange={handleChangeInput}
              value={codes[2] || ''}
            />
            <input
              placeholder='X'
              type='tel'
              maxLength={1}
              id='4'
              onChange={handleChangeInput}
              value={codes[3] || ''}
            />
          </div>
          <Button onClick={onSubmit} disabled={nextDisabled}>
            Next
          </Button>
        </WhiteBlock>
      ) : (
        <div>
          <div className='loader'></div>
          <h3>Activetion in progress...</h3>
        </div>
      )}
    </div>
  );
};
