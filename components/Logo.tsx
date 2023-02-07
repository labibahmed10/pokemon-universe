import Image from "next/image";
import React from "react";
import logo from "../assets/Logo.png";

const Logo = () => {
   return (
      <div className="flex justify-center items-center pt-20">
         <Image className=" lg:scale-100" alt="logo image" src={logo}></Image>
      </div>
   );
};

export default Logo;
