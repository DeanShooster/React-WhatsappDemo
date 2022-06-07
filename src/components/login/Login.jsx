import { useContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router';

import './login.scss';

import {LoginReducer} from './loginReducer/LoginReducer';
import {UserContext} from '../context/UserContext';

const Login = () =>{

    const navigate = useNavigate();

    const [formState,dispatchFormState] = useReducer(LoginReducer, {
        isValid: { email: false, password: false },
        isFormValid: false
    });
    const {user,setUser} = useContext(UserContext);

    const OnSubmitHandler = (event) => {
        event.preventDefault();
        if( !formState.isFormValid ) return;
        setUser('USER');
        navigate('/chatroom');
    }

    useEffect( ()=>{ 
        if(user) 
            navigate('/chatroom') 
    },[user,navigate])

    return (
        <div className='login-modal'>
            <form onSubmit={OnSubmitHandler} >
                <div>
                    <label>E-Mail</label>
                    <input type='email' autoComplete='new-password'
                    onChange={(e)=>{dispatchFormState( {type: 'EMAIL' , payload: e.target.value} )}} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' autoComplete='new-password'
                    onChange={(e)=>{dispatchFormState( {type: 'PASSWORD' , payload: e.target.value} )}} />
                </div>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;