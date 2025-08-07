import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const MainLayout: React.FC = () => {
    return (
        <section>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </section>
    )
}

export default MainLayout;