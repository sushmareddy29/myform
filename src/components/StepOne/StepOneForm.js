import React from 'react';
import './StepOne.css';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {labelStructure} from '../helper/labelStructure';

export const validate = values => {
    const errors = {};
    if(!values) {
        errors.noValues = 'true';
    }
    else{
        if (!values.firstname) {
            errors.firstname = 'FirstName is required'
        }
        if (!values.lastName) {
            errors.lastName = 'Please Enter Last Name'
        }else if (values && values.lastName.length < 1) {
            errors.lastName = 'Please Enter Last Name'
        }
        if (!values.email) {
            errors.email = 'Please enter Email Address'
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }
        if (!values.year || (values.year && values.year.length<2)) {
            errors.year = 'Please enter atleast 2 digits'
        }
    }

    return errors;
};

class StepOneForm extends React.Component {

    render() {
        const {stepOneForm} = this.props;
        return (
            <div>
                <div className = 'row'>
                    <div className = 'column-label' >
                        <label className={'input-form-field'}>{labelStructure.firstName}</label>
                    </div>
                    <div className='column'>
                        <Field name='firstname' className='inputFields' component={'input'} />
                        {(stepOneForm && stepOneForm.syncErrors && stepOneForm.syncErrors.firstname) &&
                        <span className={'input-form-validation'}>{stepOneForm.syncErrors.firstname}</span>}
                    </div>
                </div>
                <div className = 'row'>
                    <div className = 'column-label' >
                        <label className={'input-form-field'}>{labelStructure.lastName}</label>
                    </div>
                    <div className='column'>
                        <Field className='inputFields' name='lastName' component={'input'}/>
                        {(stepOneForm && stepOneForm.syncErrors && stepOneForm.syncErrors.lastName) &&
                        <span className={'input-form-validation'}>{stepOneForm.syncErrors.lastName}</span>}
                    </div>
                </div>
                <div className = 'row'>
                    <div className = 'column-label' >
                        <label className={'input-form-field'}>{labelStructure.email}</label>
                    </div>
                    <div className='column'>
                        <Field className='inputFields' name='email' component={'input'}/>
                        {(stepOneForm && stepOneForm.syncErrors && stepOneForm.syncErrors.email) &&
                        <span className={'input-form-validation'}>{stepOneForm.syncErrors.email}</span>}
                    </div>
                </div>
                <div className = 'row'>
                    <div className = 'column-label' >
                        <label className={'input-form-field'}>{labelStructure.year}</label>
                    </div>
                    <div className='column'>
                        <Field className='inputFields' name='year' component={'input'}/>
                        {(stepOneForm && stepOneForm.syncErrors && stepOneForm.syncErrors.year) &&
                        <span className={'input-form-validation'}>{stepOneForm.syncErrors.year}</span>}
                    </div>
                </div>
            </div>

        );
    }

}
StepOneForm = reduxForm({
    form: 'stepOneForm',
    validate,
    destroyOnUnmount: false
})(StepOneForm);

StepOneForm = connect(
    state => ({
        stepOneForm: (state.form.stepOneForm),
        initialValues: state.steps.stepOneForm && state.steps.stepOneForm.values,
    }),
)(StepOneForm);

export default StepOneForm;
