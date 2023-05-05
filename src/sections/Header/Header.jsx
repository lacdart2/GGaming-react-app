import { Link } from "react-router-dom";

import "./Header.css"
import logo from "../../assets/images/gaming.png"
import '@fortawesome/fontawesome-free/css/all.min.css';
/* import handleSearch, { searchQuery } from "../../Actions/Search/Search" */

import NavItem, { NavItemDropDown } from "../../components/NavItem/NavItem";

const Header = (props) => {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark cyborg-navbar">
            <div className="container-fluid">
                <a className="navbar-brand logo-holder" href="/">
                    <img className="logo-img" src={logo} alt="website logo" />
                </a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <NavItem>
                            <Link to="/" className="nav-link active" >
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/Streams" className="nav-link " >
                                Rooms
                            </Link>
                        </NavItem>
                        <NavItemDropDown>
                            <a to="/#" className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Games
                            </a>
                            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item text-light bg-dark" href="/#">Fortnite</a></li>
                                <li><a className="dropdown-item text-light bg-dark" href="/#">Need For Speed</a></li>
                                <li><a className="dropdown-item text-light bg-dark" href="/#">Minecraft</a></li>

                            </ul>

                        </NavItemDropDown>
                    </ul>
                    <NavItem className="">
                        <Link to="/Profile" className="nav-link logged-user me-3 mb-3">
                            <i className="fas fa-user"></i>
                            {props.name} {props.familyName}
                        </Link>

                    </NavItem>
                    {/*    <form className="d-flex">
                        <input className="form-control me-2 search-input" type="search" placeholder="Search For a Game" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}

                </div>
            </div>

        </nav>
    )
}

export default Header
