import { Link } from "react-router-dom";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";

const POINTS = [
  {
    title: "1. Data JSON (List)",
    body: "Diterapkan pada komponen sebelah kanan, mengambil data dari `framework.json` dan menampilkannya menggunakan `.map()`. Data nested seperti `officialWebsite` dan list `tags` berhasil dirender.",
    bg: "#FFE0EE",
    border: "#FF8FB1",
  },
  {
    title: "2. Data JSON (Search & Filter)",
    body: "Terdapat input text dan select dropdown. Menggunakan method `.filter()` untuk mencocokkan `searchTerm` dengan nama/deskripsi, dan mencocokkan `selectedTag`. Terdapat juga implementasi `.flatMap()` dan `Set` untuk mengambil unique tags.",
    bg: "#E2F2F8",
    border: "#A8D8E8",
  },
  {
    title: "3. Best Practice State",
    body: "Alih-alih membuat `useState` terpisah untuk input dan select, form menggunakan 1 state objek `dataForm` dan 1 fungsi reusable `handleChange` menggunakan `[evt.target.name]: evt.target.value`.",
    bg: "#FFF3CF",
    border: "#FFD966",
  },
  {
    title: "4. Responsive & Grid Design",
    body: "Diterapkan di bawah list JSON. Menggunakan breakpoint Tailwind (`md:w-1/2`, `lg:grid-cols-4`, dll) agar tata letak web berubah otomatis saat di-zoom atau dibuka di HP.",
    bg: "#FFE3ED",
    border: "#FFC2D9",
  },
];

export default function Pertemuan4() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "#FFF3E2" }}>
            <div className="container mx-auto px-4 md:px-6 py-8 font-sans max-w-6xl">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 text-white font-black rounded-full hover:scale-105 transition-transform shadow-cute text-sm"
                    style={{ backgroundColor: "#FF8FB1" }}
                >
                    &larr; Kembali ke Portal
                </Link>

                <div className="mb-8">
                    <span
                        className="inline-block text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-cute -rotate-1 mb-3 text-cocoa"
                        style={{ backgroundColor: "#FFD966" }}
                    >
                        🎀 Tugas Praktikum
                    </span>
                    <h1 className="text-3xl md:text-4xl font-black text-cocoa">
                        Pertemuan 4
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Bagian Kiri: Penjelasan Textual */}
                    <div
                        className="p-6 md:p-7 rounded-3xl border-4 shadow-cute-lg lg:sticky lg:top-6"
                        style={{ backgroundColor: "#FFF3CF", borderColor: "#A8D8E8" }}
                    >
                        <h2 className="text-xl font-black text-cocoa mb-5">
                            Penerapan Materi Pertemuan 4
                        </h2>
                        <ul className="space-y-3">
                            {POINTS.map((point) => (
                                <li
                                    key={point.title}
                                    className="rounded-2xl p-4 border-2"
                                    style={{ backgroundColor: point.bg, borderColor: point.border }}
                                >
                                    <p className="font-black text-cocoa text-sm mb-1">{point.title}</p>
                                    <p className="text-sm text-cocoa/70 leading-relaxed">{point.body}</p>
                                </li>
                            ))}
                        </ul>
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
