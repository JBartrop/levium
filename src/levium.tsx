"use client"
import React, {  useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";



const Levium: React.FC = () => {



    return (
        <section>
            <Navbar />
            <Hero />
            <About />
        </section>
    )
}

export default Levium;