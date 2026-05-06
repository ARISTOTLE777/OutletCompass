import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // reads ?q=... from the URL
import malls from "../data/malls.json";
import filterOutlets from "../utils/filterOutlets";
import OutletCard from "../components/OutletCard";
 
const SearchResultsPage = () => {
 
  // useSearchParams reads the query string part of the URL
  // E.g. for /search?q=pizza, searchParams.get("q") returns "pizza"
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || ""; // if there's no "q", default to empty string
 
  // useState: stores the list of outlets that match the search query
  const [results, setResults] = useState([]); // starts as an empty array
 
  // useEffect: runs the search whenever the query changes
  useEffect(() => {
 
    // filterOutlets is a helper function we wrote in /utils/filterOutlets.js
    // It goes through all malls and returns outlets that match the query
    const filtered = filterOutlets(malls, query, "All");
 
    setResults(filtered); // save results into state
 
  }, [query]); // re-run when the search query changes
 
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
 
          // Show a card for each matching outlet
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
 
          // Show this when nothing was found
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
 