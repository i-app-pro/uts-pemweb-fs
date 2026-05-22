import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const API_URL = "https://uts-pemweb2-fullstuck-dev-production.up.railway.app";

type FormData = {
    name: string;
    role: string;
    image: string;
};

export default function PembicaraCreate() {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch(`${API_URL}/speeker`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed");

            navigate("/dashboard/pembicara");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("name", { required: true })} placeholder="Name" />
            {errors.name && <p>Name required</p>}

            <input {...register("role", { required: true })} placeholder="Role" />
            {errors.role && <p>Role required</p>}

            <input {...register("image", { required: true })} placeholder="Image URL" />
            {errors.image && <p>Image required</p>}

            <button type="submit">Save</button>
        </form>
    );
}
