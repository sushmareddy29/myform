import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import stepsReducer from './StepsReducer';

export default combineReducers({
    form: formReducer,
    steps: stepsReducer
});