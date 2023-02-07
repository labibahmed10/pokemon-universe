import { useEffect, useState } from "react";

const seeWidth = () => {
   const [state, setState] = useState<boolean>();

   useEffect(() => {
      isSmall();
      window.addEventListener("resize", () => isSmall());
   }, []);

   const isSmall = () => (window.innerWidth > 700 ? setState(false) : setState(true));

   return state;
};

export default seeWidth;
