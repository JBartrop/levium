 import React from "react";

 interface cardProps{
    id:string;
    image:string;
    title:string;
    description:string;
    type:string;
 }


const Card: React.FC<cardProps> = ({image, title, description, type}) => {
    return (
        <section className="card duration-300 hover:scale-95 rounded-lg cursor-pointer hover:bg-[#666666] bg-[#444444] shadow-gray-900 h-auto md:max-w-xs w-full m-1 shadow-md">
            
            <div>
                <img src={image} className="w-full h-[300px] object-cover rounded-t-lg" />
                <div className="cardheader mt-3 mx-3">
                    <h1 className="carddescription text-[#fbe7c2] text-xl">{title}</h1>
                </div>
                <div className="cardcontent mx-3">
                    <div className="cardtitle"></div>
                    <div className="carddescription">{description}</div>
                </div>
                <div className="cardfooter m-3 text-end">
                    <div className="carddescription text-[#999999]">{type}</div>
                </div>
            </div>
        </section>
    )
}

export default Card;