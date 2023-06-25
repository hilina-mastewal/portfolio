const  About=()=> {
 
  return (
    <div className=" bg-[#0f1b34]  flex absolute top-16 w-full  h-full dark:bg-slate-100 ">
      <div className=" absolute top-36  left-52  hover:scale-105 duration-150  ">
    <img
        src="/image/Mypic2-removebg-preview.png"
        className="   w-[300px] h-[300px] opacity-[0.55] rounded-2xl hover:opacity-100"
        alt="mypicture"/>
           <div className="w-16 h-16 border-[#98f4f4]  border-r-[6px]  border-b-[6px] absolute  top-[95%] left-[90%] z-[1] hover:scale-105 hover:duration-200"></div>
          <div className="w-16 h-16 border-[#98f4f4]   border-l-[6px]  border-t-[6px] absolute  top-2 left-3 z-[1] hover:scale-105 hover:duration-200"></div>
        </div>
  <div className="absolute left-[40%] w-[60%] h-full  bg-[#0f1b34]">
<div className=" text-4xl font-bold text-[#98f4f4]  ml-40 mt-10">About me</div>
<div className="text-2xl font-medium text-[#d8dffe] relative top-16 left-16">And i am a Cs student</div>
<div className="text-lg font-light text-[#80b3cb]  relative top-20 space-x-2 left-16">I am a Computer Science student from Addis Ababa, Ethiopia.<br></br>
  I am currently a senior at Hilcoe School of computer science and <br></br>
  technology.I have taken classes realted to object oriented programming,<br></br>
   data structures and algorithms, windows programming,object oreiented<br></br>
    software engineering and database.My favorite language is web developmnet. <br></br>
    I can also make websites using HTML/CSS/JavaScript and React as frontend.<br></br>
   <br>
   </br>
  Birthday<span className="spanabout">spanning</span> April 21 2001<br></br>
  Phone <span className="spanabout">spanning</span>	+251 963-13-02-18<br></br>
  Email <span className="spanabout">spanning</span>  Hilina.mastewal.ue6602@gmail.com<br></br>
  From  <span className="spanabout">spanning</span>  Addis Ababa, Ethiopia<br></br>
  <div className="mt-10 flex gap-20">
  <button className="button text-sm px-6">DownLoad Resume</button>
  <button className="button text-sm px-6">DownLoad Transcript</button>
  </div>
   </div>

  </div>
    </div>

  );
 
}

export default About;