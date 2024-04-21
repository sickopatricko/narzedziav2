import React, { useState, useEffect } from "react";

function NavBar() {
    const TOP_OFFSET = 50;
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div
            className={`text-red ${showBackground ? "bg-white text-black" : ""} animate-fade font-poppins flex h-[100px] w-full cursor-pointer items-center justify-around`}
        >
            <h1 className=" text-3xl">Grupa 3</h1>
            <ul className=" flex gap-10 text-xl ">
                <li>
                    <a className="" href="#">
                        Zespół
                    </a>
                </li>
                <li>
                    <a className="" href="#">
                        Kontakt
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
