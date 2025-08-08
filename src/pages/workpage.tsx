 import React from "react";


const WorkPage: React.FC = () => {
    return (
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
                hello world
            </div>
                    
        </section>
    )
}

export default WorkPage;