import React, { useState } from "react";
import "./index.css";

function Login() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "84vh" }}>
            <div className="bg-success-subtle p-5 border rounded border-success w-100 shadow-sm" style={{ maxWidth: "700px" }}>
                <h2 className="text-center text-success">Welcome for Log In</h2>
                <hr />
                <form noValidate className={`needs-validation ${validated ? "was-validated" : ""}`} onSubmit={handleSubmit}>
                    <div className="mb-3 mt-4">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input type="text" id="username" name="username" className="form-control border-dark-subtle" placeholder="enter the username" required/>
                        <div className="invalid-feedback">Please enter your username</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="text" placeholder="enter your password" name="password" className="form-control border-dark-subtle" id="password" required/>
                        <div className="invalid-feedback">Please enter your password</div>
                    </div>
                    <button type="sbmit" className="btn btn-outline-success w-100 mt-2">Log In</button>
                </form>
            </div>
        </div>

    );
}

export default Login;