import logo from "../img/dazesace-logo.svg";

function Logo() {
    return (
        <div className="pt-12 w-3/4 md:w-1/2 mx-auto">
            <img src={logo} className="mx-auto" alt="logo"/>
            <h1 className="text-3xl lg:text-4xl text-center text-white font-extralight">Web-Development</h1>
        </div>
    );
}

export default Logo;