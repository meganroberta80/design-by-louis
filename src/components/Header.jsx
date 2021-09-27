import { Link } from 'react-router-dom'
import designByLouis from '../img/design-by-louis-logo-2.png'

function Header() {
    return (
        <nav className="header">
            <div className="logoBar">
                <Link to="/"> <img src={designByLouis} className="logo" alt="Design by Louis Logo"></img></Link>
            </div>
            <div className="navBar">
                <Link to="/projects"> Projects </Link>
                <Link to="/blog"> Blog </Link>
                <Link to="/contact"> Contact </Link>
            </div>
        </nav>
    )
}

export default Header
