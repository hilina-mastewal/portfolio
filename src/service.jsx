import{AiOutlineGithub} from 'react-icons/ai';
import{SiHtml5,SiCss3 , SiTailwindcss,SiJavascript,SiMongodb ,SiCplusplus,SiReact } from 'react-icons/si'

const  Service=()=> {
 
  return (
    <div className=" bg-[#0f1b34] absolute text-white top-10  justify-start items-start md:pt-0 pt-7 xs:pt-32 gap-8 md:justify-center md:items-start flex flex-col md:flex-row  overflow-y-scroll md:left-16 w-full  h-full">
  <div className=" md:w-[10%] md:h-full flex justify-start  items-center ">
     <div className=" text-4xl xs:text-5xl xs:font-medium text-[#d8dffe] md:pt-20 md:-rotate-90 ">My  Skills</div> 
     </div>
     <div className="md:w-10/12 w-full flex flex-col justify-center items-center">
    <div className="text-sm xs:text-lg font-light flex flex-col md:gap-5 text-[#80b3cb] tracking-wider w-full px-1 md:w-[85%]"> 
    <div className=" xs:text-6xl hidden md:flex text-lg font-medium  justify-center items-start  text-[#d8dffe] md:pt-7 ">What I do</div>  
    <p className='text-sm xs:text-2xl'>
  My favorite language is javascript.There is also the server/client version of TicTacToe which allows
  multiple users to play with a single server.I can code in Python and C++ moderatley well. 
  The best project i have to illustrate my C++ skills is the Hospital app. It uses the console 
  to print out a 'menu' for the user and the user can choose what to do. There are more than 15 methods
  working with one another in relation to several global class instance. </p>
    </div> 
    <div className="w-[80%]  py-20 pt-7 md:pt-0 grid grid-cols-2 sm:grid-cols-3 xs:grid-cols-4 gap-9  md:gap-3 ">
      
        <div className="xs:w-[200px]  flex flex-col justify-evenly items-center xs:h-[200px]  shadow-2xl ">
<a className='SideBar text-orange-400  text-xl sm:text-4xl xs:text-[4.75rem] '> <SiHtml5 /></a>
<p className='xs:text-2xl text-base sm:text-lg  text-[#d8dffe]'>HTML</p>
        </div>
           <div className="xs:w-[200px]  flex flex-col justify-evenly items-center xs:h-[200px] shadow-2xl ">
<a className='SideBar text-blue-400 text-xl sm:text-4xl  xs:text-[4.75rem] '> <SiCss3 /></a>
<p className='xs:text-2xl text-base sm:text-lg text-[#d8dffe]'>CSS</p>
        </div>
     
        <div className="xs:w-[200px]  flex flex-col justify-evenly items-center xs:h-[200px] shadow-2xl ">
<a className='SideBar text-blue-400  text-xl sm:text-4xl xs:text-[4.75rem] '> <SiTailwindcss /></a>
<p className='xs:text-2xl text-base sm:text-lg  text-[#d8dffe]'>Tailwind css</p>
        </div>
     
        <div className="xs:w-[200px]  flex flex-col justify-evenly items-center xs:h-[200px] shadow-2xl ">
<a className='SideBar text-[#E4BA42]  text-xl sm:text-4xl xs:text-[4.75rem] '> <SiJavascript /></a>
<p className='xs:text-2xl text-base sm:text-lg text-[#d8dffe]'>JavaScipt</p>
        </div>
     
        <div className="xs:w-[200px]  flex flex-col justify-evenly items-center xs:h-[200px] shadow-2xl ">
<a className='SideBar text-xl sm:text-4xl xs:text-[4.75rem] '> <AiOutlineGithub /></a>
<p className='xs:text-2xl text-base sm:text-lg text-[#d8dffe]'>Git Hub</p>
        </div>
     
        <div className="xs:w-[200px]  flex flex-col justify-evenly items-center xs:h-[200px] shadow-2xl ">
<a className='SideBar text-[#00A35C]  text-xl sm:text-4xl xs:text-[4.75rem] '> <SiMongodb /></a>
<p className='xs:text-2xl text-base sm:text-lg text-[#d8dffe]'>MongoDb</p>
        </div>
     
        <div className="xs:w-[200px]  flex flex-col justify-evenly items-center xs:h-[200px] shadow-2xl ">
<a className='SideBar  text-[#56B4CE]  text-xl sm:text-4xl xs:text-[4.75rem] '> <SiReact /></a>
<p className='xs:text-2xl text-base sm:text-lg text-[#d8dffe]'>React</p>
        </div>
        <div className="xs:w-[200px]  flex flex-col justify-evenly items-center xs:h-[200px] shadow-2xl ">
<a className='SideBar text-[#6295CB]  text-xl sm:text-4xl xs:text-[4.75rem] '> <SiCplusplus /></a>
<p className='xs:text-2xl  text-base sm:text-lg text-[#d8dffe]'>C++</p>
        </div>
     
     
    </div>
    </div>      
      
    </div>

  );
 
}

export default Service;
