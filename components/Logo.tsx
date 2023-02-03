import Image from "next/image";
import React from "react";
import logo from "../assets/Logo.png";

const Logo = () => {
   return (
      <Image
         className="lg:mx-auto lg:pt-16 scale-100"
         alt="logo image"
         src={logo}
      ></Image>
   );
};

export default Logo;
