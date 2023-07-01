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

    return ( <div className=" w-full h-10 md:py-5 bg-[#0f1b34] flex justify-between items-center absolute top-0 z-[10]" >
<div className=" pl-6 text-[#5df2f2] text-[18px] flex items-center"><GiFairyWings className="mx-2 text-lg md:text-2xl "  />Hili</div>
<div id="menu"
        className={
          "gap-6  w-40 md:w-auto bg-[#0f1b34] md:justify-between items-center absolute flex-col md:flex-row top-10 hidden md:relative md:top-0 md:right-10   md:flex   right-1"
        }>
<Link className="Navbar" to="/"  onClick={handleNav}>Home</Link>
<Link className="Navbar"  to='/About'  onClick={handleNav}>About</Link> 
<Link  className="Navbar" to='/Service'  onClick={handleNav}>Service</Link>
<Link className="Navbar" to='/Contact'  onClick={handleNav} >Contact</Link>

</div>
<button className="md:hidden text-white pr-10" onClick={handleclick}>
        <BsListUl size="24" />
      </button>
    </div>
     );
}

export default Navbar;