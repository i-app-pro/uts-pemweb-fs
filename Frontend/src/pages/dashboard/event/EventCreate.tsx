import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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

export default function EventCreate() {

    const navigate = useNavigate();

    const [categories, setCategories] = useState<Category[]>([]);
    const [speakers, setSpeakers] = useState<Speaker[]>([]);

    const {
        register,
        handleSubmit,
    } = useForm<FormData>();

    // GET CATEGORY
    const fetchCategories = async () => {

        const response = await fetch(
            "http://localhost:3000/categories"
        );

        const data = await response.json();

        setCategories(data);
    };

    // GET SPEAKER
    const fetchSpeakers = async () => {

        const response = await fetch(
            "http://localhost:3000/speeker"
        );

        const data = await response.json();

        setSpeakers(data);
    };

    useEffect(() => {

        fetchCategories();
        fetchSpeakers();

    }, []);

    // SUBMIT
    const onSubmit = async (data: FormData) => {

        try {

            await fetch(
                "http://localhost:3000/events",
                {
                    method: "POST",
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

                <div className="mb-8">

                    <h1 className="text-3xl font-black text-slate-800">
                        Add Event
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Create a new event schedule.
                    </p>
                </div>

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
                            {...register("name")}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4"
                        />
                    </div>

                    {/* CATEGORY */}
                    <div>

                        <label className="block mb-2 font-medium text-slate-700">
                            Category
                        </label>

                        <select
                            {...register("categoryId")}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4"
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
                            {...register("pembicaraId")}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4"
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
                            {...register("location")}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4"
                        />
                    </div>

                    {/* DATE */}
                    <div>

                        <label className="block mb-2 font-medium text-slate-700">
                            Event Date
                        </label>

                        <input
                            type="datetime-local"
                            {...register("dateEvent")}
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4"
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
                            className="w-full border border-slate-300 rounded-2xl px-5 py-4"
                        />
                    </div>

                    <div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-4 rounded-2xl text-white font-semibold shadow-lg"
                        >
                            Save Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}