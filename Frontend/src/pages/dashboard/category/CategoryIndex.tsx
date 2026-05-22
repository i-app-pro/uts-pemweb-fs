import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Category = {
    id: number;
    name: string;
    createdAt: string;
};

export default function CategoryIndex() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    // GET DATA
    const fetchCategories = async () => {

        try {

            const response = await fetch(
                "http://localhost:3000/categories"
            );

            const data = await response.json();

            setCategories(data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // DELETE DATA
    const handleDelete = async (id: number) => {

        const confirmDelete = confirm(
            "Yakin ingin menghapus category?"
        );

        if (!confirmDelete) return;

        try {

            await fetch(
                `http://localhost:3000/categories/${id}`,
                {
                    method: "DELETE",
                }
            );

            fetchCategories();

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <div className="space-y-8">

            {/* HEADER */}
            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-4xl font-black text-slate-800">
                        Category
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Manage all event categories.
                    </p>
                </div>

                <Link
                    to="/dashboard/category/create"
                    className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-3 rounded-2xl text-white font-semibold shadow-lg"
                >
                    + Add Category
                </Link>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>

                            <th className="px-6 py-5 text-left text-sm text-slate-500">
                                No
                            </th>

                            <th className="px-6 py-5 text-left text-sm text-slate-500">
                                Category Name
                            </th>

                            <th className="px-6 py-5 text-left text-sm text-slate-500">
                                Created At
                            </th>

                            <th className="px-6 py-5 text-center text-sm text-slate-500">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {loading ? (

                            <tr>
                                <td
                                    colSpan={4}
                                    className="text-center py-20 text-slate-400"
                                >
                                    Loading...
                                </td>
                            </tr>

                        ) : categories.length > 0 ? (

                            categories.map((item, index) => (

                                <tr
                                    key={item.id}
                                    className="border-b border-slate-100 hover:bg-slate-50 transition-all"
                                >

                                    <td className="px-6 py-5 text-slate-500">
                                        {index + 1}
                                    </td>

                                    <td className="px-6 py-5 font-semibold text-slate-700">
                                        {item.name}
                                    </td>

                                    <td className="px-6 py-5 text-slate-500">
                                        {new Date(
                                            item.createdAt
                                        ).toLocaleDateString()}
                                    </td>

                                    <td className="px-6 py-5">

                                        <div className="flex justify-center gap-3">

                                            <Link
                                                to={`/dashboard/category/edit/${item.id}`}
                                            >
                                                <button className="px-4 py-2 rounded-xl bg-amber-100 text-amber-700 font-medium hover:bg-amber-200 transition-all">
                                                    Edit
                                                </button>
                                            </Link>

                                            <button
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                                className="px-4 py-2 rounded-xl bg-red-100 text-red-700 font-medium hover:bg-red-200 transition-all"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))

                        ) : (

                            <tr>
                                <td
                                    colSpan={4}
                                    className="text-center py-20 text-slate-400"
                                >
                                    No category data available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}