import React from 'react';
import {WhiteBlock} from '../../WhiteBlock';
import {Button} from '../../Button';
import { MainContext } from '../../../pages';
export const TwitterStep:React.FC = () => {
    const {onNextStep} = React.useContext(MainContext);
    return (
        <div>
            <WhiteBlock>
                <div>
                    TwitterStep
                </div>
                <Button onClick={onNextStep}>
                    Next
                </Button>
            </WhiteBlock>
        </div>
    )
}