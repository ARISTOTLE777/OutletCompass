import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import MallListPage from "./pages/MallListPage";
import MallDetailPage from "./pages/MallDetailPage";
import CategoryPage from "./pages/CategoryPage";
import OutletDetailPage from "./pages/OutletDetailPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/malls" element={<MallListPage />} />
            <Route path="/mall/:mallId" element={<MallDetailPage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/outlet/:outletId" element={<OutletDetailPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;