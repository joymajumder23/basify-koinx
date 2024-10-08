import { Link, NavLink } from "react-router-dom"; 
import logo from "../../../assets/images/logoKOIN.png"

const Navbar = () => {
    const links = <>
    <li><NavLink to="/cryptoTaxes">Crypto Taxes</NavLink></li>
    <li><NavLink to="/freeTools">Free Tools</NavLink></li>
    <li><NavLink to="/ResouceCenter">Resource Center</NavLink></li>
    </>;
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to="/"><img className="btn btn-ghost w-24" src={logo} /></Link>
                </div>
                
                <div className="navbar-end">
                <div className="hidden lg:flex font-semibold text-xl">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                    <div className="md:block hidden">
                    <a className="btn bg-[#2870EA] text-white">Get Started</a>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;