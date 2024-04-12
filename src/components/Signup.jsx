import { useState } from "react";

export default function Signup(){
    const[PasswordAreEqual,setPasswordAreEqual]=useState(false);
    function handleSubmit(event){
        event.preventDefault();
        const fd = new FormData(event.target);
        // single input values
        const enteredEmail = fd.get('email');

        // to read all or multiple values
        const data = Object.fromEntries(fd.entries());
        console.log(data)
        // to read all data from same control which has same name attributes

        const acquasitionchannel = fd.getAll('acquasition');
        data.acquasition = acquasitionchannel;
        console.log('data.password'+data.password)
        console.log('confirm-password'+data['confirm-password'])
        if(data.password!==data['confirm-password']){
            setPasswordAreEqual(true);
            return;
        }
        console.log(data);
        event.target.reset();
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Welcome On-board</h2>
            <p>Please Fill the form details below : </p>
            <div className="control">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
            </div>
            <div className="control">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
            </div>
            <div className="control">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="confirm-password" id="confirm-password" name="confirm-password" />
            </div>
            <div className="control">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />
            </div>
            <div className="control">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />
            </div>
            <div className="control">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" />
            </div>
            <div className="control">
                <label htmlFor="role">Your Role</label>
                <select id="role" name="role">
                    <option value="student">Student</option>
                    <option value="employee">Employee</option>
                    <option value="engineer">Engineer</option>
                    <option value="founder">Founder</option>
                </select>
            </div>

            <fieldset>
                <legend>How did you know us ..?</legend>
                <div className="control">
                    <input type="checkbox"
                    id="google"
                    name="acquasition"
                    value="google" />
                    <label htmlFor="google">Google</label>                   
                </div>
                <div className="control">
                    <input type="checkbox"
                    id="friends"
                    name="acquasition"
                    value="friends" />
                    <label htmlFor="friends">Friends</label>                   
                </div>
                <div className="control">
                    <input type="checkbox"
                    id="others"
                    name="acquasition"
                    value="others" />
                    <label htmlFor="others">Others</label>                   
                </div>
            </fieldset>
            <div className="control">
                <label htmlFor="terms-and-conditions">
                    <input type="checkbox" id = "terms-and-conditions" name="terms"/>
                    Check the box to Agree to the Conditions
                </label>
            </div>

            <p className="form-actions">
                <button type="reset" className="button button-flat">Reset</button>
                <button type="submit" className="button">Submit</button>
            </p>
        </form>
    )
}