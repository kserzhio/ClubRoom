import React from 'react';
import { useRouter } from 'next/router';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';
import { Axios } from '../../../core/axios';
export const EnterCodeStep = () => {
  const router = useRouter();
  const [codes, setCodes] = React.useState(['', '', '', '']);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const nextDisabled = codes.some((v) => !v);
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute('id'));
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
      <div className='mr-10'>
        <StepInfo
          icons='/static/number.svg'
          title='Enter your active code'
        ></StepInfo>
      </div>
      {!isLoading ? (
        <WhiteBlock>
          <div className='flex flex-wrap'>
            {codes.map((code, index) => {
              return (
                <input
                  key={index}
                  placeholder='X'
                  type='tel'
                  className='form-control__input md mr-10'
                  maxLength={1}
                  id={index.toString()}
                  onChange={handleChangeInput}
                  value={code}
                />
              );
            })}
          </div>
          <Button
            className='mr-t-20 mr-l-10'
            onClick={onSubmit}
            disabled={nextDisabled}
          >
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
