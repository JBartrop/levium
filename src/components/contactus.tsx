import React from "react";


const ContactUs: React.FC = () => {
    return (
        <section className="my-14 md:my-16 lg:my-20 flex items-center justify-between  max-[640px]:flex-col mx-4">
            <div className="leftside sm:w-1/2 w-full">
              <img src={"images/image4.jpg"} className="w-full h-full rounded-r-md hidden sm:block" />
            </div>
            <div className="rightside text-start px-3 md:px-10 lg:px-15 sm:w-1/2 w-full max-[640px]:mt-4">
            <div>hey yo</div>
            </div>
        </section>
    )
}

export default ContactUs;