import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import useRequest from '../../hooks/use-request'
import Errors from "../../components/Errors";
import Router from 'next/router';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: `${process.env.API}/doctors/signin`,
    method: 'post',
    body: {
      email, password
    },
    onSuccess: () => Router.push('/')
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    await doRequest();
  };

  return (
    <Fragment>
      <div
      >
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <form onSubmit={submitHandler} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Giriş Yap</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="E-posta"
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Şifre"
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-400 text-dark hover:bg-green-300
                focus:outline-none my-1"
              >
                Giriş Yap
              </button>
              {errors && <Errors msg={errors} />}
            </form>

            <div className="text-dark mt-6">
              Henüz bir hesabınız yok mu?{" "}
              <Link href="/register">
                <a className="no-underline border-b border-blue text-blue">
                  Hesap Oluştur
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
