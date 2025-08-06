import React from "react";


const Work: React.FC = () => {
    return (
        <section className="my-14 md:my-16 lg:my-20 flex items-center justify-between  max-[640px]:flex-col mx-4">
            <div className="leftside sm:w-1/2 w-full">
              <img src={"images/image3.jpg"} className="w-full h-full rounded-r-md max-[640px]:rounded-xl" />
            </div>
            <div className="rightside sm:w-1/2 w-full max-[640px]:mt-4">
                <h1 className="mb-2 text-xl font-bold">How We Work</h1>
            </div>
        </section>
    )
}

export default Work;