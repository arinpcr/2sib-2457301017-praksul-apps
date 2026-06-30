import { Link } from "react-router-dom";

export default function Portal() {
    return (
        <div className="min-h-screen bg-cream font-sans">
            {/* Header checkered pattern */}
            <div
                className="py-16 px-4 border-b-4 border-cocoa/10"
                style={{
                    backgroundImage:
                        "linear-gradient(45deg, #A8D8E8 25%, transparent 25%), linear-gradient(-45deg, #A8D8E8 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #A8D8E8 75%), linear-gradient(-45deg, transparent 75%, #A8D8E8 75%)",
                    backgroundSize: "48px 48px",
                    backgroundPosition: "0 0, 0 24px, 24px -24px, -24px 0px",
                    backgroundColor: "#FFF3E2",
                }}
            >
                <div className="max-w-3xl mx-auto text-center">
                    <span className="inline-block bg-sunny text-cocoa text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-cute mb-4 -rotate-2">
                        ✨ Praktikum Susulan
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-cocoa mb-3 leading-tight">
                        Portal Praktikum <span className="text-bubblegum">Susulan</span>
                    </h1>
                    <p className="text-cocoa/70 font-bold">
                        Pilih pertemuan yang ingin dilihat hasilnya 🌷
                    </p>
                </div>
            </div>

            {/* Cards */}
            <div className="py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
                    <Link
                        to="/pertemuan-4"
                        className="relative block p-6 bg-white rounded-3xl shadow-cute-lg border-4 border-candy hover:-rotate-2 hover:scale-105 transition-all duration-300 group"
                    >
                        <span className="absolute -top-4 -right-3 bg-bubblegum text-white text-[10px] font-black uppercase px-3 py-1 rounded-full rotate-12 shadow-cute">
                            New!
                        </span>
                        <div className="w-14 h-14 bg-sky text-cocoa rounded-2xl flex items-center justify-center font-black text-2xl mb-4 rotate-3 group-hover:rotate-0 transition-transform shadow-cute">
                            P4
                        </div>
                        <h2 className="text-xl font-black text-cocoa mb-2">Pertemuan 4</h2>
                        <p className="text-sm text-cocoa/60 font-medium">
                            JSON Data, Search &amp; Filter, Best Practice State, Responsive Design.
                        </p>
                    </Link>

                    {/* Nanti kalau ada pertemuan lain, tinggal tambah Card lagi di sini */}
                </div>
            </div>
        </div>
    );
}
