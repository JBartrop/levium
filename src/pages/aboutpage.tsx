import React from "react";
import { BsClock } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import ScrollRevealSection from "../components/revealSection";


const AboutPage: React.FC = () => {
    return (
        <ScrollRevealSection>
        <section className="aboutlevium overflow-hidden">
            <div className=" header lg:py-48 py-36 md:px-20 px-7 relative overflow-hidden">
                <div className="absolute inset-0 z-minus before:content-[''] before:absolute before:inset-0 before:bg-[#262933] before:backdrop-opacity-50 before:z-minus">
                    <img src={"images/image1.jpeg"}   className="w-full h-full object-cover blur-md brightness-40  z-1" />
                </div>
                <div className="container relative z-2 text-left">
                    <nav aria-label="breadcrumb">
                        <ol className="flex text-[#f7f7f7] text-bold text-xl">
                            <li className="m-1"><a href="/">levium</a></li>
                            <li className="m-1">about</li>
                        </ol>
                    </nav>
                    <h2 className="text-[#fbe7c2] text-4xl font-bold mb-8">About Levium</h2>
                </div>
            </div>

            <div className="body mt-16 md:mx-14 lg:mx-20 mx-4">
                {/* <h1 className="text-[#fbe7c2] lg:text-4xl md:text-3xl text-2xl font-bold mb-8">About Us</h1> */}
                <div className="flex py-10 justify-between max-[640px]:flex-col items-center">
                    <div className="sm:w-1/2 w-full sm:mr-1 max-[640px]:mb-2">
                        <img src={"images/image10.webp"} />
                    </div>
                    <div className="text-left ml-1 sm:w-1/2 w-full max-[640px]:mt-2">
                        <h1 className="text-[#fbe7c2] lg:text-4xl md:text-3xl text-2xl font-bold mb-2">About Us</h1>
                        <p>Levium Interiors is a modern interior decoration company committed to transforming everyday spaces into timeless
                         works of art through thoughtful design, precise craftsmanship, and a love for wood.
                         <br />
                        We specialize in custom-built wood furniture, space planning, and full-scale interior styling — from minimalist 
                        concepts to rich, warm, detail-driven spaces. Whether it’s a home, office, or commercial space, our goal is to
                         design environments that not only look beautiful but feel personal and functional.
                         </p>
                    </div>
                </div>
                <h1 className="text-[#fbe7c2] text-left lg:text-4xl md:text-3xl text-2xl font-bold mb-2">Who We Work With</h1>
                <p className="text-left">From homeowners and newlyweds to architects, interior designers, and developers — our clients
                     trust us to deliver spaces that inspire and serve. Whether you're renovating a single room or starting from scratch, we’re here to bring your vision to life.<br />
                     At Levium, we don’t just design spaces — we craft experiences, build relationships, and create lasting beauty from the ground up.
                </p>
                <div className="py-10 text-left text-[#fbe7c2]">
                    <p className="flex my-2"><FaMapMarkerAlt size={20} className="mr-1"/><span className="font-bold mr-2"> Locate us:  </span> Accra Ghana </p>
                    <p className="flex my-2"><BsClock size={20} className="mr-1"/> <span className="font-bold mr-2">  Times open: </span> 6:00 AM Weekdays, 12PM Weekends </p>
                </div>
            </div>
            
        </section>
        </ScrollRevealSection>
    )
}

export default AboutPage;