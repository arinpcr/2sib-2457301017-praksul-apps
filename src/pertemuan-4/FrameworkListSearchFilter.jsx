import { useState } from "react";
import frameworkData from "./framework.json";

const CARD_BORDERS = ["border-bubblegum", "border-sky", "border-sunny", "border-candy"];

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
    <div className="p-8 bg-white min-h-screen rounded-3xl shadow-cute-lg border-4 border-bubblegum/30">
      <h2 className="text-2xl font-black text-cocoa mb-6 tracking-tight">
        🧁 Framework List
      </h2>

      {/* Form Input dengan styling cute */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          name="searchTerm"
          value={dataForm.searchTerm}
          onChange={handleChange}
          placeholder="Search framework name or description..."
          className="w-full p-4 border-2 border-sky shadow-cute rounded-2xl bg-cream focus:ring-4 focus:ring-bubblegum/20 focus:border-bubblegum outline-none transition-all placeholder:text-cocoa/40 font-medium text-cocoa"
        />
        <select
          name="selectedTag"
          value={dataForm.selectedTag}
          onChange={handleChange}
          className="w-full md:w-1/3 p-4 border-2 border-sky shadow-cute rounded-2xl bg-cream focus:ring-4 focus:ring-bubblegum/20 focus:border-bubblegum outline-none transition-all cursor-pointer font-black text-cocoa"
        >
          <option value="">All Categories</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* List Framework dengan desain Card cute */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredFrameworks.length > 0 ? (
          filteredFrameworks.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white p-6 rounded-3xl shadow-cute border-4 ${CARD_BORDERS[idx % CARD_BORDERS.length]} hover:-translate-y-1 hover:rotate-1 transition-all duration-300`}
            >
              <h3 className="text-xl font-black text-cocoa mb-2">{item.name}</h3>
              <p className="text-cocoa/60 mb-4 text-sm leading-relaxed font-medium">
                {item.description}
              </p>

              <div className="mb-4 text-xs bg-cream p-4 rounded-2xl">
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

              {/* Tags dengan desain Pill warna-warni */}
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-sunny/40 text-cocoa px-4 py-1.5 text-[10px] font-extrabold uppercase rounded-full tracking-widest border-2 border-sunny"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-cream rounded-3xl border-4 border-dashed border-candy">
            <p className="text-cocoa/50 font-black">Framework tidak ditemukan. 🙁</p>
          </div>
        )}
      </div>
    </div>
  );
}
