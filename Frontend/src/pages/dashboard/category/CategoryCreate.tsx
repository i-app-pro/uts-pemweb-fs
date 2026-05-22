import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const API_URL = "https://uts-pemweb2-fullstuck-dev-production.up.railway.app";

type FormData = {
    name: string;
};

export default function CategoryCreate() {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch(`${API_URL}/categories`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed");

            navigate("/dashboard/category");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("name", { required: true })}
                placeholder="Category name"
            />

            {errors.name && <p>Name required</p>}

            <button type="submit">Save</button>
        </form>
    );
}
