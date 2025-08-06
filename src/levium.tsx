"use client"
import React, {  useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Gallery from "./components/gallery";
import Work from "./components/work";



const Levium: React.FC = () => {



    return (
        <section>
            <Navbar />
            <Hero />
            <About />
            <Gallery />
            <Work />
        </section>
    )
}

export default Levium;