import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

type Category = {
    id: number;
    name: string;
};

type Speaker = {
    id: number;
    name: string;
};

type FormData = {
    name: string;
    categoryId: number;
    pembicaraId: number;
    location: string;
    dateEvent: string;
    description: string;
};

export default function EventEdit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [categories, setCategories] = useState<Category[]>([]);
    const [speakers, setSpeakers] = useState<Speaker[]>([]);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>();

    // GET CATEGORY
    const fetchCategories = async () => {

        try {

            const response = await fetch(
                "http://localhost:3000/categories"
            );

            const data = await response.json();

            setCategories(data);

        } catch (error) {

            console.log(error);
        }
    };

    // GET SPEAKER
    const fetchSpeakers = async () => {

        try {

            const response = await fetch(
                "http://localhost:3000/speeker"
            );

            const data = await response.json();

            setSpeakers(data);

        } catch (error) {

            console.log(error);
        }
    };

    // GET EVENT DETAIL
    const fetchEvent = async () => {

        try {

            const response = await fetch(
                `http://localhost:3000/events/${id}`
            );

            const data = await response.json();

            setValue("name", data.name);
            setValue("categoryId", data.categoryId);
            setValue("pembicaraId", data.pembicaraId);
            setValue("location", data.location);

            // format datetime
            const formattedDate =
                new Date(data.dateEvent)
                    .toISOString()
                    .slice(0, 16);

            setValue("dateEvent", formattedDate);

            setValue("description", data.description);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        fetchCategories();
        fetchSpeakers();
        fetchEvent();

    }, []);

    // UPDATE EVENT
    const onSubmit = async (data: FormData) => {

        try {

            await fetch(
                `http://localhost:3000/events/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            navigate("/dashboard/event");

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <div className="max-w-5xl">

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">

                {/* HEADER */}
                <div className="mb-8">

                    <h1 className="text-3xl font-black text-slate-800">
                        Edit Event
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Update event information.
                    </p>
                </div>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                >

                    {/* EVENT NAME */}
                    <div>

                        <label className="block mb-2 font-medium text-slate-700">
                            Event Name
                        </label>

                        <input
                            type="text"
                            {...register("name", {
                                required: "Event name is required",
                            })}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <p className="text-red-500 text-sm mt-2">
                            {errors.name?.message}
                        </p>
                    </div>

                    {/* CATEGORY */}
                    <div>

                        <label className="block mb-2 font-medium text-slate-700">
                            Category
                        </label>

                        <select
                            {...register("categoryId", {
                                required: "Category is required",
                            })}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                        >

                            <option value="">
                                Select Category
                            </option>

                            {categories.map((item) => (
                                <option
                                    key={item.id}
                                    value={item.id}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* SPEAKER */}
                    <div>

                        <label className="block mb-2 font-medium text-slate-700">
                            Speaker
                        </label>

                        <select
                            {...register("pembicaraId", {
                                required: "Speaker is required",
                            })}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                        >

                            <option value="">
                                Select Speaker
                            </option>

                            {speakers.map((item) => (
                                <option
                                    key={item.id}
                                    value={item.id}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* LOCATION */}
                    <div>

                        <label className="block mb-2 font-medium text-slate-700">
                            Location
                        </label>

                        <input
                            type="text"
                            {...register("location", {
                                required: "Location is required",
                            })}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* DATE */}
                    <div>

                        <label className="block mb-2 font-medium text-slate-700">
                            Event Date
                        </label>

                        <input
                            type="datetime-local"
                            {...register("dateEvent", {
                                required: "Date is required",
                            })}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* DESCRIPTION */}
                    <div>

                        <label className="block mb-2 font-medium text-slate-700">
                            Description
                        </label>

                        <textarea
                            rows={5}
                            {...register("description")}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* BUTTON */}
                    <div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-4 rounded-2xl text-white font-semibold shadow-lg"
                        >
                            Update Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}