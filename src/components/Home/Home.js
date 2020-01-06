import React from 'react';
import {connect} from 'react-redux';
import StepZilla from 'react-stepzilla';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import ReviewPage from '../ReviewPage/ReviewPage';
import SubmitPage from '../SubmitPage/SubmitPage';
import {actions} from '../../actions/StepsActions';
import './Home.css';
import Cookies from 'js-cookie';

class Home extends React.Component {

    componentDidMount(){
        let userData = Cookies.get('userFormData');
        if(userData){
            let formattedUserData = JSON.parse(userData);
            this.props.loadData(formattedUserData);
        }
    }

    render() {
        const steps = [
            {name: 'Step 1', component: <StepOne stepOneFormValues={this.props.stepOneForm}/>},
            {name: 'Step 2', component: <StepTwo stepTwoFormValues={this.props.stepTwoForm}/>},
            {name: 'Step 3', component: <StepThree stepThreeFormValues={this.props.stepThreeForm}/>},
            {name: 'Review', component: <ReviewPage />},
            {name: 'Done', component: <SubmitPage />}

        ];
        return (
            <div>
                <div className='Home'>
                    <form>
                        <StepZilla
                            showNavigation
                            stepsNavigation={false}
                            showSteps
                            steps={steps}
                            nextButtonText={'Continue'}
                            backButtonText={'Back'}
                            nextTextOnFinalActionStep={'Submit'}
                            prevBtnOnLastStep={false}
                        />
                    </form>
                </div>
            </div>
        );
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        loadData: (data) => {
            dispatch(actions.loadData(data))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        stepOneForm: state.form.stepOneForm,
        stepTwoForm: state.form.stepTwoForm,
        stepThreeForm: state.form.stepThreeForm,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
