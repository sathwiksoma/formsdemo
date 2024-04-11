import { useState } from "react";

export default function Login() {
    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [enteredPassword, setEnteredPassword] = useState("");

    // simplifying the above code into single function

    const [enteredValues, setEnteredValues] = useState({
        email:'',
        password:''
    })
    function handleSubmit(event){
        event.preventDefault();
        console.log('Entered Values' + enteredValues.email);
        console.log('Entered Values' + enteredValues.password);
        console.log("Form Submitted Succesfully !");
    }
    // function handleEmailChange(event){
    //     setEnteredEmail(event.target.value);
    // }
    // function handlePasswordChange(event){
    //     setEnteredPassword(event.target.value);
    // }

    // simplifying the above code into single function

    function handleInputChange(Identifier, Value){
        setEnteredValues( prevValues => ({
            ... prevValues,
            [Identifier]:Value
        }))
        console.log('entered values in change event' + enteredValues)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"
                    onChange={(event) => {handleInputChange("email", event.target.value)}} value = {enteredValues.email}
                    />
                </div>
                <div className="control no-margin">
                <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"
                    onChange={(event) => {handleInputChange("password", event.target.value)}} value = {enteredValues.password}
                    />
                </div>
            </div>
            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button" type="submit">Login</button>
            </p>

        </form>
    )

}