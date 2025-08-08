 import React from "react";
import Card from "../components/card";


  interface PropjectProps{
    image:string;
    title:string;
    description:string;
    type:string;
 }


 const projectworks: PropjectProps[] = [
    {
        image:"images/image11.png",
        title:"Beaur Project",
        description:"Every project starts with your vision. We listen carefully, collaborate openly, and design spaces that reflect your personality, purpose, and needs.",
        type:"furniture"
    },
    {
        image:"images/image12.webp",
        title:"Saer Project",
        description:"Every project starts with your vision. We listen carefully, collaborate openly, and design spaces that reflect your personality, purpose, and needs.",
        type:"furniture"
    },
    {
        image:"images/image13.webp",
        title:"Hames Project",
        description:"Every project starts with your vision. We listen carefully, collaborate openly, and design spaces that reflect your personality, purpose, and needs.",
        type:"furniture"
    },
    {
        image:"images/image14.jpg",
        title:"Fearst Project",
        description:"Every project starts with your vision. We listen carefully, collaborate openly, and design spaces that reflect your personality, purpose, and needs.",
        type:"furniture"
    },
    {
        image:"images/image15.jpg",
        title:"Pearson Project",
        description:"Every project starts with your vision. We listen carefully, collaborate openly, and design spaces that reflect your personality, purpose, and needs.",
        type:"furniture"
    },
    {
        image:"images/image16.webp",
        title:"Sayn Project",
        description:"Every project starts with your vision. We listen carefully, collaborate openly, and design spaces that reflect your personality, purpose, and needs.",
        type:"furniture"
    },
 ]


const ProjectPage: React.FC = () => {
    return (
        <section className="leviumprojects overflow-hidden">
            <div className=" header lg:py-48 py-36 md:px-20 px-7 relative overflow-hidden">
                <div className="absolute inset-0 z-minus before:content-[''] before:absolute before:inset-0 before:bg-[#262933] before:backdrop-opacity-50 before:z-minus">
                    <img src={"images/image1.jpeg"}   className="w-full h-full object-cover blur-md brightness-40  z-1" />
                </div>
                <div className="container relative z-2 text-left">
                    <nav aria-label="breadcrumb">
                        <ol className="flex text-[#f7f7f7] text-bold text-xl">
                            <li className="m-1"><a href="/">levium</a></li>
                            <li className="m-1">Projects</li>
                        </ol>
                    </nav>
                    <h2 className="text-[#fbe7c2] text-4xl font-bold mb-8">Levium Projects</h2>
                </div>
            </div>
        
            <div className="body mt-16 md:mx-10 lg:mx-14 mx-4">
                <h1 className="text-[#fbe7c2] lg:text-4xl md:text-3xl text-2xl font-bold mb-8">Levium Projects</h1>
                <div className="flex flex-wrap justify-center flex-row">
                    {projectworks.map((project) => (
                    <Card 
                        key={project.title}
                        id={project.title}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        type={project.type}
                    />
                ))}
                </div>
            </div>
                    
        </section>
    )
}

export default ProjectPage;