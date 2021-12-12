import '../public/css/image-upload.css'
import '../public/css/globals.css'
import '../public/css/table.css'
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import buildClient from '../helpers/build-client';

function MyApp({ Component, pageProps, data }) {
  const [loading, setLoading] = useState(true)
  const authUrls = ["/login", "/register"]

  useEffect(() => {
    console.log(data);
    if (!data && !authUrls.includes(Router.pathname)) {
      Router.push('/login').then(() => setLoading(false))
    }
    else if (data && authUrls.includes(Router.pathname)) {
      Router.push('/').then(() => setLoading(false))
    }
    else setLoading(false)
  }, [])

  if (loading) return null

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        hideProgressBar
        theme='dark'
      />
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  let pageProps = {};
  const client = buildClient(appContext.ctx)

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx)
  }

  try {
    const { data } = await client.get(`/doctors/me`)

    return {
      pageProps,
      data: data
    };
  } catch (error) {
    return {
      pageProps,
    };
  }
}

export default MyApp