import { Link } from "react-router-dom";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";

export default function Pertemuan4() {
    return (
        <div className="min-h-screen bg-cream">
            <div className="container mx-auto p-6 font-sans">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-bubblegum text-white font-black rounded-full hover:scale-105 transition-transform shadow-cute"
                >
                    &larr; Kembali ke Portal
                </Link>

                <div className="mb-8">
                    <span className="inline-block bg-sunny text-cocoa text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-cute -rotate-1 mb-3">
                        🎀 Tugas Praktikum
                    </span>
                    <h1 className="text-3xl md:text-4xl font-black text-cocoa">
                        Pertemuan 4
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Bagian Kiri: Penjelasan Textual */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-3xl border-4 border-sky shadow-cute-lg">
                            <h2 className="text-xl font-black text-cocoa mb-4">
                                Penerapan Materi Pertemuan 4:
                            </h2>
                            <ul className="space-y-4 text-sm text-cocoa/70 font-medium">
                                <li className="bg-cream rounded-2xl p-4">
                                    <strong className="text-bubblegum">1. Data JSON (List):</strong> <br />
                                    Diterapkan pada komponen sebelah kanan, mengambil data dari `framework.json` dan menampilkannya menggunakan `.map()`. Data nested seperti `officialWebsite` dan list `tags` berhasil dirender.
                                </li>
                                <li className="bg-cream rounded-2xl p-4">
                                    <strong className="text-bubblegum">2. Data JSON (Search & Filter):</strong> <br />
                                    Terdapat input text dan select dropdown. Menggunakan method `.filter()` untuk mencocokkan `searchTerm` dengan nama/deskripsi, dan mencocokkan `selectedTag`. Terdapat juga implementasi `.flatMap()` dan `Set` untuk mengambil *unique tags*.
                                </li>
                                <li className="bg-cream rounded-2xl p-4">
                                    <strong className="text-bubblegum">3. Best Practice State:</strong> <br />
                                    Alih-alih membuat `useState` terpisah untuk input dan select, form menggunakan 1 state objek `dataForm` dan 1 fungsi *reusable* `handleChange` menggunakan `[evt.target.name]: evt.target.value`.
                                </li>
                                <li className="bg-cream rounded-2xl p-4">
                                    <strong className="text-bubblegum">4. Responsive & Grid Design:</strong> <br />
                                    Diterapkan di bawah list JSON. Menggunakan *breakpoint* Tailwind (`md:w-1/2`, `lg:grid-cols-4`, dll) agar tata letak web berubah otomatis saat di-zoom atau dibuka di HP.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bagian Kanan: Hasil Render Komponen */}
                    <div className="space-y-8">
                        <FrameworkListSearchFilter />
                        <ResponsiveDesign />
                    </div>
                </div>
            </div>
        </div>
    );
}
