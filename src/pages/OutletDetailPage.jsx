import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import malls from "../data/malls.json";
import BackButton from "../components/BackButton";
import TagBadge from "../components/TagBadge";
import "./OutletDetailPage.css";

const OutletDetailPage = () => {
  const { outletId } = useParams();

  const [outlet, setOutlet] = useState(null);
  const [parentMall, setParentMall] = useState(null);

  useEffect(() => {
    let foundOutlet = null;
    let foundMall = null;

    malls.forEach((mall) => {
      mall.outlets.forEach((o) => {
        if (o.outletId === outletId) {
          foundOutlet = o;
          foundMall = mall;
        }
      });
    });

    setOutlet(foundOutlet);
    setParentMall(foundMall);
  }, [outletId]);

  if (!outlet) {
    return <p style={{ padding: "40px" }}>Loading or Outlet not found</p>;
  }

  return (
    <div className="outlet-detail-page container">
      {/* Back */}
      <BackButton />

      {/* Header */}
      <div className="outlet-detail-header">
        <h1>{outlet.name}</h1>
        <span className="badge">{outlet.category}</span>
      </div>

      {/* Details */}
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

      {/* Rating */}
      <div style={{ marginBottom: "16px" }}>⭐ {outlet.rating}</div>

      {/* Tags */}
      <div className="tags-row">
        {outlet.tags?.map((tag) => (
          <TagBadge key={tag} text={tag} />
        ))}
      </div>

      {/* Mall Link */}
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
