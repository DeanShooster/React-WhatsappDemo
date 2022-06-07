import {IsEmailValid} from '../../utils/IsEmailValid';
import {IsPasswordValid} from '../../utils/IsPasswordValid';

export function LoginReducer(state, action){

    let isValid;
    if( state.isValid.email && state.isValid.password ){
        const isFormValid = true;
        return {...state, isFormValid };
    }

    switch(action.type){ 
        case 'EMAIL':
            let email = IsEmailValid( action.payload );
            isValid = { ...state.isValid,email };
            return { ...state, isValid };
        case 'PASSWORD':
            let password = IsPasswordValid( action.payload );
            isValid = { ...state.isValid,password };
            return { ...state, isValid };
        default: return;
    }
};