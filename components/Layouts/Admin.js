import HeaderStats from "../Header/HeaderStats";
import AdminNavbar from "../Navbar/AdminNavbar";
import Sidebar from "../Sidebar/Sidebar";
import Head from 'next/head'

export default function Admin({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    name="description"
                    content="Derin öğrenme ile embriyo kalitesini sınıflandırma"
                ></meta>
                <meta content="website" property="og:type"></meta>
                <meta content="Derin Öğrenme ile Embriyo Kalitesi Sınıflandırma Web Uygulaması" property="og:title"></meta>

            </Head>
            <Sidebar />
            <div className="relative md:ml-64">
                <AdminNavbar />
                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-28">
                    {children}
                </div>
            </div>
        </>
    );
}