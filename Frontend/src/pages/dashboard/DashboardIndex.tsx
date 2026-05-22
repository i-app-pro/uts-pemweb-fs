import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://uts-pemweb2-fullstuck-dev-production.up.railway.app";

type FormData = {
    name: string;
    role: string;
    image: string;
};

export default function PembicaraEdit() {

    const { id } = useParams();
    const navigate = useNavigate();

    const { register, handleSubmit, setValue } = useForm<FormData>();

    const fetchSpeaker = async () => {
        try {
            const res = await fetch(`${API_URL}/speeker/${id}`);
            const data = await res.json();

            setValue("name", data.name);
            setValue("role", data.role);
            setValue("image", data.image);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchSpeaker();
    }, [id]);

    const onSubmit = async (data: FormData) => {
        try {
            await fetch(`${API_URL}/speeker/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            navigate("/dashboard/pembicara");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("name")} placeholder="Name" />
            <input {...register("role")} placeholder="Role" />
            <input {...register("image")} placeholder="Image URL" />

            <button type="submit">Update</button>
        </form>
    );
}
