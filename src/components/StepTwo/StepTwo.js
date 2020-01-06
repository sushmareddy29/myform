import React from 'react';
import './StepTwo.css';
import StepTwoForm from './StepTwoForm';
import {validate} from './StepTwoForm';


class StepTwo extends React.Component {
    constructor(props) {
        super(props);
        this.isValidated = this.isValidated.bind(this);
    }

    isValidated() {
        const {stepTwoFormValues} = this.props;
        if(stepTwoFormValues) {
            const errors = validate(stepTwoFormValues.values);
            if(errors.noValues) {
                return false;
            } else {
                return stepTwoFormValues.values.checkbox1 || stepTwoFormValues.values.checkbox2 || stepTwoFormValues.values.none ||stepTwoFormValues.values.other
            }
        }
    }

    render() {
        return (
            <div className='StepTwo'>
                <StepTwoForm />
            </div>
        );
    }

}

export default StepTwo;
