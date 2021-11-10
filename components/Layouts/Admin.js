import HeaderStats from "../Header/HeaderStats";
import AdminNavbar from "../Navbar/AdminNavbar";
import Sidebar from "../Sidebar/Sidebar";

export default function Admin({ children }) {
    return (
        <>
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