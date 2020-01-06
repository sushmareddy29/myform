import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {labelStructure} from '../helper/labelStructure';


export const validate = values => {
    const errors = {};
    if (!values) {
        errors.noValues = 'true';
    }

    return errors;
};

class StepTwoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            checkBox1: false,
            checkBox2: false,
            none: false,
            other: false,
        }
    }

    validateError = (formValues) => {
        const {values} = formValues;
        if (values) {
            return !(values.checkbox1 || values.checkbox2 || values.none || values.other)
        }
        return true;
    };

    render() {
        const {stepTwoForm} = this.props;
        return (
            <div>
                {(stepTwoForm && this.validateError(stepTwoForm)) &&
                <p className={'input-form-validation'}>Please select atleast one option</p>}
                <div className='input-form-field'>
                    <span className='input-form-field'>
                        <Field
                            name='checkbox1'
                            component={'input'}
                            type='checkbox'
                        />
                    </span>
                    <label>{labelStructure.checkBox1}</label>
                </div>
                <div className={'input-form-field'}>
                    <span className='input-form-field'>
                        <Field
                            name='checkbox2'
                            component={'input'}
                            type='checkbox'
                        />
                    </span>
                    <label>{labelStructure.checkBox2}</label>

                </div>
                <div className={'input-form-field'}>
                    <span className='input-form-field'> 
                        <Field
                            name='none' 
                            component={'input'} 
                            type='checkbox'/>
                    </span>
                    <label>{labelStructure.none}</label>
                </div>
                <div className={'input-form-field'}>
                    <span className='input-form-field'>
                        <Field 
                            name='other' 
                            component={'input'} 
                            type='checkbox'
                        />
                    </span>
                    <label>{labelStructure.other}</label>
                    {stepTwoForm && stepTwoForm.values && stepTwoForm.values.other &&
                    <span className='input-form-field'>
                        <Field 
                            className='inputFields' 
                            name='otherField' 
                            component={'input'}
                        />
                    </span>}
                </div>
            </div>

        );
    }
}

StepTwoForm = reduxForm({
    form: 'stepTwoForm',
    validate,
    destroyOnUnmount: false
})(StepTwoForm);

StepTwoForm = connect(
    state => ({
        stepTwoForm: (state.form.stepTwoForm),
        initialValues: state.steps.stepTwoForm && state.steps.stepTwoForm.values,
    }),
)(StepTwoForm);

export default StepTwoForm;
