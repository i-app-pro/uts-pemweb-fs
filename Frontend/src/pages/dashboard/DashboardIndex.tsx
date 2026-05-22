import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://uts-pemweb2-fullstuck-dev-production.up.railway.app";

export default function DashboardIndex() {

    const [stats, setStats] = useState({
        categories: 0,
        events: 0,
        pembicara: 0,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {
            const [categoryRes, eventRes, speakerRes] = await Promise.all([
                axios.get(`${API_URL}/categories`),
                axios.get(`${API_URL}/events`),
                axios.get(`${API_URL}/speeker`),
            ]);

            setStats({
                categories: categoryRes.data?.length || 0,
                events: eventRes.data?.length || 0,
                pembicara: speakerRes.data?.length || 0,
            });

        } catch (error) {
            console.log("Dashboard error:", error);
        } finally {
            setLoading(false);
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

                <Card title="Total Category" value={stats.categories} loading={loading} />
                <Card title="Total Events" value={stats.events} loading={loading} />
                <Card title="Total Speaker" value={stats.pembicara} loading={loading} />

            </div>
        </div>
    );
}

function Card({ title, value, loading }: any) {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm">{title}</p>

            <h2 className="text-4xl font-black mt-3 text-slate-800">
                {loading ? "..." : value}
            </h2>
        </div>
    );
}
