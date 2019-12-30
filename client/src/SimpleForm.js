import React from 'react';
import UseForm from './hoc/UseForm';

function SimpleForm(){
    const [email, updateEmail, resetEmail] = UseForm("");
    const [password, updatePassword, resetPassword] = UseForm("");
    return(
        <div>
            <h2>Your email is : {email}</h2>
            <input type="text" value = {email} onChange = {updateEmail}  />
            <button onClick = {resetEmail}>Reset</button>
            <h2>Your email is : {password}</h2>
            <input type="text" value = {password} onChange = {updatePassword}  />
            <button onClick = {resetPassword}>Reset</button>
        </div>
    );
}

export default SimpleForm;