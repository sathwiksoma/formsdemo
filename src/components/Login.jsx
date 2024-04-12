import { useState } from "react";

export default function Login() {
    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [enteredPassword, setEnteredPassword] = useState("");

    // simplifying the above code into single function

    const [enteredValues, setEnteredValues] = useState({
        email:'',
        password:''
    })
    const [didEdit, setDidEdit] = useState({
        email:false,
        password:false,
    });
    const isEmailInvalid = didEdit.email && !enteredValues.email.includes("@gmail.com");
    const isPasswordInvalid = didEdit.password && enteredValues.password.trim().length<6;
    console.log('passwordIsInvalid', isPasswordInvalid)
    function handleSubmit(event){
        event.preventDefault();
    }


    // function handleSubmit(event){
    //     event.preventDefault();
    //     console.log('Entered Values' + enteredValues.email);
    //     console.log('Entered Values' + enteredValues.password);
    //     console.log("Form Submitted Succesfully !");
    // }
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
        }));
        setDidEdit( prevEdit => ({
            ... prevEdit,
            [Identifier]:false,
        }));
        // console.log('entered values in change event' + enteredValues)
    }
    function handleInputBlur(Identifier){
        console.log('on blur called')
        setDidEdit((prevEdit)=>({
            ...prevEdit,
            [Identifier]:true
        }))
        console.log('didEdit.password' + didEdit.password)
    }
    console.log('emailIsInvalid' + isEmailInvalid)
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email"
                    onChange={(event) => {handleInputChange("email", event.target.value)}} value = {enteredValues.email}
                    onBlur={()=>handleInputBlur('email')}
                    />
                    <div className="control-error">
                        {
                            isEmailInvalid && <p>Please enter a valid Email</p>
                        }
                    </div>
                </div>
                <div className="control no-margin">
                <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"
                    onChange={(event) => {handleInputChange("password", event.target.value)}} value = {enteredValues.password}
                    onBlur={()=>handleInputBlur('password')}
                    />
                    <div className="control-error">
                        {
                            isPasswordInvalid && <p>Please enter a valid Password</p>
                        }
                    </div>
                </div>
            </div>
            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button" type="submit">Login</button>
            </p>

        </form>
    )

}