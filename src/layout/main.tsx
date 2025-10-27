'use client'
import React, { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Loader from '../components/loader';
import ScrollToTop from '../components/scrollToTop';


const MainLayout: React.FC = () => {
    const [Loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    })

    if (Loading) return <Loader />;
    return (
        <section>
            <ScrollToTop />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </section>
    )
}

export default MainLayout;