import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardIndex() {

    const [stats, setStats] = useState({
        categories: 0,
        events: 0,
        pembicara: 0,
    });

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {
            const [categoryRes, eventRes, pembicaraRes] = await Promise.all([
                axios.get("http://localhost:3000/categories"),
                axios.get("http://localhost:3000/events"),
                axios.get("http://localhost:3000/speeker"),
            ]);

            setStats({
                categories: categoryRes.data.length,
                events: eventRes.data.length,
                pembicara: pembicaraRes.data.length,
            });

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="space-y-8">

            {/* HEADER */}
            <div>
                <h1 className="text-4xl font-black text-slate-800">
                    Dashboard
                </h1>

                <p className="text-slate-500 mt-2">
                    Welcome back to Event Management Dashboard.
                </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                    <p className="text-slate-500 text-sm">
                        Total Category
                    </p>

                    <h2 className="text-4xl font-black mt-3 text-slate-800">
                        {stats.categories}
                    </h2>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                    <p className="text-slate-500 text-sm">
                        Total Events
                    </p>

                    <h2 className="text-4xl font-black mt-3 text-slate-800">
                        {stats.events}
                    </h2>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                    <p className="text-slate-500 text-sm">
                        Total Pembicara
                    </p>

                    <h2 className="text-4xl font-black mt-3 text-slate-800">
                        {stats.pembicara}
                    </h2>
                </div>

            </div>

            {/* RECENT ACTIVITY */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                    Recent Activity
                </h2>

                <div className="space-y-4">

                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                            <p className="font-semibold text-slate-700">
                                Seminar Teknologi AI
                            </p>

                            <p className="text-sm text-slate-400">
                                Added new event
                            </p>
                        </div>

                        <span className="text-sm text-slate-400">
                            Just now
                        </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                            <p className="font-semibold text-slate-700">
                                New Speaker Added
                            </p>

                            <p className="text-sm text-slate-400">
                                Data updated
                            </p>
                        </div>

                        <span className="text-sm text-slate-400">
                            Today
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}