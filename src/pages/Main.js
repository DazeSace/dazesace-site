import React from 'react';
import '../css/App.css';
import Logo from "../components/Logo";
import ContentMain from "../components/ContentMain";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div className="bg-hero-mobile md:bg-hero-desktop bg-cover bg-no-repeat bg-center h-screen">
            <Logo/>
            <ContentMain/>
            <Footer/>
        </div>
    );
};

export default Main;