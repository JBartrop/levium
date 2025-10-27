import React from "react";
import ScrollRevealSection from "./revealSection";



const Hero: React.FC = () => {
    return(
        <ScrollRevealSection>
        <section className="flex sm:h-full max-[640px]:h-screen justify-between items-center max-[640px]:flex-col">
            <div className="leftside relative w-full max-[640px]:h-full sm:w-1/2 h-full sm:h-auto  sm:p-10">
                <img  src={"images/image1.jpeg"} alt="Background" className="absolute inset-0 w-full h-full object-cover sm:static sm:hidden" />
            
                <div className="relative z-10 flex flex-col max-[640px]:justify-end justify-end bottom-0 pb-10 h-full lg:p-9 md:p-6 p-3 lg:justify-center items-start text-left bg-black/50 sm:bg-transparent">
                    <h1 className="text-white text-3xl max-[640px]:text-5xl font-bold mb-4">Custom and Built-in <span className="text-[#fbe7c2]">Furniture</span></h1>
                    <p className="text-[#f7f7f7] mb-4 max-[640px]:text-2xl">Production of an interior items from the material chosen by the client</p>
                    <button className="bg-[#fbe7c2] text-[#333333] max-[640px]:text-2xl px-2 md:px-6 sm:px-4 py-2 rounded-lg w-full sm:w-4/6 lg:w-1/2">Order a Project</button>
                </div>
            </div>
            <div className="rightside hidden h-full sm:block w-1/2">
                <img src={"images/image1.jpeg"} className="inset-0 w-full h-full object-cover  " />  
            </div>
        </section>
        </ScrollRevealSection>
    )
}

export default Hero;



// import React from "react";

// const Hero: React.FC = () => {
//   return (
//     <section className="flex flex-col lg:flex-row">
//       {/* Mobile: background image wrapper */}
//       <div className="relative w-full lg:w-1/2 h-[100vh] lg:h-auto">
//         {/* Image background only for mobile */}
//         <img
//           src="images/image1.jpeg"
//           alt="Background"
//           className="absolute inset-0 w-full h-full object-cover lg:static lg:hidden"
//         />
        
//         {/* Text Content */}
//         <div className="relative z-10 flex flex-col items-center text-center justify-end h-full p-6 lg:justify-center lg:items-start lg:text-left bg-black/50 lg:bg-transparent">
//           <h1 className="text-white text-3xl font-bold mb-4">
//             Custom and Built-in <span className="text-[#fbe7c2]">Furniture</span>
//           </h1>
//           <p className="text-white mb-4">
//             Production of an interior items from the material chosen by the client
//           </p>
//           <button className="bg-[#fbe7c2] text-[#b0b0b0] px-6 py-2 rounded">
//             Order a Project
//           </button>
//         </div>
//       </div>

//       {/* Desktop image */}
//       <div className="hidden lg:block w-1/2">
//         <img src="images/image1.jpeg" alt="Furniture" className="w-full h-full object-cover" />
//       </div>
//     </section>
//   );
// };

// export default Hero;
