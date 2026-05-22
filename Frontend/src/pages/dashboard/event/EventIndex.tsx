import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://uts-pemweb2-fullstuck-dev-production.up.railway.app";

type EventType = {
    id: number;
    name: string;
    location: string;
    dateEvent: string;
    description: string;
    category: { name: string };
    pembicara: { name: string };
};

export default function EventIndex() {

    const [events, setEvents] = useState<EventType[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchEvents = async () => {
        try {
            const response = await fetch(`${API_URL}/events`);
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleDelete = async (id: number) => {
        const confirmDelete = confirm("Yakin ingin menghapus event?");
        if (!confirmDelete) return;

        try {
            await fetch(`${API_URL}/events/${id}`, {
                method: "DELETE",
            });

            fetchEvents();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="space-y-8">

            <div className="flex justify-between">
                <h1>Events</h1>

                <Link to="/dashboard/event/create">
                    + Add Event
                </Link>
            </div>

            <table className="w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Speaker</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {loading ? (
                        <tr><td colSpan={7}>Loading...</td></tr>
                    ) : events.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.category?.name}</td>
                            <td>{item.pembicara?.name}</td>
                            <td>{item.location}</td>
                            <td>{new Date(item.dateEvent).toLocaleDateString()}</td>
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
