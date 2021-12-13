import '../public/css/image-upload.css'
import '../public/css/globals.css'
import '../public/css/table.css'
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import useUser from '../hooks/use-user';
import { SWRConfig } from 'swr'
import axios from 'axios';

const fetcher = url => axios.get(url, { withCredentials: true }).then(res => res.data)

function MyApp({ Component, pageProps }) {
  const { loading } = useUser({
    redirectTo: "/login",
  });

  if (loading) {
    return null
  }

  return (
    <SWRConfig
      value={{
        fetcher: fetcher
      }}>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        hideProgressBar
        theme='dark'
      />
    </SWRConfig>
  )
}

export default MyApp