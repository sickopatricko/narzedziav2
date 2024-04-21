import userImage from "./user-icon.png";
function Cards() {
    return (
        <div className="grid w-[600px] grid-cols-2 grid-rows-2 gap-5 pb-[80px] pt-[80px]  ">
            <div className="rounded-md border-[1px] border-slate-500 p-[15px] shadow-xl drop-shadow-2xl">
                <img
                    src={userImage}
                    className=" mt-[12px] rounded-full border-[1px] border-black p-[7px]"
                />
                <h2 className="pb-[13px]  pt-[15px] font-bold ">
                    Jakub Mrówczyński
                </h2>
                <p className="pb-[20px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore atque nisi temporibus dolores, repudiandae cum nulla
                    dolor veniam. Aperiam quia doloremque impedit quidem
                </p>
            </div>
            <div className="rounded-md border-[1px] border-slate-500 p-[15px] shadow-xl drop-shadow-2xl">
                <img
                    src={userImage}
                    className="mt-[12px] rounded-full border-[1px] border-black p-[7px]"
                />
                <h2 className="pb-[13px] pt-[15px] font-bold ">
                    Kacper Stafecki
                </h2>
                <p className="pb-[20px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore atque nisi temporibus dolores, repudiandae cum nulla
                    dolor veniam. Aperiam quia doloremque impedit quidem
                </p>
            </div>
            <div className="rounded border-[1px] border-slate-500 p-[15px] shadow-xl drop-shadow-2xl">
                <img
                    src={userImage}
                    className="mt-[12px] rounded-full border-[1px] border-black p-[7px]"
                />
                <h2 className="pb-[13px] pt-[15px] font-bold ">
                    Szymon Rutyna
                </h2>
                <p className="pb-[20px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore atque nisi temporibus dolores, repudiandae cum nulla
                    dolor veniam. Aperiam quia doloremque impedit quidem
                </p>
            </div>
            <div className="drop-shadow-2xl≠ rounded-md border-[1px] border-slate-500 p-[15px] shadow-xl">
                <img
                    src={userImage}
                    className="mt-[12px] rounded-full border-[1px] border-black p-[7px]"
                />
                <h2 className="pb-[13px] pt-[15px] font-bold ">Patryk Kulpa</h2>
                <p className="pb-[20px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore atque nisi temporibus dolores, repudiandae cum nulla
                    dolor veniam. Aperiam quia doloremque impedit quidem
                </p>
            </div>
        </div>
    );
}

export default Cards;
