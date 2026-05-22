import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
    name: string;
};

export default function CategoryCreate() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {

        try {

            await fetch(
                "http://localhost:3000/categories",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            navigate("/dashboard/category");

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <div className="max-w-4xl">

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">

                {/* HEADER */}
                <div className="mb-8">

                    <h1 className="text-3xl font-black text-slate-800">
                        Add Category
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Create a new event category.
                    </p>
                </div>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                >

                    <div>

                        <label className="block mb-2 font-medium text-slate-700">
                            Category Name
                        </label>

                        <input
                            type="text"
                            {...register("name", {
                                required: "Category name is required",
                            })}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Seminar"
                        />

                        <p className="text-red-500 text-sm mt-2">
                            {errors.name?.message}
                        </p>
                    </div>

                    <div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-4 rounded-2xl text-white font-semibold shadow-lg"
                        >
                            Save Category
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}