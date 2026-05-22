import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const API_URL = "https://uts-pemweb2-fullstuck-dev-production.up.railway.app";

type Category = { id: number; name: string };
type Speaker = { id: number; name: string };

type FormData = {
    name: string;
    categoryId: number;
    pembicaraId: number;
    location: string;
    dateEvent: string;
    description: string;
};

export default function EventCreate() {

    const navigate = useNavigate();

    const [categories, setCategories] = useState<Category[]>([]);
    const [speakers, setSpeakers] = useState<Speaker[]>([]);

    const { register, handleSubmit } = useForm<FormData>();

    const fetchCategories = async () => {
        const res = await fetch(`${API_URL}/categories`);
        const data = await res.json();
        setCategories(data);
    };

    const fetchSpeakers = async () => {
        const res = await fetch(`${API_URL}/speeker`);
        const data = await res.json();
        setSpeakers(data);
    };

    useEffect(() => {
        fetchCategories();
        fetchSpeakers();
    }, []);

    const onSubmit = async (data: FormData) => {
        try {
            await fetch(`${API_URL}/events`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            navigate("/dashboard/event");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder="Event name" />

            <select {...register("categoryId")}>
                {categories.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                ))}
            </select>

            <select {...register("pembicaraId")}>
                {speakers.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                ))}
            </select>

            <input {...register("location")} placeholder="Location" />
            <input type="datetime-local" {...register("dateEvent")} />
            <textarea {...register("description")} />

            <button type="submit">Save</button>
        </form>
    );
}
