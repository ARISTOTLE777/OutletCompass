import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; 
import malls from "../data/malls.json";
import filterOutlets from "../utils/filterOutlets";
import OutletCard from "../components/OutletCard";
 
const SearchResultsPage = () => {
 
  
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || ""; 
 
  
  const [results, setResults] = useState([]); 
 
  
  useEffect(() => {
 
    
    const filtered = filterOutlets(malls, query, "All");
 
    setResults(filtered); 
 
  }, [query]); 
 
  return (
    <div className="search-page">
      <div className="container">
 
        {/* ── HEADER: show the query and how many results were found ── */}
        <div className="search-header">
          <h2>Results for: "{query}"</h2>
          <p className="result-count">{results.length} outlets found</p>
        </div>
 
        {/* ── RESULTS or NO-RESULTS message ── */}
        {results.length > 0 ? (
 
         
          <div className="outlet-grid">
            {results.map((outlet) => (
              <div key={outlet.id}>
                <OutletCard outlet={outlet} />
                <p style={{ fontSize: "14px", color: "#888" }}>
                  Mall: {outlet.mallName}
                </p>
              </div>
            ))}
          </div>
 
        ) : (
 
         
          <div className="no-results">
            <p>No results found for "{query}"</p>
            <span>Try searching something else</span>
          </div>
 
        )}
 
      </div>
    </div>
  );
};
 
export default SearchResultsPage;
 