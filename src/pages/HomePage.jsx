import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // useNavigate → go to another page programmatically
import malls from "../data/malls.json";               // all our mall data
import MallCard from "../components/MallCard";
 
const HomePage = () => {
 
  // useNavigate gives us a "navigate" function we can call to redirect the user
  const navigate = useNavigate();
 
  // useState: stores whatever the user is typing in the search box
  // searchQuery = current value, setSearchQuery = function to update it
  const [searchQuery, setSearchQuery] = useState(""); // starts as an empty string
 
  // ── Called when the Search button is clicked ──
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {          // only search if the box is not empty
      navigate("/search?q=" + searchQuery);  // send user to the search results page
    }
  };
 
  // ── Called on every key press inside the input box ──
  const handleKeyDown = (e) => {
    if (e.key === "Enter") { // if the user pressed the Enter key
      handleSearch();         // behave exactly like clicking the Search button
    }
  };
 
  // Show only the first 4 malls in the "Popular Malls" section
  const popularMalls = malls.slice(0, 4);
 
  return (
    <div>
 
      {/* ── HERO: big heading + search bar ── */}
      <section className="hero container">
        <h1>
          Find Every Outlet. <span>Every Mall.</span>
        </h1>
 
        <div className="hero-search">
          <input
            type="text"
            placeholder="Search outlets, malls, categories..."
            value={searchQuery}                               // input is controlled by our state
            onChange={(e) => setSearchQuery(e.target.value)} // update state on every keystroke
            onKeyDown={handleKeyDown}                         // check if Enter was pressed
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </section>
 
      {/* ── CATEGORIES: one clickable tile per category ── */}
      <section className="container">
        <div className="category-grid">
          {["Food", "Clothing", "Shoes", "Shopping", "Services", "Entertainment"].map((cat) => (
            // Link works like an <a> tag — clicking it goes to /category/Food, etc.
            <Link key={cat} to={`/category/${cat}`} className="category-tile">
              <span>{cat}</span>
            </Link>
          ))}
        </div>
      </section>
 
      {/* ── POPULAR MALLS: first 4 malls from our data ── */}
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