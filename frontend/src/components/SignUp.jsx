import "./index.css";
import React, { useState } from "react";

function SignUp() {
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
            <div className="bg-success-subtle border border-success rounded w-100 p-5 shadow-sm" style={{ maxWidth: "700px" }}>
                <h2 className="text-center text-success">Welcome for SignUp</h2>
                <hr />
                <form noValidate className={`needs-validation ${validated ? "was-validated" : ""}`} onSubmit={handleSubmit}>
                    <div className="mb-3 mt-4">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input type="text" id="username" name="username" placeholder="Enter the user name"
                            className="form-control border-dark-subtle" required />
                        <div className="invalid-feedback">Please Enter username</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Enter the Gmail:</label>
                        <input type="email" id="email" className="form-control border-dark-subtle" placeholder="enter your gmail" name="email" required />
                        <div className="invalid-feedback">Please enter your gmail</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter the password" className="form-control border-dark-subtle" required />
                        <div className="invalid-feedback">Enter password</div>
                    </div>
                    <button className="btn btn-outline-success w-100 mt-2" type="submit">SignUp</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;