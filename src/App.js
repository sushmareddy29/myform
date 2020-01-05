import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import StepZilla from "react-stepzilla";
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';
import StepThree from './components/StepThree/StepThree';
import {Provider} from 'react-redux';
import {store} from './store'
import {Step} from 'semantic-ui-react';


class App extends React.Component {
    render() {
        const steps = [
            {name: 'Step 1', component: <StepOne/>},
            {name: 'StepTwo', component: <StepTwo/>},
            {name: 'StepThree', component: <StepThree/>}

        ];
        return (
            <Provider store={store}>
                <div className="App">
                    <Step.Group>
                        <Step
                            link
                            title='Shipping'
                            description='Choose your shipping options'
                        >
                            <StepOne />
                        </Step>
                        <Step
                            link
                            title='Billing'
                            description='Enter billing information'
                        >
                            <StepTwo />
                        </Step>
                    </Step.Group>
                    <form>
                        <StepZilla showNavigation showSteps steps={steps}/>
                    </form>
                </div>
            </Provider>
        );
    }
}

export default App;
