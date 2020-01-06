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

class StepThreeForm extends React.Component {

    getChildOptions(formValues) {
        if (formValues) {
            const parentValue = formValues.optionParent;
            switch (parentValue) {
                case 'A':
                    return ['', 'a1', 'a2', 'a3'];
                case 'B':
                    return ['', 'b1', 'b2', 'b3'];
                default:
                    return [];
            }
        }
    }

    render() {
        const {stepThreeForm} = this.props;
        let childValues = stepThreeForm && this.getChildOptions(stepThreeForm.values);

        return (
            <div>
                <div className='row'>
                    <div className='input-form-field'>
                    <label>{labelStructure.option1}</label>
                    <span className='input-form-field'><Field className='inputFields' name={'optionParent'} component='select'>
                        <option></option>
                        <option value='A'>A</option>
                        <option value='B'>B</option>
                    </Field></span>
                </div>
                </div>
                <div className='row'>
                {(childValues && childValues.length > 0) && <div className='input-form-field'>
                    <label>{labelStructure.option2}</label>
                    <span className='input-form-field'><Field className='inputFields' name='optionChild' component='select'>
                        {childValues.map((val) => <option key={val} value={val}>{val}</option>)}
                    </Field></span>
                </div>}
                </div>
            </div>

        );
    }
}

StepThreeForm = reduxForm({
    form: 'stepThreeForm',
    validate,
    destroyOnUnmount: false
})(StepThreeForm);

StepThreeForm = connect(
    state => ({
        stepThreeForm: ( state.form.stepThreeForm ),
        initialValues: state.steps.stepThreeForm && state.steps.stepThreeForm.values,
    }),
)(StepThreeForm);

export default StepThreeForm;
