import {
    Link,
    Outlet,
    useLocation,
    useNavigate,
} from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {

    const logout = useAuthStore(
        (state) => state.logout
    );

    const navigate = useNavigate();

    const location = useLocation();

    const handleLogout = () => {

        logout();

        navigate("/loginform");
    };

    const menus = [
        {
            name: "Dashboard",
            path: "/dashboard",
        },
        {
            name: "Category",
            path: "/dashboard/category",
        },
        {
            name: "Pembicara",
            path: "/dashboard/pembicara",
        },
        {
            name: "Events",
            path: "/dashboard/event",
        },
        {
            name: "Biodata",
            path: "/dashboard/biodata",
        },
    ];

    return (
        <div className="flex min-h-screen bg-slate-100">

            {/* SIDEBAR */}
            <aside className="w-72 bg-linear-to-b from-slate-950 via-slate-900 to-slate-800 text-white flex flex-col justify-between p-6 shadow-2xl">

                <div>

                    {/* LOGO */}
                    <div className="mb-12">

                        <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-4">

                            <h1 className="text-2xl font-black">
                                E
                            </h1>
                        </div>

                        <h1 className="text-3xl font-black tracking-wide">
                            EMS
                        </h1>

                        <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                            Event Management System Dashboard
                        </p>
                    </div>

                    {/* MENU */}
                    <nav className="space-y-3">

                        {menus.map((menu) => (

                            <Link
                                key={menu.path}
                                to={menu.path}
                                className={`block px-5 py-4 rounded-2xl transition-all duration-300 font-medium ${
                                    location.pathname ===
                                    menu.path
                                        ? "bg-blue-600 text-white shadow-lg scale-[1.02]"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`}
                            >
                                {menu.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* FOOTER USER */}
                <div className="border-t border-slate-800 pt-5">

                    <div className="flex items-center gap-4 mb-5">

                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">
                            A
                        </div>

                        <div>

                            <p className="font-semibold">
                                Administrator
                            </p>

                            <p className="text-sm text-slate-400">
                                admin@gmail.com
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="w-full bg-red-600 hover:bg-red-700 transition-all py-3 rounded-2xl font-semibold shadow-lg"
                    >
                        Logout
                    </button>
                </div>
            </aside>

            {/* CONTENT */}
            <main className="flex-1 p-8 overflow-auto">

                <div className="bg-white min-h-full rounded-3xl p-8 shadow-sm border border-slate-200">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}