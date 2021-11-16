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
        style={
          {
            // background: "linear-gradient(to right, #434343 0%, black 100%);",
            /*   background: "linear-gradient(to right, #000000, #434343)",*/
          }
        }
      >
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Giriş Yap</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Kullanıcı Adı"
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="E-posta"
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Şifre"
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-400 text-dark hover:bg-green-dark focus:outline-none my-1"
              >
                Giriş Yap
              </button>
            </div>

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
