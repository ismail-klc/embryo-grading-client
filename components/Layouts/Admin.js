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