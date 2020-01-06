import {
    types as stepsType
} from '../actions/StepsActions';

export default (state = '', action) => {
    switch (action.type) {
        case stepsType.LOAD_DATA:
            return {
                ...state,
                stepOneForm:{
                    values: {
                        firstname: action.data.firstName,
                        lastName: action.data.lastName,
                        year: action.data.year,
                        email: action.data.email,
                    }
                },
                stepTwoForm:{
                    values: {
                        checkbox1: action.data.checkbox1,
                        checkbox2: action.data.checkbox2,
                        none: action.data.none,
                        other: action.data.other,
                    }
                },
                stepThreeForm:{
                    values: {
                        optionParent: action.data.option1,
                        optionChild: action.data.option2,
                    }
                }
            }

        default:
            return state;

    }

}