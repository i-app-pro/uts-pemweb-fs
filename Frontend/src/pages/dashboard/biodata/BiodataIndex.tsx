export default function BiodataIndex() {

    const skills = [
        "ReactJS",
        "TypeScript",
        "ExpressJS",
        "NodeJS",
        "Prisma ORM",
        "PostgreSQL",
        "TailwindCSS",
        "Zustand",
    ];

    const projects = [
        "Student Smart Manager",
        "Event Management System",
        "Mobile Legends UI Redesign",
        "Vehicle Parking System",
    ];

    return (
        <div className="space-y-8">

            {/* HEADER */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl overflow-hidden relative">

                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">

                    {/* FOTO */}
                    <div className="shrink-0">

                        <div className="w-36 h-36 rounded-3xl bg-slate-800 border border-slate-700 overflow-hidden shadow-lg">

                            <img
                                src="/WhatsApp Image 2026-05-03 at 14.54.35.jpeg"
                                alt="Amirul"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* BIODATA */}
                    <div className="flex-1">

                        <p className="uppercase tracking-[4px] text-blue-300 text-sm mb-3">
                            Biodata Mahasiswa
                        </p>

                        <h1 className="text-4xl font-black">
                            Amirul Madjid Ibrahim
                        </h1>

                        <p className="text-slate-300 mt-3 leading-relaxed max-w-3xl">
                            Mahasiswa D4 Teknik Informatika yang memiliki
                            minat pada Fullstack Development, UI/UX Design,
                            Database Management, dan Artificial Intelligence.
                        </p>

                        {/* INFO */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

                            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
                                <p className="text-slate-400 text-sm">
                                    NIM
                                </p>

                                <h2 className="text-xl font-bold mt-1">
                                    24090101
                                </h2>
                            </div>

                            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
                                <p className="text-slate-400 text-sm">
                                    Program Studi
                                </p>

                                <h2 className="text-xl font-bold mt-1">
                                    D4 Teknik Informatika
                                </h2>
                            </div>

                            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
                                <p className="text-slate-400 text-sm">
                                    Semester
                                </p>

                                <h2 className="text-xl font-bold mt-1">
                                    Semester 4
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT */}
                <div className="space-y-8">

                    {/* ABOUT */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">

                        <h2 className="text-2xl font-black text-slate-800 mb-5">
                            Tentang Saya
                        </h2>

                        <p className="text-slate-600 leading-relaxed">
                            Saya adalah mahasiswa aktif semester 4
                            yang menyukai pengembangan aplikasi web
                            modern menggunakan ReactJS, ExpressJS,
                            dan PostgreSQL.
                            Saya juga tertarik pada pengembangan UI modern,
                            pengelolaan database, serta implementasi AI
                            pada aplikasi digital.
                        </p>
                    </div>

                    {/* SKILLS */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">

                        <h2 className="text-2xl font-black text-slate-800 mb-6">
                            Skills & Tools
                        </h2>

                        <div className="flex flex-wrap gap-3">

                            {skills.map((skill) => (

                                <div
                                    key={skill}
                                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white transition-all text-sm font-semibold text-slate-700"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="lg:col-span-2 space-y-8">

                    {/* EDUCATION */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">

                        <h2 className="text-2xl font-black text-slate-800 mb-6">
                            Riwayat Pendidikan
                        </h2>

                        <div className="border-l-4 border-blue-600 pl-6 space-y-8">

                            <div>
                                <p className="text-sm text-slate-400">
                                    2024 - Sekarang
                                </p>

                                <h3 className="text-xl font-bold text-slate-800 mt-1">
                                    D4 Teknik Informatika
                                </h3>

                                <p className="text-slate-600 mt-2">
                                    Fokus pembelajaran pada pemrograman,
                                    pengembangan web fullstack,
                                    database management,
                                    dan software engineering.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">

                        <h2 className="text-2xl font-black text-slate-800 mb-6">
                            Project Experience
                        </h2>

                        <div className="space-y-4">

                            {projects.map((project, index) => (

                                <div
                                    key={project}
                                    className="flex items-center justify-between border border-slate-200 rounded-2xl p-5 hover:border-blue-500 hover:shadow-md transition-all"
                                >

                                    <div className="flex items-center gap-4">

                                        <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                                            0{index + 1}
                                        </div>

                                        <div>

                                            <h3 className="font-bold text-slate-800">
                                                {project}
                                            </h3>

                                            <p className="text-sm text-slate-500 mt-1">
                                                Fullstack & UI Development
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-sm font-semibold text-blue-600">
                                        Completed
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* MOTIVATION */}
                    <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl">

                        <h2 className="text-2xl font-black mb-4">
                            Motivation
                        </h2>

                        <p className="leading-relaxed text-blue-100">
                            Saya percaya bahwa teknologi dapat membantu
                            menyelesaikan banyak permasalahan secara
                            efektif dan efisien.
                            Oleh karena itu saya terus belajar dan
                            mengembangkan kemampuan di bidang
                            software development dan artificial intelligence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}