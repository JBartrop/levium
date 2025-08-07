"use client"
import React, {  useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Gallery from "./components/gallery";
import Work from "./components/work";
import Testimonials from "./components/testimonial";
import ContactUs from "./components/contactus";



const Levium: React.FC = () => {



    return (
        <section>
            <Hero />
            <About />
            <Gallery />
            <Work />
            <Testimonials />
            <ContactUs />
        </section>
    )
}

export default Levium;