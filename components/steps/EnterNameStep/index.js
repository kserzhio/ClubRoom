import {WhiteBlock} from '../../WhiteBlock';
import {Button} from '../../Button';
export const EnterNameStep = () => {
    return (
        <div>
            <WhiteBlock>
                <div>
                    <input placeholder="Enter Name" />
                </div>
                <Button>
                    Next
                </Button>
            </WhiteBlock>
        </div>
    )
}