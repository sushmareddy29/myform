
import React from 'react';
import {Checkbox, Select} from 'semantic-ui-react';
class StepTwo extends React.Component {
    constructor(props) {
        super(props);
        this.isValidated = this.isValidated.bind(this);
    }
    isValidated() {
        debugger;
        console.log('validated');
        return true;
    }
    render() {
        const firstOptions = [
            { key: 'A', value: 'A', text: 'A' },
            { key: 'B', value: 'B', text: 'B' },
            { key: 'C', value: 'C', text: 'C' }
        ];
        return (
            <div className="StepTwo">
                <div className='input-form-field'>
                    <p className={'input-form-validation'}>Must display another select - PENDING</p>
                    <Select placeholder='Select your country' options={firstOptions}/>
                </div>

            </div>

        );
    }
}

export default StepTwo;

/*
import React from 'react';
import {Checkbox, Input} from 'semantic-ui-react';

function StepTwo() {
    return (
        <div className="StepTwo">
            <div className='input-form-field'>
                <p className={'input-form-validation'}>Must select One</p>

                <Checkbox label='CheckBox 1'/>
            </div>
            <div className='input-form-field'>
                <Checkbox label='CheckBox 2'/>
            </div>

            <div className='input-form-field'>
                <Checkbox label='Other'/>
                <p className={'input-form-validation'}>Input field should appear- PENDING</p>
            </div>
        </div>



    );
}

export default StepTwo;
*/
