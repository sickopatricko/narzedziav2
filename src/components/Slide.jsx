import React from "react";

const Slide = (props) => {
    const slideStyle = {
        background: `rgba(255,255,255, 0.7) url(${props.img})`,
        backgroundBlendMode: "lighten",
        backgroundSize: "cover",
        backgroundReapeat: "no-repeat",
        textAlign: "center",
    };

    return (
        <div
            id={`s${props.id}`}
            style={slideStyle}
            className={`flex h-full w-full  flex-shrink-0 snap-center items-center justify-center bg-cover bg-center bg-no-repeat p-4 text-black`}
        >
            <div className="content flex h-[80%] w-[60%] flex-col justify-center ">
                <h2 className="animate-fade pb-[15px] text-5xl font-medium">
                    {props.title}
                </h2>

                <p className="animate-fade  text-lg">{props.content}</p>
            </div>
        </div>
    );
};

export default Slide;
