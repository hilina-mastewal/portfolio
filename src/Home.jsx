import {Link} from "react-router-dom";
const  Home=()=> {
 
  return (
    <div className=" bg-[#0f1b34]  absolute top-10  md:left-6  w-full h-full flex items-center  justify-center  overflow-y-scroll ">
      <div className="flex flex-col  justify-center    w-[90vh] md:gap-5 ml-6  ">
  <div className="text-md font-medium text-[#98f4f4] flex items-start  ">Hi My name is,</div>
  <div className="   text-[45px] md:text-6xl font-bold text-[#d8dffe] ">Hilina Mastewal</div>
  <div className=" md:text-6xl text-[35px] font-bold  items-center text-[#80b3cb] ">I build things for the web</div>
  <div className="flex flex-col gap-10">
   <div className=" text-xl font-thin text-[#80b3cb]   ">I am computer science student.I currently learning  at hilcoe(school of science and technology) Im
    focused on building accessible human centered product  at upstatement
   </div>
   <div><Link  to='/Contact' className="button font-bold mt-32 px-20  ">Contact me</Link></div></div>
    </div>
    </div>

  );
 
}

export default Home;