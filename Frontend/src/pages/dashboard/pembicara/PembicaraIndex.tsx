import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://uts-pemweb2-fullstuck-dev-production.up.railway.app";

type Speaker = {
    id: number;
    name: string;
    role: string;
    image: string;
    createdAt: string;
};

export default function PembicaraIndex() {

    const [speakers, setSpeakers] = useState<Speaker[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchSpeakers = async () => {
        try {
            const response = await fetch(`${API_URL}/speeker`);
            const data = await response.json();
            setSpeakers(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSpeakers();
    }, []);

    const handleDelete = async (id: number) => {
        const confirmDelete = confirm("Yakin ingin menghapus pembicara?");
        if (!confirmDelete) return;

        try {
            await fetch(`${API_URL}/speeker/${id}`, {
                method: "DELETE",
            });

            fetchSpeakers();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="space-y-8">

            <div className="flex justify-between">
                <h1>Speakers</h1>

                <Link to="/dashboard/pembicara/create">
                    + Add Speaker
                </Link>
            </div>

            <table className="w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {loading ? (
                        <tr><td colSpan={5}>Loading...</td></tr>
                    ) : speakers.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>
                                <img src={item.image} width={50} />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
