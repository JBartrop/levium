import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";


const Footer: React.FC = () => {

    const getDate = new Date().getFullYear();


    return (
        <section className="mt-14 md:mt-16 text-left lg:mt-20 mb-5 flex sm:items-center justify-between  max-[640px]:flex-col mx-4">
            <div className="text-left my-5">
                <div>
                    <ul className="sm:flex  text-[#fbe7c2] text-sm  ">
                        <li className="mr-3 duration-300 hover:text-[#b0b0b0]">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mr-3 duration-300 hover:text-[#b0b0b0]">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="mr-3 duration-300 hover:text-[#b0b0b0]">
                            <Link to="/projects">Our Projects</Link>
                        </li>
                        <li className="mr-3 duration-300 hover:text-[#b0b0b0]">
                            <Link to="/workprocess">Work Process</Link>
                        </li>
                        <li className="mr-3 duration-300 hover:text-[#b0b0b0]">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <br />
                <h1 className="text-[#fbe7c2] text-xl ">Levium</h1>
                <p> &copy; {getDate} Levium company</p>
            </div>
            <div className="text-left sm:text-right " >
                <p className="text-xl text-[#fbe7c2]"><a href="tel:+233209087766">+233209087766</a></p>
                <p className="text-[#fbe7c2] text-sm"><a href="mailto:levium@gmail.com">levium@gmail.com</a></p>
                <div className="flex sm:justify-end">
                    <BsTelegram size={20} color="#f7f7f7" className="m-1" />
                    <FaInstagram size={20} color="#f7f7f7" className="m-1" />
                </div>
            </div>
        </section>
    )
}

export default Footer;