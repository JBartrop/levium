import React, { useState } from "react";


const ContactUs: React.FC = () => {

    const [input, setinput] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const [submitting, isSubmitting] = useState(false);

    const handlechange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setinput((previnput) => ({
            ...previnput,
            [name]: value
        }))
    }


    const submitForm = async (): Promise<void> => {
        isSubmitting(true);
        try{
            console.log(input)
            await new Promise <void> ((res) => setTimeout(res, 3000));
        }catch(error:any){
            console.log(error.message)
        }finally{
            isSubmitting(false)
            setinput({
                name: "",
                phone: "",
                email: ""
            })
        }
    }

    const isformcomplete = 
    input.email.trim() !== "" &&
    input.name.trim() !== "" &&
    input.phone.trim() !== "";


    return (
        <section className="my-14 md:my-16 lg:my-20 flex items-center justify-between  max-[640px]:flex-col mx-10">
            <div className="leftside sm:w-1/2 w-full">
              <img src={"images/image4.jpg"} className="w-full h-[80vh] rounded-r-md hidden sm:block" />
            </div>
            <div className="rightside h-[80vh] sm:ml-2 sm:bg-[#444444] text-start p-3 md:p-10 lg:p-15 sm:w-1/2 w-full max-[640px]:mt-4">
            <div>
                <h1 className="text-[#fbe7c2] text-4xl font-semibold mb-2">Contact us</h1>
                <p>Interested in placing an order or have a question? <br />
                Simly fill out the form. And we'll reach out to you shortly.
                </p>
                <br />
                <form>
                    <input type="text" placeholder="Your name" name="name" onChange={handlechange} value={input.name} className="w-full my-1 border-2 rounded-md bg-transparent p-3 text-sm border-[#747474] "></input>
                    <input type="email" placeholder="your email" name="email" onChange={handlechange} value={input.email} className="w-full my-1 border-2 rounded-md bg-transparent p-3 text-sm border-[#747474] "></input>
                    <input type="text" placeholder="phone number" name="phone" onChange={handlechange} value={input.phone} className="w-full my-1 border-2 rounded-md bg-transparent p-3 text-sm border-[#747474] "></input>
                    <p className="mb-3"> <input type="checkbox" className="rounded-md bg-transparent  border-[#747474]" /> <span className="text-[#f7f7f7]">I agree to the </span> <a href="#" className="cursor-pointer">Privacy Policy</a> </p>
                    <button disabled={submitting || !isformcomplete} onClick={(e) => {e.preventDefault(); submitForm();}} className="w-full p-2 rounded-md bg-[#fbe7c2] mt-2 text-[#333333] flex items-center justify-center disabled:cursor-not-allowed duration-300"> 
                        {submitting ? (
                        <> 
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-[#333333]"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-45"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>submitting </>): "submit"}
                    </button>
                </form>
            </div>
            </div>
        </section>
    )
}

export default ContactUs;