"use client"
import React, { useState } from "react";
import ScrollRevealSection from "./revealSection";


interface FaqProps{
    id: string;
    question:string;
    answer:string;
}

const Faqs : FaqProps[] = [
    {
        id: "01",
        question: "Your Idea",
        answer: "Start by sharing your vision with us—no matter how rough or detailed. Whether it’s a sketch, a Pinterest board, or just a feeling, we’ll listen carefully and begin shaping it into a concept that fits your lifestyle, space, and budget.",
    },
    {
        id: "02",
        question: "Visualization",
        answer: "Once we understand your needs and preferences, we develop a detailed design proposal with 2D layouts and 3D visualizations. These give you a realistic preview of the final outcome, allowing you to explore materials, colors, and furniture choices before moving forward.",
    },
    {
        id: "03",
        question: "Agreement",
        answer: "After you’re satisfied with the visualization, we finalize a detailed project proposal, including timelines, materials, and costs. Once agreed upon, we sign a contract to ensure both clarity and commitment before moving to the next phase.",
    },
    {
        id: "04",
        question: "Preparation",
        answer: "This phase includes site measurements, technical drawings, and material sourcing. Our team coordinates all logistics, ensuring that every detail is accurate before production begins. We also schedule the project to minimize disruption to your daily life.",
    },
    {
        id: "05",
        question: "Production and installation",
        answer: "We do. Your furniture and interior elements are custom-made in our workshop, using the materials chosen by you. Our skilled installers then carefully execute the project on-site, ensuring precision and a flawless finish—turning your vision into reality.",
    },
]


const Work: React.FC = () => {

   const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

    return (
        <ScrollRevealSection>
        <section className="my-14 md:my-16 lg:my-20 flex items-center justify-between  max-[640px]:flex-col mx-4 lg:mx-10">
            <div className="leftside sm:w-1/2 w-full">
              <img src={"images/image3.jpg"} className="w-full h-full rounded-r-md max-[640px]:rounded-xl" />
            </div>
            <div className="rightside  md:px-10 lg:px-15 sm:w-1/2 w-full max-[640px]:mt-4">
                <h1 className="text-[#fbe7c2] text-2xl font-bold mb-3 text-start">How We Work</h1>
                {Faqs.map((faq) => {
                    const isOpen = openId === faq.id;
                    return(
                    <div className="p-2 text-start border-b-[1px]  border-[#b0b0b0] cursor-pointer transition-all duration-500 ease-in-out " key={faq.id}>
                        <h3 onClick={() => toggleOpen(faq.id)} className="flex justify-between hover:text-gray-200 mb-1 transition-all duration-500 ease-in-out ">
                            {faq.id} {faq.question}<span className={`transform transition-transform duration-300 text-lg ${isOpen ? "rotate-90" : "rotate-0" }`}>{isOpen ?  "◀" : "▶"}</span>
                        </h3>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                              isOpen ? "h-auto opacity-100 py-3" : "max-h-0 opacity-0 py-0"
                            }`}
                            >
                            <p className="bg-[#444444] text-white p-3 rounded-md">
                                {faq.answer}
                            </p>
                        </div>
                    </div>)
                })}
            </div>
        </section>
        </ScrollRevealSection>
    )
}

export default Work;