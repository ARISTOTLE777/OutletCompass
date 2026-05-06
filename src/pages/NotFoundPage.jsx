import { Link } from "react-router-dom"; // Link works like an <a> tag
 
const NotFoundPage = () => {
  return (
    <div className="not-found">
 
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
 
      {/* Link takes the user back to the home page */}
      <Link to="/" className="btn">
        Go Back Home
      </Link>
 
    </div>
  );
};
 
export default NotFoundPage;
 