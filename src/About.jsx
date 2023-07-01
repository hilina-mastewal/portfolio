const  About=()=> {
 
  return (
    <div className=" bg-[#0f1b34]  flex flex-col md:flex-row items-center justify-center absolute top-10 w-full  h-full dark:bg-slate-100 overflow-x-scroll">
      <div className="md:w-[45%] h-[70%] md:h-auto w-[85%] flex justify-center pt-[10%] md:pt-0 mt-20 md:mt-0 items-center hover:scale-105 duration-150">
        <div className="flex  justify-start items-start  relative ">
         <div className="w-10 h-10 border-[#98f4f4]   border-l-[6px]  border-t-[6px] left-0 top-0  hover:scale-105 hover:duration-200 "></div>
    <img
        src="/image/Mypic2-removebg-preview.png"
        className="md:w-[300px] md:h-[300px] h-1/2 w-1/2 opacity-[0.55] rounded-2xl xs:my-12  my-5 md:my-10 xs:mr-0 mr-12 md:mr-32 hover:opacity-100"
        alt="mypicture"/>
           <div className="w-10 h-10  border-[#98f4f4]  border-r-[6px]  border-b-[6px] hover:scale-105 hover:duration-200 right-0 bottom-0 absolute"></div>
         </div>
        </div>
  <div className=" md:w-[60%] h-full flex flex-col justify-center items-center  md:pt-32  md:items-start gap-10  ">
<div className=" text-5xl font-bold text-[#d8dffe]   ">About Me</div>
<div className="md:text-lg text-base font-light text-[#80b3cb] space-x-2 ml-6 md:ml-0 w-full md:w-4/5 px-1 ">I am a Computer Science student from Addis Ababa, Ethiopia
  I am currently a senior at Hilcoe School of computer science and
  technology.I have taken classes realted to object oriented programming
   data structures and algorithms, windows programming,object oreiented
    software engineering and database.My favorite language is web developmnet.
    I can also make websites using HTML/CSS/JavaScript and React as frontend
  </div>
  <div className="text-lg font-light  flex flex-col text-[#80b3cb] space-x-2 w-4/5 ">
    <div className="flex gap-5">  <p className="text-white pl-2">Birthday</p> <p>April 21 200</p> </div>
<div className="flex gap-5"> <p className="text-white">Phone</p> 	<p>+251 963-13-02-18</p></div>
 <div className="flex gap-5"><p className="text-white"> Email</p> <p> Hilina.mastewal.ue6602@gmail.com</p></div>
 <div className="flex gap-5"><p className="text-white">Address</p> <p>Addis Ababa, Ethiopia</p> </div>
 
  </div>
  
  <a href="myResume.docx" className="button flex items-center justify-center text-sm mb-28 xs:w-1/3 px-6 w-1/2 md:w-3/12">DownLoad Resume</a>
 
   </div>

  </div>
   
  

  );
 
}

export default About;