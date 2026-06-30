import { useState } from "react";
import frameworkData from "./framework.json";

const CARD_ACCENTS = [
  { bg: "#FFE3ED", border: "#FF8FB1", badgeBorder: "#FF8FB1", badgeText: "#933B5B" },
  { bg: "#E2F2F8", border: "#A8D8E8", badgeBorder: "#A8D8E8", badgeText: "#2D6A86" },
  { bg: "#FFF3CF", border: "#FFD966", badgeBorder: "#FFD966", badgeText: "#8A6D00" },
  { bg: "#FFE0EE", border: "#FFC2D9", badgeBorder: "#FFC2D9", badgeText: "#B5728A" },
];

export default function FrameworkListSearchFilter() {
  // --- BEST PRACTICE STATE ---
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // --- LOGIC SEARCH & FILTER ---
  const _searchTerm = dataForm.searchTerm.toLowerCase();

  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  // --- GET UNIQUE TAGS ---
  const allTags = [...new Set(frameworkData.flatMap((framework) => framework.tags))];

  return (
    <div className="p-8 rounded-3xl shadow-cute-lg border-4" style={{ backgroundColor: "#E2F2F8", borderColor: "#FF8FB1" }}>
      <h2 className="text-2xl font-black text-cocoa mb-6 tracking-tight">
        🧁 Framework List
      </h2>

      {/* Form Input */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          name="searchTerm"
          value={dataForm.searchTerm}
          onChange={handleChange}
          placeholder="Search framework name or description..."
          className="w-full p-4 border-2 shadow-cute rounded-2xl bg-white focus:ring-4 focus:ring-bubblegum/20 outline-none transition-all placeholder:text-cocoa/40 font-medium text-cocoa"
          style={{ borderColor: "#A8D8E8" }}
        />
        <select
          name="selectedTag"
          value={dataForm.selectedTag}
          onChange={handleChange}
          className="w-full md:w-1/3 p-4 border-2 shadow-cute rounded-2xl bg-white focus:ring-4 focus:ring-bubblegum/20 outline-none transition-all cursor-pointer font-black text-cocoa"
          style={{ borderColor: "#A8D8E8" }}
        >
          <option value="">All Categories</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* List Framework */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredFrameworks.length > 0 ? (
          filteredFrameworks.map((item, idx) => {
            const accent = CARD_ACCENTS[idx % CARD_ACCENTS.length];
            return (
              <div
                key={item.id}
                className="p-6 rounded-3xl shadow-cute border-2 hover:-translate-y-1 transition-all duration-300"
                style={{ backgroundColor: accent.bg, borderColor: accent.border }}
              >
                <h3 className="text-xl font-black text-cocoa mb-2">{item.name}</h3>
                <p className="text-cocoa/70 mb-4 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>

                <div className="mb-4 text-xs bg-white/80 p-4 rounded-2xl">
                  <p className="text-cocoa/60 mb-1">
                    Developer: <span className="font-black text-cocoa">{item.details.developer}</span>
                  </p>
                  <p className="text-cocoa/60">
                    Website:{" "}
                    <a
                      href={item.details.officialWebsite}
                      target="_blank"
                      rel="noreferrer"
                      className="text-bubblegum font-black hover:underline"
                    >
                      Visit Site
                    </a>
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 text-[10px] font-extrabold uppercase rounded-full tracking-widest border bg-white"
                      style={{ borderColor: accent.badgeBorder, color: accent.badgeText }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-20 text-center bg-white rounded-3xl border-4 border-dashed" style={{ borderColor: "#FFC2D9" }}>
            <p className="text-cocoa/50 font-black">Framework tidak ditemukan. 🙁</p>
          </div>
        )}
      </div>
    </div>
  );
}
