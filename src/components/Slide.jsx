import React from "react";

const Slide = (props) => {
    const slideStyle = {
        background: `rgba(0,0,0, 0.7) url(${props.img})`,
        backgroundBlendMode: "darken",
        backgroundSize: "cover",
        backgroundReapeat: "no-repeat",
    };

    return (
        <div
            id={`s${props.id}`}
            style={slideStyle}
            className={`flex h-full w-full  flex-shrink-0 snap-center items-center justify-center bg-cover bg-center bg-no-repeat p-4 text-white`}
        >
            <div className="content h-[80%] w-[80%]">
                <h2 className="text-6xl">{props.title}</h2>

                <p>{props.content}</p>
            </div>
        </div>
    );
};

export default Slide;
