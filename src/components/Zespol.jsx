import Cards from "./Cards";
import NavBar from "./NavBar";
import arrowSvg from "../down-arrow-svgrepo-com.svg";

function Zespol() {
    return (
        <>
            <NavBar />
            <div
                // style={backgroundStyle}
                className="font-poppins mb-[100px] flex h-screen flex-col items-center pb-[50px]"
            >
                <h1 className=" text-3xl font-extralight tracking-wider">
                    <span className="font-dancing text-5xl">Nasz</span> zespół
                </h1>
                <Cards />
                <button className="mt-[35px] h-[50px] w-[50px] animate-bounce rounded-full border-[1px] p-[15px]">
                    <img src={arrowSvg} alt="arrow" />
                </button>
            </div>
        </>
    );
}

export default Zespol;
