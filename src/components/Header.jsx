import { Link } from 'react-router-dom'
import designByLouis from '../img/design-by-louis-logo.png'

function Header() {
    return (
        <nav className="navList">
            <Link to="/"> <img src={designByLouis} alt="Design by Louis Logo"></img></Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/blog"> Blog </Link>
            <Link to="/contact"> Contact </Link>
        </nav>
    )
}

export default Header
