import React from 'react';
import { Link } from "react-router-dom";
import TagBadge from "./TagBadge";

function OutletCard({ outlet }) {
  return (
    <Link to={`/outlet/${outlet.outletId}`} className="card outlet-card">
      <div className="outlet-card-top">
        <span className="outlet-card-name">{outlet.name}</span>
        <span className="outlet-card-category">{outlet.category}</span>
      </div>
      <div className="outlet-card-meta">
        <span>{outlet.floor}</span>
        <span>{outlet.shopNo}</span>
        <span>{outlet.priceRange}</span>
        <span>★ {outlet.rating}</span>
      </div>
      <div className="outlet-card-tags">
        {outlet.tags?.map((tag) => (
          <TagBadge key={tag} text={tag} />
        ))}
      </div>
      {outlet.mallName && (
        <div className="outlet-card-mall">📍 {outlet.mallName}</div>
      )}
    </Link>
  );
}

export default OutletCard;