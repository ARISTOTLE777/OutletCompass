import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import malls from "../data/malls.json";
import OutletCard from "../components/OutletCard";
import BackButton from "../components/BackButton";
 
const CategoryPage = () => {
 

  const { categoryName } = useParams();
 
  
  const [outlets, setOutlets] = useState([]); // starts as an empty array
 
  
  useEffect(() => {
 
    const result = []; 
 
    
    malls.forEach((mall) => {
      mall.outlets.forEach((outlet) => {
 
     
        if (outlet.category === categoryName) {
          result.push({
            ...outlet,         
            mallName: mall.name,
            mallId: mall.id,
          });
        }
 
      });
    });
 
    setOutlets(result); 
 
  }, [categoryName]); 
 
  return (
    <div className="category-page container">
 
      {/* ── BACK BUTTON ── */}
      <BackButton />
 
      {/* ── HEADER: category name + count ── */}
      <div className="category-header">
        <h1>{categoryName}</h1>
        <span className="badge">{outlets.length} outlets</span>
      </div>
 
      {/* ── OUTLETS GRID ── */}
      <div className="grid-3">
        {outlets.map((outlet) => (
          <OutletCard key={outlet.id} outlet={outlet} />
        ))}
      </div>
 
    </div>
  );
};
 
export default CategoryPage;