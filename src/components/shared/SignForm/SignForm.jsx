import React from 'react';

import './SignForm.css'

const SignForm = () => {
  return (
    <div className='sign-form'>
       <h3>WELCOME</h3>
       <h2>to BookMyMovie</h2>
        
       <div className="mb-3 form-control-group">
       <label className='form-label'>Email</label>
       <input type="email" placeholder='Enter Your email' className='form-control' name="email"/>
       </div>

       <div className="mb-3 form-control-group">
       <label className='form-label'>password</label>
       <input type="password" placeholder='Enter Your password' className='form-control' name="password"/>
       </div>

       <div className="mb-3 form-control-group">
       <label className='form-label'>Confirm password</label>
       <input type="password" placeholder='Confirm Your password'className='form-control' name="confirm"/>
       </div>

       <div className="btn-wrapper mb-3">
        <button className="btn btn-primary">Sign Up</button>
       </div>

       <span className="login-text">
        Already have an account ? &nbsp; &nbsp;
        <a href="/login" className="login-link">Login</a>
       </span>
    </div>
  );
}

export default SignForm;
