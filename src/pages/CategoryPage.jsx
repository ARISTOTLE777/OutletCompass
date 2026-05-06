import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // reads the category name from the URL
import malls from "../data/malls.json";
import OutletCard from "../components/OutletCard";
import BackButton from "../components/BackButton";
 
const CategoryPage = () => {
 
  // useParams reads the URL. E.g. /category/Food gives us categoryName = "Food"
  const { categoryName } = useParams();
 
  // useState: stores the list of outlets that match this category
  const [outlets, setOutlets] = useState([]); // starts as an empty array
 
  // useEffect: runs the code inside whenever categoryName changes
  // (i.e. every time the user visits a different category page)
  useEffect(() => {
 
    const result = []; // temporary list to collect matching outlets
 
    // Loop through every mall → every outlet inside that mall
    malls.forEach((mall) => {
      mall.outlets.forEach((outlet) => {
 
        // If this outlet's category matches the one in the URL, add it to our list
        if (outlet.category === categoryName) {
          result.push({
            ...outlet,         // copy all outlet properties
            mallName: mall.name, // also save which mall it belongs to
            mallId: mall.id,
          });
        }
 
      });
    });
 
    setOutlets(result); // save the collected outlets into state
 
  }, [categoryName]); // re-run this effect when categoryName changes
 
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