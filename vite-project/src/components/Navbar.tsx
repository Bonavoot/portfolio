import { Link } from "react-router-dom"

const Navbar = () => {
    return (
     <div className="navbar">
        <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        </div>
     </div>
    )
}

export default Navbar;