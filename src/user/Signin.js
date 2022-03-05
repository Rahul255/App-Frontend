import React, { useState } from 'react'
import Base from '../core/Base'
import { Link, Navigate } from 'react-router-dom'
import { authenticate, isAuthenticated, signin } from '../auth/helper'


const Signin = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
        loading: false,
        didRedirect: false
    })

    const { name, email, password, error, success, loading, didRedirect } = values

    const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    /**form data based onsubmit functionality */
    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });

        signin({ email, password })
            .then(data => {
                console.log("DATA", data);
                if (data.token) {
                    //let sessionToken = data.token;
                    authenticate(data, () => {
                        console.log("TOKKEN ADDED");
                        setValues({
                            ...values,
                            didRedirect: true,
                        });
                    });
                } else {
                    setValues({
                        ...values,
                        loading: false,
                    });
                }
            })
            .catch((e) => console.log(e));
    }

    /**have some problem here need to fix that */
    const performRedirect = () => {
        if (isAuthenticated()) {
            return <Navigate to="/" />
        }
        // else{
        //     return <Redirect to="/signin" />
        // }
    }

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }


    /*succes message field  */
    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-success"
                        style={{ display: success ? "" : "none" }}
                    >
                        New Contnent created successfully. <Link to="/signin">please login now</Link>
                    </div>
                </div>
            </div>
        )
    }

    /*error message field when login credentials not correct */
    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}
                    >
                        Check all Fields again
                    </div>
                </div>
            </div>
        )
    }

    /**sigun up form */
    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" value={email} onChange={handleChange("email")} type="text" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" value={password} onChange={handleChange("password")} type="password" />
                        </div>
                        <button onClick={() => {}} className="btn btn-success btn-block"> Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <Base title="Welcome to signin page" description="A tshirt store">
            {signInForm()}
            <p className="text-center">{JSON.stringify(values)}</p>
        </Base>
    )
}

export default Signin