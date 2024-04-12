import { useState } from "react";
import Input from "./input";
import { isEmail, hasMinLength, isNotEmpty } from "../util/Validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    if(emailHasError || passwordHasError)
    {return}
    console.log(emailValue,passwordValue)
  }

  return(
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="control-row">
        <Input
            label="Email"
            id="email"
            type="email"
            name="email"
            OnBlur={handleEmailBlur}
            onChange ={handleEmailChange}
            value = {emailValue}
            error={emailHasError && 'please enter a valid Email'}
        />
        <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            OnBlur={handlePasswordBlur}
            onChange ={handlePasswordChange}
            value = {passwordValue}
            error={passwordHasError && 'please enter a valid password'}
        />

        </div>
        <p className="form-actions">
            <button className="button button-flat">Reset</button>
            <button className="button" type="submit">Login</button>
        </p>
    </form>
  )

}