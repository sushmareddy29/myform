import React from 'react';
import {Input} from 'semantic-ui-react';
import './StepOne.css';
import {connect} from 'react-redux';
import {reduxForm, Field, formValues} from 'redux-form';

const validate = values => {
    console.log('VALIDATE CALLED')
    const errors = {};
    if (!values.firstname) {
        errors.firstname = 'Required'
    }
    return errors;
};

export const isValidated = () => {
    debugger;
    const errors = this.props.validate(this.props.stepOneForm.values);
    if(errors.length > 0){
        return false;
    }
}

class StepOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNameValue: null,
            lastNameValue: null,
            showEmailError: null,
            yearValue: null,
            isEmailTouched: false,
            isLastNameTouched: false,
            isFirstNameTouched: false,
            isYearTouched: false,
        };
        this.isValidated = this.isValidated.bind(this);
        this.validateFirstName = this.validateFirstName.bind(this);
        this.validateLastName = this.validateLastName.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateYear = this.validateYear.bind(this);
    }

    isValidated() {
        debugger;
        const errors = this.props.validate(this.props.stepOneForm.values);
        if(errors.length > 0){
            return false;
        }
    }

    validateFirstName(e) {
        const {firstNameValue, isFirstNameTouched} = this.state;
        if ((e && e.target && e.target.value)) {
            this.setState({firstNameValue: e.target.value, isFirstNameTouched: true});
        } else {
            if (!firstNameValue) {
                this.setState({firstNameValue: '', isFirstNameTouched: true});
            }
            return false;
        }
    }

    validateLastName(e) {
        console.log(this.props.stepOneForm);
        const {lastNameValue, isLastNameTouched} = this.state;


        // const {validate} = this.props;
        // validate(this.props.)
        if (e && e.target && e.target.value.length > 0) {
            this.setState({lastNameValue: e && e.target.value, isLastNameTouched: true});
        } else {
            if (!lastNameValue) {
                this.setState({lastNameValue: '', isLastNameTouched: true});
            }
            return false;
        }
    }

    validateEmail(e) {
        const {emailValue, isEmailTouched} = this.state;
        if ((e && e.target && e.target.value.length < 50)) {
            this.setState({emailValue: e.target.value, isEmailTouched: true});

        } else {
            if (!emailValue) {
                this.setState({emailValue: '', isEmailTouched: true});
                return false;
            }
        }
    }

    validateYear(e) {
        // const {yearValue} = this.state;
        // if((!e || (e.target && e.target.value.length < 2)) || (yearValue !== '')) {
        //     this.setState({yearValue: '' });
        //     return false;
        // }
        // else {
        //     this.setState({yearValue: e && e.target.value });
        // }
    }

    render() {
        const {
            firstNameValue,
            lastNameValue,
            emailValue,
            yearValue,
            isFirstNameTouched,
            isLastNameTouched,
            isEmailTouched,
            isYearTouched,
        } = this.state;
        return (
            <div className="StepOne">
                <div className='input-form-field'>
                    <Field name='firstname' component={"input"}/>
                    {(isFirstNameTouched && firstNameValue === '') &&
                    <p className={'input-form-validation'}>FirstName is required</p>}
                </div>
                <div className={'input-form-field'}>
                    <Field name='lastName' component={"input"}/>
                    {(isLastNameTouched && lastNameValue === '') &&
                    <p className={'input-form-validation'}>Please enter atleast 1 letter</p>}
                </div>
                <div className={'input-form-field'}>
                    <Field name='email' component={"input"} onChange={this.validateLastName}/>
                    {(isEmailTouched && emailValue === '') &&
                    <p className={'input-form-validation'}>Maximum 50 letters are allowed</p>}
                </div>
                <div className={'input-form-field'}>
                    <Field name='year' component={"input"}/>
                    {(isYearTouched && yearValue === '') &&
                    <p className={'input-form-validation'}>Please enter atleast 2 digits</p>}
                </div>
            </div>
        );
    }

}
const mapStateToProps = ( state ) => {
    return {
        stepOneForm: ( state.form.stepOneForm )
    };
}

StepOne = reduxForm({
    form: 'stepOneForm',
    validate,
    destroyOnUnmount: false,
})(connect(mapStateToProps, null)(StepOne));

export default StepOne;
