import React from "react";



const Loader: React.FC = () => {




    return (
            <section className="loader">
            
                <div className="Loader overflow-hidden bg-[#333333] flex z-1000 h-screen w-full fixed items-center justify-center text-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
                    <div className="flex flex-col items-center  gap-6">
                        <div className="w-24 h-24 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src={"apple-touch-icon.png"} alt={"leviumImage"} width={50} height={50} />
                        </div>
                        
                    </div>
                </div>
                
        </section>

    )
}

export default Loader;
