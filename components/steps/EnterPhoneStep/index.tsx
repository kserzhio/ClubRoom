import React from 'react';
import { WhiteBlock } from '../../WhiteBlock';
import NumberFormat from 'react-number-format';
import { Button } from '../../Button';
type InputValueState = {
  formattedValue: string;
  value: string;
};
export const EnterPhoneStep = () => {
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
            value={values.value}
            onValueChange={({ formattedValue, value }) =>
              setValues({ formattedValue, value })
            }
          />
        </div>
        <Button disabled={nextDisabled}>Next</Button>
      </WhiteBlock>
    </div>
  );
};
