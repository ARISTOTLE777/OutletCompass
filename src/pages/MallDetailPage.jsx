import { useState } from "react";
import { useParams } from "react-router-dom"; // useParams → reads the :mallId from the URL
import malls from "../data/malls.json";
import OutletCard from "../components/OutletCard";
import BackButton from "../components/BackButton";
 
const MallDetailPage = () => {
 
  // useParams reads the URL. E.g. if the URL is /mall/3, then mallId = "3"
  const { mallId } = useParams();
 
  // Find the mall in our data whose id matches the URL parameter
  // Number(mallId) converts the string "3" to the number 3 for comparison
  const mall = malls.find((m) => m.id === Number(mallId));
 
  // useState: tracks which category filter the user has selected
  const [activeCategory, setActiveCategory] = useState("All");
 
  // If no mall was found, show a simple message
  if (!mall) {
    return <p style={{ padding: "40px" }}>Mall not found</p>;
  }
 
  // Filter the outlets of this mall:
  // If "All" is selected → show every outlet
  // Otherwise           → show only outlets matching the selected category
  const filteredOutlets =
    activeCategory === "All"
      ? mall.outlets
      : mall.outlets.filter((o) => o.category === activeCategory);
 
  // The list of category buttons to display
  const categories = ["All", "Food", "Clothing", "Shoes", "Shopping", "Services", "Entertainment"];
 
  return (
    <div className="mall-detail-page container">
 
      {/* ── BACK BUTTON ── */}
      <BackButton />
 
      {/* ── MALL HEADER: name, city, rating, timings ── */}
      <div className="mall-header">
        <h1>{mall.name}</h1>
        <div className="mall-meta">
          <span>{mall.city}</span>
          <span>{mall.area}</span>
          <span>⭐ {mall.rating}</span>
          <span>{mall.timings}</span>
        </div>
      </div>
 
      {/* ── CATEGORY FILTER BUTTONS ── */}
      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`} // highlight active
            onClick={() => setActiveCategory(cat)}                               // update state
          >
            {cat}
          </button>
        ))}
      </div>
 
      {/* ── OUTLET COUNT ── */}
      <div className="outlet-count">{filteredOutlets.length} outlets</div>
 
      {/* ── OUTLETS GRID ── */}
      <div className="grid-3">
        {filteredOutlets.map((outlet) => (
          <OutletCard key={outlet.id} outlet={outlet} />
        ))}
      </div>
 
    </div>
  );
};
 
export default MallDetailPage;