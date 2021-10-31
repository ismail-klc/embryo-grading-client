import React, { Fragment, useState } from "react";
import Link from "next/link";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [policy, setPolicy] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(username, email, password, confirmPassword, policy);
  };

  return (
    <Fragment>
      <div
        style={{
          background: "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)",
          /*   background: "linear-gradient(to right, #000000, #434343)",*/
        }}
      >
        <div
          style={{
            maxWidth: "576px",
          }}
          className="container mw-50  "
        >
          <div className="row vh-100  align-items-center">
            <div className="col shadow-sm bg-body rounded p-5 rounded">
              <h2>Register</h2>
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    id="userName"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control shadow-sm"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control shadow-sm"
                    id="exampleInputPassword1"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleConfirmInputPassword1"
                    className="form-label"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control shadow-sm"
                    id="exampleConfirmInputPassword1"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input shadow-sm"
                    id="exampleCheck1"
                    onChange={(e) => setPolicy(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I agree with the{" "}
                    <a
                      href="#/"
                      className="link-secondary text-decoration-underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <button type="submit" className="btn btn-primary shadow-sm">
                  Register
                </button>
                <div className="mt-2">
                  <Link href="/login">
                    <a className="link-primary">Already have an account? </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
