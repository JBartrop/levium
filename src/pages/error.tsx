import React from "react";
import { isRouteErrorResponse, Link, useNavigate, useRouteError } from "react-router-dom";


const Error: React.FC = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    let errorMessage = " 404 unknown Page Error"
    if (isRouteErrorResponse(error)){
        errorMessage = `${error.status} - ${error.statusText}`;
    }

    return(
        <section className="h-screen w-full bg-right bg-cover flex justify-center">
            <div className="w-3/4 m-auto h-3/4 bg-[#444444] py-24 lg:px-20 md:px-10 px-5">
                <h1>There was an error</h1>
                <p className="text-red-300" >{errorMessage}</p>
                <div className="flex text-center justify-center mt-5">
                    <button className="m-2 hover:bg-[#fbe7d9] bg-[#fbe7c2] p-3 rounded-md" onClick={() => {navigate(-1)}} >
                        <span>Go back</span>
                    </button>
                    <button className="m-2 hover:bg-[#fbe7d9] bg-[#fbe7c2] p-3 rounded-md"><Link to="/"> <span>Go Home</span></Link></button>
                </div>
            </div>
            
        </section>
    )
}


export default Error;