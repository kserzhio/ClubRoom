import React from 'react';
import {WhiteBlock} from '../../WhiteBlock';
import {Button} from '../../Button';
import { MainContext } from '../../../pages';
export const TwitterStep:React.FC = () => {
    const {onNextStep} = React.useContext(MainContext);

    const onclickAuth = () => {
        const win = window.open('http://localhost:3001/auth/github','Auth','width=400,height=400');
         const timer = setInterval(() => {
            if(win.closed) {

                clearInterval(timer);
                onNextStep();
            }
        },100);
    }
    React.useEffect(() => {
        window.addEventListener('message',(data) => {
            console.log(data);
        })
    },[])
    return (
        <div>
            <WhiteBlock>
                <div>
                    TwitterStep
                </div>
                <Button onClick={onclickAuth}>
                    Import GitHab
                </Button>
            </WhiteBlock>
        </div>
    )
}