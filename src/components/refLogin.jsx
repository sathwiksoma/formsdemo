import { useRef, useState } from "react";

export default function Login () {
    const email = useRef();
    const password = useRef ();
    const [emailIsValid,setEmailIsValid] = useState(false);

    function handleSubmit(event){
        event.preventDefault();
        const enteredEmail = email.current.value;
        console.log(enteredEmail);
        const emailIsValid = enteredEmail.includes('@');
        if(!emailIsValid){
            setEmailIsValid(true)
            return
        }
        console.log('Sending Http Request..');
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" ref={email}
                    />
                </div>
                <div className="control no-margin">
                <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" ref={password}
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