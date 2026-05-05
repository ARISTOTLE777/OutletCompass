import { useState } from "react";
import malls from "../data/malls.json";
import MallCard from "../components/MallCard";

const MallListPage = () => {
  const [city, setCity] = useState("All");

  const filteredMalls = malls.filter((m) => city === "All" || m.city === city);

  return (
    <div className="mall-list-page container">
      {/* Header */}
      <div className="page-header">
        <h2>Malls</h2>
        <span className="mall-count">{filteredMalls.length} Malls found</span>
      </div>

      {/* Filters */}
      <div className="filter-row">
        {["All", "Noida", "Ghaziabad"].map((c) => (
          <button
            key={c}
            className={`filter-btn ${city === c ? "active" : ""}`}
            onClick={() => setCity(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Mall Grid */}
      <div className="grid-3">
        {filteredMalls.map((mall) => (
          <MallCard key={mall.id} mall={mall} />
        ))}
      </div>
    </div>
  );
};

export default MallListPage;
