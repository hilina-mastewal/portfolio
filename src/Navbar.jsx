import {Link} from "react-router-dom";
import { BiAdjust } from "react-icons/bi";
import { AiOutlineDingtalk } from "react-icons/ai";
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

 const handleMode = () => {
    const menues = document.getElementByclass("mode");
    if (menues.classList.contains("dark")) {
      menues.classList.remove("dark");

    }
    else{
      menues.classList.add("dark")
    }
  };

    return ( <div className={`${mode? 'dark':''} dark:bg-red-400  w-full h-16 bg-[#0f1b34] flex justify-between items-center absolute top-0 z-[1]`} >
<div className=" pl-36 text-[#5df2f2] text-[18px] flex items-center"><AiOutlineDingtalk className="animate-waving-hands " size="40"/>Hili<AiOutlineDingtalk className="animate-waving-hands " size="30"/></div>
<div id="menu"
        className={
          "gap-6   justify-between items-center absolute flex-col md:flex-row  hidden md:relative md:top-0 md:right-10   md:flex  top-20 right-10"
        }>
<Link className="Navbar" to="/">Home</Link>
<Link className="Navbar"  to='/About'>About</Link> 
<Link  className="Navbar" to='/Service' >Service</Link>
<Link className="Navbar" to='/Portfolio' >Portfolio</Link>
<Link className="Navbar" to='/Contact' >Contact</Link>
<button onClick={()=> setMode((prev)=> !prev )} ><BiAdjust size="30" className="text-white"/></button >

</div>
<button className="md:hidden text-white absolute right-14 " onClick={handleclick}>
        <BsListUl size="24" />
      </button>
    </div>
     );
}

export default Navbar;