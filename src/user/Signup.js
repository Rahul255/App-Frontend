import React, { useState } from 'react';
import Base from '../core/Base';
import { Link } from "react-router-dom";
import { signup } from '../auth/helper';


const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  /**sigun up form */
  const signupForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input className="form-control" value={name} onChange={handleChange("name")} type="text" />
            </div>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input className="form-control" value={email} onChange={handleChange("email")} type="text" />
            </div>
            <div className="form-group">
              <label className="text-light">Password</label>
              <input className="form-control" value={password} onChange={handleChange("password")} type="password" />
            </div>
            <button className="btn btn-success btn-block"> Submit</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <Base title="sign up page" description="A sign up page for user">
      {signupForm()}
      <p className="text-white text-center">
        {JSON.stringify(values)}
      </p>
    </Base>
  )
}

export default Signup