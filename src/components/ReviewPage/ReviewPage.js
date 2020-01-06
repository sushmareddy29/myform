import React from 'react';
import {connect} from 'react-redux';
import {labelStructure} from '../helper/labelStructure';
import saveUserData from '../helper/saveUserData';

class ReviewPage extends React.Component {
    constructor() {
        super();
        this.state = {
            dataSaved: false,
        }
    }

    saveUserData = (e) => {
        const {stepOneForm, stepTwoForm, stepThreeForm} = this.props;
        let userData = {
            firstName: stepOneForm.values.firstname,
            lastName: stepOneForm.values.lastName,
            email: stepOneForm.values.email,
            year: stepOneForm.values.year,
            checkbox1: stepTwoForm.values.checkbox1,
            checkbox2: stepTwoForm.values.checkbox2,
            none: stepTwoForm.values.none,
            other: stepTwoForm.values.other,
            otherField: stepTwoForm.values.otherField,
            option1: stepThreeForm.values.optionParent,
            option2: stepThreeForm.values.optionChild,
        }
        saveUserData(userData);
        this.setState({dataSaved: true});
        e.preventDefault();
    };

    render() {
        const {stepOneForm, stepTwoForm, stepThreeForm} = this.props;
        const {dataSaved} = this.state;
        return (
            <div className='ReviewPage'>
{/*
                <div className={'data-banner'}>{dataSaved ? 'Data Saved Successfully!': ''}</div>
*/}
                {dataSaved && <div className='ui success message ui big message'>
                    <i className='close icon'></i>
                    <div className='header'>
                        Data Saved Successfully!
                        </div>
                </div>}
                <div className='row'>
                    <div className='review-column'>
                        <label className={'input-form-field'}>{labelStructure.firstName}</label>
                    </div>
                    <div className='review-column'>
                        <span>{stepOneForm.values.firstname}</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='review-column'>
                        <label className={'input-form-field'}>{labelStructure.lastName}</label>
                    </div>
                    <div className='review-column'>
                        <span>{stepOneForm.values.lastName}</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='review-column'>
                        <label className={'input-form-field'}>{labelStructure.email}</label>
                    </div>
                    <div className='review-column'>
                        <span>{stepOneForm.values.email}</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='review-column'>
                        <label className={'input-form-field'}>{labelStructure.year}</label>
                    </div>
                    <div className='review-column'>
                        <span>{stepOneForm.values.year}</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='review-column'>
                        <label className={'input-form-field'}>Selected Checkboxes</label>
                    </div>
                    <div className='review-column'>
                        <p className='other-checkbox'>{stepTwoForm.values.checkbox1 ? labelStructure.checkBox1 : ''}</p>
                        <p className='other-checkbox'>{stepTwoForm.values.checkbox2 ? labelStructure.checkBox2 : ''}</p>
                        <p className='other-checkbox'>{stepTwoForm.values.none ? labelStructure.none : ''}</p>
                        <p className='other-checkbox'>{stepTwoForm.values.other ? labelStructure.other : ''}</p>
                        <p>{stepTwoForm.values.otherField}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='review-column'>
                        <label className={'input-form-field'}>{labelStructure.option1}</label>
                    </div>
                    <div className='review-column'>
                        <span>{stepThreeForm.values.optionParent}</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='review-column'>
                        <label className={'input-form-field'}>{labelStructure.option2}</label>
                    </div>
                    <div className='review-column'>
                        <span>{stepThreeForm.values.optionChild}</span>
                    </div>
                </div>
                <div> <button className='btn-lg btn-primary pull-right btn-save' onClick={(e) => {
                    this.saveUserData(e)
                }}>Save
                </button></div>

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        stepOneForm: state.form.stepOneForm,
        stepTwoForm: state.form.stepTwoForm,
        stepThreeForm: state.form.stepThreeForm,
    };
}

export default connect(mapStateToProps, null)(ReviewPage);
