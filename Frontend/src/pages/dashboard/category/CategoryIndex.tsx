import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://uts-pemweb2-fullstuck-dev-production.up.railway.app";

type Category = {
    id: number;
    name: string;
    createdAt: string;
};

export default function CategoryIndex() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchCategories = async () => {
        try {
            const response = await fetch(`${API_URL}/categories`);
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

    const handleDelete = async (id: number) => {
        const confirmDelete = confirm("Yakin ingin menghapus category?");
        if (!confirmDelete) return;

        try {
            await fetch(`${API_URL}/categories/${id}`, {
                method: "DELETE",
            });

            fetchCategories();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="space-y-8">
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
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl text-white"
                >
                    + Add Category
                </Link>
            </div>

            <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={4}>Loading...</td>
                            </tr>
                        ) : categories.length > 0 ? (
                            categories.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/category/edit/${item.id}`}>
                                            Edit
                                        </Link>

                                        <button onClick={() => handleDelete(item.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>No data</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
