import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // useParams → reads outletId from URL
import malls from "../data/malls.json";
import BackButton from "../components/BackButton";
import TagBadge from "../components/TagBadge";
 
const OutletDetailPage = () => {
 
  // useParams reads the URL. E.g. /outlet/O-123 gives us outletId = "O-123"
  const { outletId } = useParams();
 
  // useState: stores the outlet object once we find it
  const [outlet, setOutlet] = useState(null); // null = not found yet
 
  // useState: stores the mall that contains this outlet
  const [parentMall, setParentMall] = useState(null);
 
  // useEffect: search through all malls/outlets whenever the outletId changes
  useEffect(() => {
 
    let foundOutlet = null; // will hold the matching outlet
    let foundMall = null;   // will hold the mall it belongs to
 
    // Loop through every mall → every outlet inside that mall
    malls.forEach((mall) => {
      mall.outlets.forEach((o) => {
 
        // Check if this outlet's outletId matches the one in the URL
        if (o.outletId === outletId) {
          foundOutlet = o;   // save the outlet
          foundMall = mall;  // save its mall
        }
 
      });
    });
 
    // Save both values into state so the UI can display them
    setOutlet(foundOutlet);
    setParentMall(foundMall);
 
  }, [outletId]); // re-run if outletId ever changes
 
  // If outlet is still null, show a loading / not found message
  if (!outlet) {
    return <p style={{ padding: "40px" }}>Loading or Outlet not found</p>;
  }
 
  return (
    <div className="outlet-detail-page container">
 
      {/* ── BACK BUTTON ── */}
      <BackButton />
 
      {/* ── HEADER: outlet name + category badge ── */}
      <div className="outlet-detail-header">
        <h1>{outlet.name}</h1>
        <span className="badge">{outlet.category}</span>
      </div>
 
      {/* ── DETAIL GRID: floor, shop no, subcategory, price, timings ── */}
      <div className="detail-grid">
 
        <div className="detail-item">
          <label>Floor</label>
          <span>{outlet.floor}</span>
        </div>
 
        <div className="detail-item">
          <label>Shop No</label>
          <span>{outlet.shopNo}</span>
        </div>
 
        <div className="detail-item">
          <label>Subcategory</label>
          <span>{outlet.subcategory}</span>
        </div>
 
        <div className="detail-item">
          <label>Price Range</label>
          <span>{outlet.priceRange}</span>
        </div>
 
        <div className="detail-item">
          <label>Timings</label>
          <span>{outlet.timings}</span>
        </div>
 
      </div>
 
      {/* ── RATING ── */}
      <div style={{ marginBottom: "16px" }}>⭐ {outlet.rating}</div>
 
      {/* ── TAGS ── show each tag as a badge ── */}
      <div className="tags-row">
        {outlet.tags?.map((tag) => (
          <TagBadge key={tag} text={tag} />
        ))}
      </div>
 
      {/* ── PARENT MALL LINK ── only shown if we found the mall ── */}
      {parentMall && (
        <div className="mall-link-box">
          <span>Located in {parentMall.name}</span>
          <Link to={`/mall/${parentMall.id}`} className="btn">
            View Mall
          </Link>
        </div>
      )}
 
    </div>
  );
};
 
export default OutletDetailPage;