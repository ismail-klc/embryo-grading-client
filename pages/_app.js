import '../public/css/image-upload.css'
import '../public/css/globals.css'
import '../public/css/table.css'
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps,  }) {
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

export default MyApp