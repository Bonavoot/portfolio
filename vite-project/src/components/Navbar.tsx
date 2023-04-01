import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/about")}>About</a>
        <a onClick={() => navigate("/contact")}>Contact</a>
        </>
    )
}

export default Navbar;