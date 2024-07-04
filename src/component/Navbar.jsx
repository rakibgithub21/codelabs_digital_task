import navLogo from '../assets/Media/logo dark.png'
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto py-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
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
                        <li><a>Home</a></li>
                        <li><a>Services</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About us</a></li>
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                <img className=' lf:w-[100px] w-[96px] md:h-[33px]' src={navLogo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-[#020043] px-1">
                    <li><a>Home</a></li>
                    <li><a>Services</a></li>
                    <li><a>Blog</a></li>
                    <li><a>About us</a></li>
                   
                </ul>
            </div>
            <div className="navbar-end">
                <a className="border border-[#343268] rounded-xl flex items-center gap-2 text-[#020043] font-medium px-[20px] py-[10px] md:px-[28px] md:py-[14px] ">Appointment <GoArrowUpRight/></a>
            </div>
        </div>
    );
};

export default Navbar;