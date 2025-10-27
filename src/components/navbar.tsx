"use client"
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigation } from "react-router-dom";

interface NavbarProps{
    id: number;
    name: string;
    icon?: ReactNode;
    link: string;
    onClick?: () => void;
}

const menuItems: NavbarProps[] = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "About Us",
        link: "/about"
    },
    {
        id: 3,
        name: "Our Projects",
        link: "/projects"
    },
    {
        id: 4,
        name: "Work Process",
        link: "/workprocess"
    },
    {
        id: 5,
        name: "Contact",
        link: "/contact"
    },
]


const Navbar: React.FC = () => {

    const location = useLocation();
    const currentpathname = location.pathname
    // console.log(currentpathname)

    const [open, isOpen] = useState(false);

    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLButtonElement>(null);

    const toggleopen = () => {
        isOpen(!open)
    }

    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                open &&
                mobileMenuRef.current && 
                !mobileMenuRef.current.contains(event.target as Node) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target as Node)
            ) {
                isOpen(false);
            }
        };

        const handleScroll = () => {
            if (open) {
                isOpen(false);
            }
        };

        
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('scroll', handleScroll);
        }

        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('scroll', handleScroll);
        };
    }, [open]);

    
    useEffect(() => {
        isOpen(false);
    }, [currentpathname]);

    return (
        <section>
            <header>
                <nav className="fixed bg-[#444444] bg-opacity-90 p-5 rounded-lg shadow-md shadow-gray-900 text-[#fbe7c2] top-8 left-1/2 transform -translate-x-1/2 w-11/12 h-[70px] z-[100] duration-300">
                    {/* desktop */}
                    <div className="max-w-[1570px] mx-auto sm:flex hidden justify-between items-center ">
                        <div className="icon">
                           <p className="text-xl"><a href="/">Levium</a></p>
                        </div>
                        <div>
                            <ul className="flex items-center">
                                {menuItems.map((item, index) => {
                                    const isActive = currentpathname === item.link;
                                    return(
                                        <li key={item.id} className={`ml-5 duration-300 hover:text-[#b0b0b0] ${isActive  ? " text-[#fbe8d2] font-bold" : "text-background-700"}`}>
                                            <Link to={item.link}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    
                    {/* mobile */}
                    <div className=" mx-auto sm:hidden flex justify-between relative items-center "> 
                        <div className="icon">
                            <p className="text-xl"><a href="/">Levium</a></p>
                        </div>
                        <button ref={hamburgerRef} onClick={toggleopen}  className="hamburger relative inline-flex justify-center items-center  outline-offset-2 h-6 w-8 text-[#9d978b]">
                            <span className={`menu ${open ? "open" : ""}`}></span>
                            <span className={`menu ${open ? "open" : ""}`}></span>
                            <span className={`menu ${open ? "open" : ""}`}></span>
                        </button>
                        
                    </div>


                </nav>
                <div ref={mobileMenuRef} className={`mobileMenu ${open ? "menu-open z-50 shadow-lg shadow-gray-900 fixed " : ""}`}>
                    <ul className="">
                        {menuItems.map((item, index) => {
                            const isActive = currentpathname === item.link;
                            return(
                                <li key={item.id} className={`m-5 text-left hover:text-[#b0b0b0] duration-300 ${isActive  ? " text-[#fbe8d2] font-bold" : "text-background-700"}`}>
                                    <Link to={item.link} onClick={toggleopen}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </header>
        </section>
    )
}

export default Navbar;