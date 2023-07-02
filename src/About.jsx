const  About=()=> {
 
  return (
    <div className=" bg-[#0f1b34]  flex flex-col md:flex-row items-center justify-center absolute top-10 w-full  h-full dark:bg-slate-100 overflow-y-scroll">
      <div className="md:w-[50%] xssm:h-[35%]  h-[35%]  xs:h-auto w-[85%] flex  justify-center items-start hover:scale-105 duration-150">
        <div className="flex  justify-start xssm:justify-center items-start gap-5 md:gap-0 mt-5  relative ">
         <div className="xs:w-10 xs:h-10 w-5 h-5 border-[#98f4f4]   xs:border-l-[6px] border-l-[3px] border-t-[3px] xs:border-t-[6px] left-0 top-0  hover:scale-105 hover:duration-200 "></div>
    <img
        src="/image/Mypic2-removebg-preview.png"
        className="md:w-[270px] md:h-[270px] xs:h-2/3 xs:w-2/3 h-1/2 w-1/2 opacity-[0.55] rounded-2xl xs:my-10  my-5 md:my-10 xs:mr-0 mr-2 md:mr-16 hover:opacity-100"
        alt="mypicture"/>
           <div className="xs:w-10 xs:h-10 w-5 h-5 border-[#98f4f4] border-r-[3px] border-b-[3px] xs:border-r-[6px]  xs:border-b-[6px] hover:scale-105 hover:duration-200 right-0 bottom-0 absolute"></div>
         </div>
        </div>
  <div className=" md:w-[50%] md:h-auto flex flex-col justify-center items-center   md:py-28  md:items-start xssm:gap-10 gap-3 ">
<div className=" text-3xl xs:text-5xl md:text-5xl  font-bold text-[#d8dffe]   ">About Me</div>
<div className="xs:text-xl flex items-center justify-center  text-xs font-light text-[#80b3cb] space-x-2 px-2 md:ml-0 w-11/12 md:w-4/5 ">I am a Computer Science student from Addis Ababa, Ethiopia
  I am currently a senior at Hilcoe School of computer science and
  technology.I have taken classes realted to object oriented programming
   data structures and algorithms, windows programming,object oreiented
    software engineering and database.My favorite language is web developmnet.
    I can also make websites using HTML/CSS/JavaScript and React as frontend
  </div>
  <div className="xs:text-2xl text-sm font-light  flex flex-col text-[#80b3cb] space-x-2 w-4/5 ">
    <div className="flex gap-5">  <p className="text-white pl-2">Birthday</p> <p className="text-[0.8rem] xs:text-xl">April 21 200</p> </div>
<div className="flex gap-5"> <p className="text-white">Phone</p> 	<p className="text-[0.8rem] xs:text-xl">+251 963-13-02-18</p></div>
 <div className="flex gap-5"><p className="text-white"> Email</p> <p className="text-[0.8rem] xs:text-xl"> Hilina.mastewal.ue6602@gmail.com</p></div>
 <div className="flex gap-5"><p className="text-white">Address</p> <p className="text-[0.8rem] xs:text-xl">Addis Ababa, Ethiopia</p> </div>
 
  </div>
  
  <a href="hilinasResume.pdf" className="button flex items-center justify-center xs:text-sm text-xs xs:w-1/3  w-6/12 md:w-auto md:px-10">DownLoad Resume</a>
 
   </div>

  </div>
   
  

  );
 
}

export default About;