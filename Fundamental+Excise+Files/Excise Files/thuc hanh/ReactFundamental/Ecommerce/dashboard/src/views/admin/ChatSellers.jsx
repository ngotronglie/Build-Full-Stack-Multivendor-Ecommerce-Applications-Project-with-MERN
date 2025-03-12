import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const sellers = [
    { id: 1, name: "NGO TRONG LIEM", img: "http://localhost:3000/images/admin.jpg" },
    { id: 2, name: "HELLO KITTY", img: "http://localhost:3000/images/admin.jpg" },
    { id: 3, name: "Anonymous", img: "http://localhost:3000/images/admin.jpg" },
];

const SellerItem = ({ name, img }) => (
    <div className="h-[60px] flex items-center gap-2 text-white px-2 py-2 rounded-sm cursor-pointer">
        <div className="relative">
            <img className="w-[38px] h-[38px] border-white border-2 p-[2px] rounded-full" src={img} alt={name} />
            <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
        </div>
        <div className="flex flex-col w-full">
            <h2 className="text-base font-semibold">{name}</h2>
        </div>
    </div>
);

const ChatSellers = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="px-2 lg:px-7 py-5">
            <div className="w-full bg-[#6a5fdf] px-4 py-4 rounded-md h-[calc(100vh-140px)]">
                <div className="flex w-full h-full relative">
                    <div className={`w-[280px] h-full absolute z-10 ${show ? "left-0" : "-left-[336px]"} md:left-0 md:relative transition-all`}>
                        <div className="w-full h-[calc(100vh-177px)] bg-[#9e97e9] md:bg-transparent overflow-y-auto">
                            <div className="flex justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white">
                                <h2>Sellers</h2>
                                <span onClick={() => setShow(true)} className="cursor-pointer md:hidden">
                                    <IoMdCloseCircle />
                                </span>
                            </div>

                            {sellers.map((seller) => (
                                <SellerItem key={seller.id} name={seller.name} img={seller.img} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatSellers;

/**
 * import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const sellers = [
    { id: 1, name: "NGO TRONG LIEM", img: "http://localhost:3000/images/admin.jpg" },
    { id: 2, name: "HELLO KITTY", img: "http://localhost:3000/images/admin.jpg" },
    { id: 3, name: "Anonymous", img: "http://localhost:3000/images/admin.jpg" },
];

const SellerItem = ({ name, img }) => (
    <div className="h-[60px] flex items-center gap-2 text-white px-2 py-2 rounded-sm cursor-pointer">
        <div className="relative">
            <img className="w-[38px] h-[38px] border-white border-2 p-[2px] rounded-full" src={img} alt={name} />
            <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
        </div>
        <div className="flex flex-col w-full">
            <h2 className="text-base font-semibold">{name}</h2>
        </div>
    </div>
);

const ChatSellers = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="px-2 lg:px-7 py-5">
            <div className="w-full bg-[#6a5fdf] px-4 py-4 rounded-md h-[calc(100vh-140px)]">
                <div className="flex w-full h-full relative">
                    <div className={`w-[280px] h-full absolute z-10 ${show ? "left-0" : "-left-[336px]"} md:left-0 md:relative transition-all`}>
                        <div className="w-full h-[calc(100vh-177px)] bg-[#9e97e9] md:bg-transparent overflow-y-auto">
                            <div className="flex justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white">
                                <h2>Sellers</h2>
                                <span onClick={() => setShow(true)} className="cursor-pointer md:hidden">
                                    <IoMdCloseCircle />
                                </span>
                            </div>

                            {sellers.map((seller) => (
                                <SellerItem key={seller.id} name={seller.name} img={seller.img} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatSellers;

 */