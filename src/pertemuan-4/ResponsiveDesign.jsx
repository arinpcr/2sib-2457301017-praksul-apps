function ResponsiveText() {
    return (
        <div className="mb-6 p-5 border-4 border-sky rounded-2xl bg-white shadow-cute">
            <h3 className="font-black mb-2 text-cocoa">1. Responsive Text 🔠</h3>
            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-cocoa/70 font-medium">
                Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan menyesuaikan dengan ukuran layar.
            </p>
        </div>
    );
}

function ResponsiveWidth() {
    return (
        <div className="mb-6 p-5 border-4 border-candy rounded-2xl bg-white shadow-cute">
            <h3 className="font-black mb-2 text-cocoa">2. Responsive Width & Flexbox 📐</h3>
            <p className="text-sm text-cocoa/60 mb-4 font-medium">
                <strong className="text-bubblegum">md:w-1/2</strong> → Saat layar mencapai ukuran tablet (md: 768px), kolom akan memiliki lebar 50%.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-bubblegum text-white font-black w-full md:w-1/2 p-4 rounded-2xl text-center shadow-cute">
                    Kolom 1
                </div>
                <div className="bg-sky text-cocoa font-black w-full md:w-1/2 p-4 rounded-2xl text-center shadow-cute">
                    Kolom 2
                </div>
            </div>
        </div>
    );
}

function ResponsiveLayout() {
    return (
        <div className="p-5 border-4 border-sunny rounded-2xl bg-white shadow-cute">
            <h3 className="font-black mb-2 text-cocoa">3. Grid Layout 🧩</h3>
            <p className="text-sm text-cocoa/60 mb-4 font-medium">
                Menggunakan{" "}
                <strong className="text-bubblegum">
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                </strong>
                .
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-bubblegum text-white font-black p-4 rounded-2xl text-center shadow-cute">Box 1</div>
                <div className="bg-sky text-cocoa font-black p-4 rounded-2xl text-center shadow-cute">Box 2</div>
                <div className="bg-sunny text-cocoa font-black p-4 rounded-2xl text-center shadow-cute">Box 3</div>
                <div className="bg-candy text-cocoa font-black p-4 rounded-2xl text-center shadow-cute">Box 4</div>
            </div>
        </div>
    );
}

export default function ResponsiveDesign() {
    return (
        <div className="p-6 bg-cream rounded-3xl shadow-cute-lg border-4 border-bubblegum/30">
            <h2 className="text-xl font-black mb-4 text-cocoa">Responsive Design Showcase 🎨</h2>
            <ResponsiveText />
            <ResponsiveWidth />
            <ResponsiveLayout />
        </div>
    );
}
