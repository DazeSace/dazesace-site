import FadeIn from "react-fade-in";
function Content404() {
    return (
        <div className="pt-12 w-3/4 md:w-1/2 mx-auto">
            <FadeIn transitionDuration="800">
                <h1 className="text-3xl lg:text-4xl text-center text-white font-extralight">Mein Freund, unter dieser URL bist du leider falsch :/</h1>
            </FadeIn>
        </div>
    );
}
export default Content404;