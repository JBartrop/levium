import React from "react";


const About: React.FC = () => {
    return (
        <section className="flex max-[640px]:p-4 flex-col-reverse sm:flex-row text-start my-10 sm:my-15 lg:my-20 justify-between items-center">
            <div className="leftside sm:w-1/2 w-full">
              <img src={"images/image10.jpg"} className="w-full h-full rounded-r-md max-[640px]:rounded-md" />
            </div>
            <div className="rightside sm:w-1/2 w-full sm:ml-5 max-[640px]:my-3 ">
                <h1 className="text-[#fbe7c2] text-2xl font-bold mb-3">Levium</h1>
                <p>Exclusive and custom features for the home. Hundreds of Material samples and textires for the client to choose from. <br />
                Our main goal is to bring the boldest ideas to Life while ensuring quality and precision. We can manufacture
                any furniture for your project and find a production solution for any concept</p>
            </div>
            
        </section>
    )
}


export default About;