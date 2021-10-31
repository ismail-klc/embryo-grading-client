import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("useEffect");
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
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
            <div className="col shadow-sm p-3 mb-5 bg-body rounded p-5 rounded">
              <h2>Login</h2>
              <form onSubmit={submitHandler}>
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
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input shadow-sm"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary shadow-sm">
                  Sign in
                </button>
                <div className="mt-2">
                  <Link href="/register">
                    <a className="link-primary">Create new account</a>
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

export default Login;
