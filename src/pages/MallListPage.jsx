import { useState } from "react";
import malls from "../data/malls.json"; // all our mall data
import MallCard from "../components/MallCard";
 
const MallListPage = () => {
 
  // useState: tracks which city filter the user has selected
  // "All" means show every mall (no filter applied)
  const [city, setCity] = useState("All");
 
  // Filter the malls array:
  // If city is "All" → keep every mall
  // Otherwise        → keep only malls whose city matches the selected city
  const filteredMalls = malls.filter((m) => city === "All" || m.city === city);
 
  return (
    <div className="mall-list-page container">
 
      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <h2>Malls</h2>
        <span className="mall-count">{filteredMalls.length} Malls found</span>
      </div>
 
      {/* ── CITY FILTER BUTTONS ── */}
      <div className="filter-row">
        {["All", "Noida", "Ghaziabad"].map((c) => (
          <button
            key={c}
            className={`filter-btn ${city === c ? "active" : ""}`} // highlight the active button
            onClick={() => setCity(c)}                               // update state when clicked
          >
            {c}
          </button>
        ))}
      </div>
 
      {/* ── MALL GRID ── show all filtered malls ── */}
      <div className="grid-3">
        {filteredMalls.map((mall) => (
          <MallCard key={mall.id} mall={mall} />
        ))}
      </div>
 
    </div>
  );
};
 
export default MallListPage;
 