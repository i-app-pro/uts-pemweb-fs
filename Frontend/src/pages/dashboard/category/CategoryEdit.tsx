import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://uts-pemweb2-fullstuck-dev-production.up.railway.app";

type FormData = {
    name: string;
};

export default function CategoryEdit() {

    const { id } = useParams();
    const navigate = useNavigate();

    const { register, handleSubmit, setValue } = useForm<FormData>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${API_URL}/categories/${id}`);
                const data = await res.json();

                setValue("name", data.name);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);

    const onSubmit = async (data: FormData) => {
        try {
            await fetch(`${API_URL}/categories/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            navigate("/dashboard/category");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} />

            <button type="submit">Update</button>
        </form>
    );
}
