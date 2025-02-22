import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
    return (
        <div className="navbar flex items-center justify-between h-36">
            <div className={"left-nav flex items-center justify-start px-5 w-72 gap-x-2"}>
                <Link href="/">
                    <Image src={"/kronicle.png"} alt={"1"} height={80} width={80} />
                </Link>
                <Link href="/">
                    <Image src={"/kilogo.png"} alt={"2"} height={80} width={80} />
                </Link>
                <Link href="/">
                    <Image src={"/kslogo.png"} alt={"3"} height={80} width={80} />
                </Link>
            </div>
            <div className={"center-nav w-72"}>
                <Link href="/">
                    <Image src={"/main.png"} alt={"4"} height={300} width={300} />
                </Link>
            </div>
            <div className={"right-nav px-5 w-72 flex items-center justify-end"}>
                <button className={"font-bold rounded-full px-10 py-1 text-2xl text-black"} style={{background: "radial-gradient(circle,  #7F654A 0%, #EBCE89 50%,#7F654A 100%)"}}>Register</button>
            </div>
        </div>
    );
};

export default Navbar;