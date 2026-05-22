import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

type FormData = {
    name: string;
    role: string;
    image: string;
};

export default function PembicaraEdit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>();

    // GET DETAIL
    useEffect(() => {

        const fetchSpeaker = async () => {

            try {

                const response = await fetch(
                    `http://localhost:3000/speeker/${id}`
                );

                const data = await response.json();

                setValue("name", data.name);
                setValue("role", data.role);
                setValue("image", data.image);

            } catch (error) {

                console.log(error);
            }
        };

        fetchSpeaker();

    }, [id, setValue]);

    // UPDATE
    const onSubmit = async (data: FormData) => {

        try {

            await fetch(
                `http://localhost:3000/speeker/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            navigate("/dashboard/pembicara");

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <div className="max-w-4xl">

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">

                <div className="mb-8">

                    <h1 className="text-3xl font-black text-slate-800">
                        Edit Speaker
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Update speaker information.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                >

                    <div>

                        <label className="block mb-2 font-medium text-slate-700">
                            Name
                        </label>

                        <input
                            type="text"
                            {...register("name")}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <p className="text-red-500 text-sm mt-2">
                            {errors.name?.message}
                        </p>
                    </div>

                    <div>

                        <label className="block mb-2 font-medium text-slate-700">
                            Role
                        </label>

                        <input
                            type="text"
                            {...register("role")}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>

                        <label className="block mb-2 font-medium text-slate-700">
                            Image URL
                        </label>

                        <input
                            type="text"
                            {...register("image")}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-4 rounded-2xl text-white font-semibold shadow-lg"
                        >
                            Update Speaker
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}