 import React from "react";
import ScrollRevealSection from "../components/revealSection";


interface WorkProp{
    id:string;
    title:string;
    description:string
}

const Workprocess: WorkProp[] = [
    {
        id:"01",
        title: "Your Idea",
       description:"We begin by understanding your vision — no matter how rough or defined. Whether it’s a mood board, a few inspiration photos, or just a feeling, we listen closely and ask the right questions to shape a concept that aligns with your lifestyle, space, and budget."
    },
    {
        id:"02",
        title:"Visualization",
        description:"Once we have a clear direction, our design team creates visual concepts through mood boards, 2D layouts, and 3D renders. This helps you see how materials, finishes, furniture, and lighting will come together — ensuring your space feels just right before we move forward.",
    },
    {
        id:"03",
        title:"Agreement",
        description: "With the concept approved, we prepare a detailed proposal including:Scope of work, Materials and finishes, Estimated timeline, Cost breakdown, Once we’re aligned, a formal agreement is signed to confirm everything — ensuring clarity and commitment on both sides."
    },
    {
        id:"04",
        title:"Preparation",
        description:"This phase includes: Site measurements, Technical drawings, Final material selection, Coordination with vendors and suppliers, We ensure every detail is finalized so that production and installation can move forward smoothly."
    },
    {
        id:"05",
        title:"Production & Installation",
        description:"Your custom furniture and fittings are handcrafted in our workshop using premium wood and durable materials. Once ready, our skilled installers bring everything to life on-site — handling everything from fit-outs to finishing touches with care and precision."
    },
    {
        id:"06",
        title:"Handover",
        description:"After final inspection, we walk you through your new space, ensuring every detail meets our standards — and yours. Our job isn’t done until you’re thrilled with the result."
    }
]


const WorkPage: React.FC = () => {
    return (
        <ScrollRevealSection>
        <section className="leviumworks overflow-hidden">
            <div className=" header lg:py-48 py-36 md:px-20 px-7 relative overflow-hidden">
                <div className="absolute inset-0 z-minus before:content-[''] before:absolute before:inset-0 before:bg-[#262933] before:backdrop-opacity-50 before:z-minus">
                    <img src={"images/image1.jpeg"}   className="w-full h-full object-cover blur-md brightness-40  z-1" />
                </div>
                <div className="container relative z-2 text-left">
                    <nav aria-label="breadcrumb">
                        <ol className="flex text-[#f7f7f7] text-bold text-xl">
                            <li className="m-1"><a href="/">levium</a></li>
                            <li className="m-1">works</li>
                        </ol>
                    </nav>
                    <h2 className="text-[#fbe7c2] text-4xl font-bold mb-8">Levium Work Process</h2>
                </div>
            </div>
        
            <div className="body mt-16 md:mx-14 lg:mx-20 mx-4">
                <div>
                    {Workprocess.map((works) => (
                        <div key={works.id} className="bg-[#444444] hover:scale-95 duration-300 hover:shadow-lg shadow-gray-900 p-4 rounded-md text-start my-2">
                            <h1 className="text-[#fbe7c2] lg:text-3xl md:text-2xl text-xl font-bold">{works.id} {works.title}</h1>
                            <p>{works.description}</p>
                        </div>
                    ))}
                </div>
            </div>
                    
        </section>
        </ScrollRevealSection>
    )
}

export default WorkPage;