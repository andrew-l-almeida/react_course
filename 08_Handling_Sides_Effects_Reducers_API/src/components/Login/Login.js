import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const Login = (props) => {
  const ctx = useContext(AuthContext)
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.includes('@') }
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.includes('@') }
    }
    return { value: '', isValid: false }
  }
  const passwordReducer = (state, action) => {
    if(action.type === 'USER_INPUT'){
      return { value: action.val, isValid: action.val.length > 6}
    }
    if(action.type === 'INPUT_BLUR'){
      return { value: state.value, isValid: state.value.length > 6}
    }
    return { value: '', isValid: false }
  }
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null })
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null })

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Checking for validity!!  ')
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      )
    }, 300)
    return () => {
      console.log('cleaning')
      clearInterval(timer)
    }
  }, [emailState.isValid, passwordState.isValid])


  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value })

    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value})

    setFormIsValid(
      emailState.isValid && passwordState.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR'})
  };

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passwordState.value);
    }else if(!emailState.isValid){
      emailInputRef.current.focus()
    }else{
      passwordInputRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input ref={emailInputRef} id='email' label='E-Mail' type='email' isValid={emailState.isValid} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} />

        <Input ref={passwordInputRef} id='password' label='Password' type='password' isValid={passwordState.isValid} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
