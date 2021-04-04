import FadeIn from "react-fade-in";
import {FiInstagram} from "react-icons/fi";

function ContentMain() {
    return (
        <div className="flex flex-col text-center text-white">
            <FadeIn transitionDuration="800">
                <h2 className="text-xl md:text-3xl mt-10 lg:mt-16">Wir machen:</h2>
            </FadeIn>
            <div className="font-extralight text-lg md:text-2xl">
                <FadeIn transitionDuration="800">
                    <p>Webseiten</p>
                    <p>(SE-) Optimierung</p>
                    <p>Web-Applikationen</p>
                    <p>individuelle IT-Lösungen</p>
                </FadeIn>
            </div>
            <FadeIn transitionDuration="800" delay="600">
                <h2 className="text-xl md:text-3xl mt-10 lg:mt-16">Bei Interesse:</h2>
            </FadeIn>
            <div className="font-extralight text-lg md:text-2xl">
                <FadeIn transitionDuration="800" delay="600">
                    <p>dazemcblaze@gmail.com</p>
                </FadeIn>
            </div>
            <FadeIn transitionDuration="800" delay="700">
                <div className="w-1/5 mx-auto">
                    <FiInstagram onClick={
                        () => {
                            window.location.href = "https://www.instagram.com/dazesacewebdev/";
                        }
                    } className="mx-auto cursor-pointer mt-16 md:mt-12 xl:mt20 text-5xl lg:text-6xl"/>
                </div>
            </FadeIn>
        </div>
    );
}

export default ContentMain;