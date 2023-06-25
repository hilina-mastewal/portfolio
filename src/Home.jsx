import {Link} from "react-router-dom";
const  Home=()=> {
 
  return (
    <div className=" bg-[#0f1b34] absolute top-16 left-16 w-full  h-[100vh]">
  <div className="text-md font-medium text-[#98f4f4] absolute left-80 top-20  ">Hi My name is,</div>
  <div className=" text-6xl font-bold text-[#d8dffe]  absolute left-80 top-28 mt-3">Hilina Mastewal</div>
  <div className=" text-6xl font-bold text-[#80b3cb] absolute left-80 top-44 mt-5">I build things for the web</div>
   <div className=" text-xl font-thin text-[#80b3cb] absolute left-80 top-72">I am computer science student.I currently learning <br></br> at hilcoe(school of science and technology) Im
  <br></br>  focused on building accessible human centered product <br></br>  at upstatement
   </div>
   <div><Link  to='/Contact' className="button absolute left-80 top-96 mt-10 px-28">Hire Me</Link></div>
    </div>

  );
 
}

export default Home;