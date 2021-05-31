import React from 'react';
import { WhiteBlock } from '../../WhiteBlock';
import NumberFormat from 'react-number-format';
import { Button } from '../../Button';
import { MainContext } from '../../../pages';
type InputValueState = {
  formattedValue: string;
  value: string;
};
export const EnterPhoneStep = () => {
  const {onNextStep} = React.useContext(MainContext);
  const [values, setValues] = React.useState<InputValueState>(
    {} as InputValueState
  );
  const nextDisabled =
    !values.formattedValue || values.formattedValue.includes('_');
  return (
    <div>
      <WhiteBlock>
        <div>
          <NumberFormat
            format='+# (###) ###-##-##'
            mask='_'
            placeholder='+38 (068) 7100 550'
            className='form-control__input'
            value={values.value}
            onValueChange={({ formattedValue, value }) =>
              setValues({ formattedValue, value })
            }
          />
        </div>
        <Button className="mr-t-20" disabled={nextDisabled} onClick={onNextStep} >Next</Button>
      </WhiteBlock>
    </div>
  );
};
