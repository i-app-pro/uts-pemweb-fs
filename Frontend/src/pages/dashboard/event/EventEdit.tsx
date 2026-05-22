import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://uts-pemweb2-fullstuck-dev-production.up.railway.app";

export default function EventEdit() {

    const { id } = useParams();
    const navigate = useNavigate();

    const { register, handleSubmit, setValue } = useForm();

    const fetchEvent = async () => {
        const res = await fetch(`${API_URL}/events/${id}`);
        const data = await res.json();

        setValue("name", data.name);
        setValue("categoryId", data.categoryId);
        setValue("pembicaraId", data.pembicaraId);
        setValue("location", data.location);
        setValue("description", data.description);
    };

    useEffect(() => {
        fetchEvent();
    }, [id]);

    const onSubmit = async (data: any) => {
        try {
            await fetch(`${API_URL}/events/${id}`, {
                method: "PUT",
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
            <input {...register("name")} />
            <input {...register("location")} />
            <textarea {...register("description")} />

            <button type="submit">Update</button>
        </form>
    );
}
