import React from 'react';
import { Link } from 'react-router-dom';

export default function MallCard({ mall }) {
  if (!mall) return null;
  return (
    <div className="card MallCard" style={{ padding: '16px' }}>
      <h3>{mall.name}</h3>
      <p style={{ color: 'var(--text-2)', fontSize: '14px', marginBottom: '12px' }}>{mall.city}, {mall.area}</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span className="badge">{mall.type}</span>
        <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--accent)' }}>★ {mall.rating}</span>
      </div>
      
      <Link to={`/mall/${mall.id}`} className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
        View Details
      </Link>
    </div>
  );
}
