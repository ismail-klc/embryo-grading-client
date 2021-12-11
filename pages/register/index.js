import React, { Fragment, useState } from "react";
import Link from "next/link";
import useRequest from '../../hooks/use-request'
import Errors from "../../components/Errors";
import Router from 'next/router';
import Head from 'next/head'
import { toast } from 'react-toastify';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { doRequest, errors } = useRequest({
    url: `${process.env.API}/doctors/signup`,
    method: 'post',
    body: {
      firstName, lastName, email, password
    },
    onSuccess: () => {
      Router.push('/')
      toast("Başarıyla kayıt oldunuz");
    }
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Şifreler uyuşmuyor")
      return
    }
    await doRequest();
  };

  return (
    <Fragment>
      <Head>
        <title>Kayıt Ol</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form onSubmit={submitHandler} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Hesap Oluştur</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="Ad"
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="Soyad"
            />

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
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Şifre Onayla"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-400 text-dark hover:bg-green-dark focus:outline-none my-1"
            >
              Hesap Oluştur
            </button>
            {errors && <Errors msg={errors} />}
          </form>

          <div className="text-grey-dark mt-6">
            Hesabım var?{" "}
            <Link href="/login">
              <a className="no-underline border-b border-blue text-blue">
                Giriş yap
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
