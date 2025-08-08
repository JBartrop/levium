import React from "react";
import ScrollRevealSection from "./revealSection";

interface imageProps{
    image:string;
    id:string;
}


const imageFiles : imageProps[] = [
    {
        id: "1",
        image: "images/image4.jpg"
    },
    {
        id: "2",
        image: "images/image6.jpg"
    },
    {
        id: "3",
        image: "images/image9.jpg"
    },
    {
        id: "4",
        image: "images/image7.jpg"
    },
    {
        id: "5",
        image: "images/image8.jpg"
    },
    {
        id: "6",
        image: "images/image5.avif"
    },
]


const Gallery: React.FC = () => {
    return (
        <ScrollRevealSection>
        <section className="my-14 md:my-16 lg:my-20 mx-4">
            <h1 className=" text-[#fbe7c2] text-2xl font-bold mb-3">Project Gallery</h1>
            <div className="m-container overflow-hidden grid col-span-3 grid-cols-3 gap-2">
                {imageFiles.map((img) => (
                    <div className="m-item inline-block w-full mt-2" key={img.id}>
                        <img src={img.image} className="image min-w-full lg:p-5" />
                    </div>
                ))}
                
            </div>
        </section>
        </ScrollRevealSection>
    )
}

export default Gallery;