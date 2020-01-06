import React from 'react';
import './StepThree.css';
import StepThreeForm from './StepThreeForm';
import {validate} from './StepThreeForm';


class StepThree extends React.Component {
    constructor(props) {
        super(props);
        this.isValidated = this.isValidated.bind(this);
    }

    isValidated() {
        const {stepThreeFormValues} = this.props;
        if (stepThreeFormValues) {
            const errors = validate(stepThreeFormValues.values);
            if (errors.noValues) {
                return false;
            } else {
                return stepThreeFormValues.values.checkbox1 || stepThreeFormValues.values.checkbox2 || stepThreeFormValues.values.none || stepThreeFormValues.values.other
            }
        }
    }

    render() {
        return (
            <div className='StepThree'>
                <StepThreeForm />
            </div>
        );
    }

}

export default StepThree;
