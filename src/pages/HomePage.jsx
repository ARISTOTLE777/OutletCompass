import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import malls from "../data";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate("/search?q=" + searchQuery);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const popularMalls = malls.slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <section className="hero container">
        <h1>
          Find Every Outlet. <span>Every Mall.</span>
        </h1>

        <div className="hero-search">
          <input
            type="text"
            placeholder="Search outlets, malls, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container">
        <div className="category-grid">
          {[
            "Food",
            "Clothing",
            "Shoes",
            "Shopping",
            "Services",
            "Entertainment",
          ].map((cat) => (
            <Link key={cat} to={`/category/${cat}`} className="category-tile">
              <span>{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* POPULAR MALLS */}
      <section className="container" style={{ marginTop: "60px" }}>
        <h2 style={{ marginBottom: "20px" }}>Popular Malls</h2>

        <div className="grid-3">
          {popularMalls.map((mall) => (
            <MallCard key={mall.id} mall={mall} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
