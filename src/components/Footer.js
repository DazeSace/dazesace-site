import FadeIn from "react-fade-in";

function Footer() {
    return (
        <div className="flex flex-col fixed inset-x-0 bottom-0 pb-4 font-extralight text-center text-white">
            <FadeIn transitionDuration="800" delay="600">
                <p className="text-xs md:text-sm">© 2021 Daze Sace, all rights reserved</p>
            </FadeIn>
        </div>
    );
}

export default Footer;