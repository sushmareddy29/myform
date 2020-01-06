import React from 'react';
import './StepOne.css';
import StepOneForm from './StepOneForm';
import {validate} from './StepOneForm';


class StepOne extends React.Component {
    constructor(props) {
        super(props);
        this.isValidated = this.isValidated.bind(this);
    }

    isValidated() {
        const {stepOneFormValues} = this.props;
        if(stepOneFormValues) {
           const errors = validate(stepOneFormValues.values);
           if(errors.noValues) {
               return false;
           } else if(errors.firstname || errors.email || errors.lastName ||errors.year) {
               return false
           }
        }
    }

    render() {
        return (
            <div className='StepOne'>
                <StepOneForm />
            </div>
        );
    }

}

export default StepOne;
