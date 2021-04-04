import React from 'react';
import '../css/App.css';
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Content404 from "../components/Content404";

const Error404 = () => {
    return (
        <div className="bg-hero-mobile md:bg-hero-desktop bg-cover bg-no-repeat bg-center h-screen">
            <Logo/>
            <Content404/>
            <Footer />
        </div>
    );
};

export default Error404;