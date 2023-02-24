import React, { useState } from 'react';

import './SignForm.css'

const SignForm = () => {

  let [signedIn, setSignedIn] = useState(false);


  return (
    <div className="sign">
    <div className='sign-form'>
       {
        signedIn?
        <h3>HELLO</h3> :
        <h3>WELCOME</h3>
       }
       
       {
        signedIn ? 
       <h2>WELCOME BACK</h2> :
       <h2>to BookMyMovie</h2>
       }
        
       <div className="mb-3 form-control-group">
       <label className='form-label'>Email</label>
       <input type="email" placeholder='Enter Your email' className='form-control' name="email"/>
       </div>

       <div className="mb-3 form-control-group">
       <label className='form-label'>password</label>
       <input type="password" placeholder='Enter Your password' className='form-control' name="password"/>
       </div>

      {!signedIn &&
       <div className="mb-3 form-control-group">
       <label className='form-label'>Confirm password</label>
       <input type="password" placeholder='Confirm Your password'className='form-control' name="confirm"/>
       </div>}

       <div className="btn-wrapper mb-3 ">
        <button className="btn btn-primary">{!signedIn ? 'Sign Up' : 'Sign In'}</button>
       </div>

       {!signedIn ? <span className="login-text">
        Already have an account ? &nbsp; &nbsp;
        <span className="login-link" onClick={() => setSignedIn(true)}>Login</span>
       </span>
       :
       <span className="login-text">
        Don't have an account ? &nbsp; &nbsp;
        <span className="login-link" onClick={() => setSignedIn(false)}>Sign Up</span>
       </span>}
    </div>
    </div>
  );
}

export default SignForm;
