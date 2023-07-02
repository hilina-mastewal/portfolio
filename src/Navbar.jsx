import {Link} from "react-router-dom";
import { GiFairyWings } from "react-icons/gi";
import { BsListUl } from "react-icons/bs";
import { useState } from "react";
function Navbar() {
  const [mode,setMode] = useState(true);
  console.log("kalab");
const handleclick = () => {
    const menues = document.getElementById("menu");
    if (menues.classList.contains("hidden")) {
      menues.classList.remove("hidden");
      menues.classList.add("flex");
    } else {
      menues.classList.remove("flex");
      menues.classList.add("hidden");
    }
  };

 const handleNav = () => {
   const menues = document.getElementById("menu");
    if (menues.classList.contains("flex")) {
       menues.classList.remove("flex");
      menues.classList.add("hidden");
    }
  };

    return ( <div className=" w-full h-11 md:py-5 bg-[#0f1b34] flex justify-between items-center absolute top-0 z-[10]  " >
<div className=" pl-6 text-[#5df2f2] text-[18px] flex items-center"><GiFairyWings className="mx-2 text-lg md:text-2xl "  />Hili</div>
<div id="menu"
        className={
          "  w-full h-auto md:w-auto bg-[#0f1b34] md:justify-between items-center text-xs py-5 md:py-0 md:text-sm justify-center absolute flex-col hidden md:flex-row border-[#091120] shadow-2xl md:border-b-transparent border-b-[1px]  top-10  md:relative md:top-0 md:right-10   md:flex   "
        }>
<Link className="Navbar font-thin" to="/"  onClick={handleNav}>Home</Link>
<Link className="Navbar font-light"  to='/About'  onClick={handleNav}>About</Link> 
<Link  className="Navbar font-light" to='/Service'  onClick={handleNav}>Service</Link>
<Link className="Navbar font-light" to='/Contact'  onClick={handleNav} >Contact</Link>

</div>
<button className="md:hidden text-white pr-10" onClick={handleclick}>
        <BsListUl size="24" />
      </button>
    </div>
     );
}

export default Navbar;