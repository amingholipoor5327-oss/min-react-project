import { Link } from "react-router-dom"
import "./Nav.css"
export const Nav = ()=>{
    return(
        <div className="nav">
            <div className="nav-container">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <Link to={"/search"}  className="nav-link">search</Link>
            </div>
        </div>
    )
}