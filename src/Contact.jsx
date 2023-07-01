import {  useState } from "react";
import {HiOutlineMail,HiOutlinePhone} from 'react-icons/hi'
import {FaRegAddressBook} from 'react-icons/fa'
import {GiHand} from 'react-icons/gi'

const  Contact=()=> {
  const [name, setName] = useState("");
  const [Email, setAge] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefalut();
    const blog = { name, Email,Subject,Message };
    console.log(blog);
  };

  return (
    <div className="bg-[#0f1b34] flex  flex-col  md:flex-row justify-around w-full absolute top-10  md:left-6 h-full overflow-y-scroll">
  <div className="md:w-[55%] md:h-full md:mt-20 flex flex-col pt-[10%] md:pt-0 md:items-start gap-5 md:pl-20  pl-4">
     <div>
    <div className=" xs:text-5xl text-3xl  md:text-3xl font-light text-[#d8dffe] mt-[15%] xs:mt-10 ">Contact Info</div>
    <div className=" xs:text-3xl md:text-2xl mt-6 text-base px-1  font-thin   text-[#80b3cb] xs::w-3/4">  If you would like  me to work for your company or you want me 
   to make you a website ,please put your name, email address and your message.Then i will get back to you within three days.
   </div></div>
   <div className="flex flex-col   md:mt-10  text-[#b8bed8] text-xl ">
    <div className="flex gap-1 xs:text-2xl">
<a><HiOutlineMail  className=" text-xl text-[#b8bed8] mt-1 " size='20'/></a>
<lable className="contactlist  text-[#d8dffe] ">Email</lable>
</div>
<lable className="text-[#80b3cb] md:text-base xs:text-2xl text-base  font-thin ">Hilina.Mastewal.Ue6602@gmail.com</lable>
<div className="flex gap-1">
<a><HiOutlinePhone  className=" text-xl text-[#b8bed8] mt-1  " size='20'/></a>
<lable className="contactlist text-[#d8dffe] ">Phone</lable></div>
<lable className=" text-[#80b3cb] md:text-base  text-base xs:text-2xl   font-thin">+251 963-13-02-18</lable>
<div className="flex gap-1">
<a><FaRegAddressBook  className=" text-sm text-[#b8bed8] mt-1  " size='20'/></a>
<lable className="contactlist text-[#d8dffe]  ">Address</lable></div>
<lable className=" font-thin md:text-base xs:text-2xl text-base text-[#80b3cb]">Addis Ababa, Ethiopia</lable>
</div>
    </div>
    <div className="md:w-[50%] w-full  flex flex-col mt-10 md:mt-0 md:items-start  items-center h-full">
 <div className=" xs:text-6xl   text-3xl  font-bold text-[#80b3cb] md:mt-10 flex  md:item-start items-center gap-4  ">
      <h3 className=" xs:text-6xl  md:text-5xl text-3xl ">Just say Hello!</h3>
    <GiHand  className=" mt-2 animate-waving-hand " size='34'/>
    </div>
      <form onSubmit={handleSubmit} className="md:mt-10 flex flex-col w-[87%] mt-5 md:items-start items-center gap-2 md:gap-7" >
        <input
          className="xs:w-full md:w-[420px]  xs:h-10 h-7  w-full rounded-sm bg-[#e6eef3]"
          type="text" 
          required
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        /> 
        <input
          className="md:w-[420px] w-full xs:h-10 h-7  rounded-sm  bg-[#e6eef3]"
          type="text"
          required
          value={Email}
          placeholder="Email"
          onChange={(e) => setAge(e.target.value)}
        />
      
        <input
          className="md:w-[420px] xs:h-10 h-7 w-full  rounded-sm bg-[#e6eef3]"
          type="text"
          required
          value={Subject}
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
  
        <textarea
          className="md:w-[420px] xs:h-52 w-full h-40 rounded-sm bg-[#e6eef3]"
          type="text"
          value={Message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)} >
        </textarea>
        
        <button
          className="button w-28 my-4 mb-28 md:w-48 "
          type="submit">
          Submit
        </button>
      </form>
    </div>

  </div>

  );
 
}

export default Contact;