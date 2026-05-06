import React from 'react';
import { Link } from 'react-router-dom';
function MallCard({ mall }) {
  return (
    <Link to={`/mall/${mall.id}`} className="card mall-card">
      <p className="mall-card-name">{mall.name}</p>
      <p className="mall-card-location">
        {mall.city}, {mall.area}
      </p>
      <div className="mall-card-meta">
        <span className="mall-card-rating">★ {mall.rating}</span>
        <span>{mall.outlets?.length || 0} outlets</span>
      </div>
    </Link>
  );
}

export default MallCard;
