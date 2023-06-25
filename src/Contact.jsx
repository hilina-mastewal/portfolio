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
    <div className="bg-[#0f1b34] flex relative top-16 left-16 w-full  h-full">
  <div className="absolute left-16 w-[50%] h-full ">
    <div className=" text-5xl  font-bold text-[#80b3cb] absolute left-20 top-10 mt-5 flex gap-4">
      <h1>Just say Hello!</h1>
    <GiHand  className="text-x mt-2 animate-waving-hand " size='44'/>
    </div>
      <form onSubmit={handleSubmit} className="absolute left-20 top-28 mt-10 flex flex-col gap-7" >
        <input
          className="w-[420px] h-10 10  rounded-sm bg-[#e6eef3]"
          type="text" 
          required
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        /> 
        <input
          className="w-[420px] h-10 10  rounded-sm  bg-[#e6eef3]"
          type="text"
          required
          value={Email}
          placeholder="Email"
          onChange={(e) => setAge(e.target.value)}
        />
      
        <input
          className="w-[420px] h-10 10  rounded-sm bg-[#e6eef3]"
          type="text"
          required
          value={Subject}
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
  
        <textarea
          className="w-[420px] h-52 rounded-sm bg-[#e6eef3]"
          type="text"
          value={Message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)} >
        </textarea>
        
        <button
          className="button w-48 ml-20"
          type="submit">
          Submit
        </button>
      </form>
    </div>
    <div className="absolute left-[50%]  w-[50%]  h-full">
  <div className=" text-5xl  font-bold text-[#80b3cb] absolute left-0 top-5 mt-5">Contact Me</div>
    <div className=" text-3xl font-light text-[#d8dffe]  absolute left-0 top-28 mt-7">Contact Info</div>
    <div className=" text-xl font-thin text-[#80b3cb] absolute left-0 top-52">  If you would like  me to work for your company or you want me <br></br>
   to make you a website ,please put your name, email address and your <br></br>
   message.Then i will get back to you within three days.<br></br>
   </div>
   <div className="flex flex-col gap-3 absolute left-0 top-80  text-[#b8bed8] text-xl ">
    <div className="flex gap-1">
<a><HiOutlineMail  className=" text-xl text-white mt-2" size='28'/></a>
<lable className="contactlist  text-whitetop-[250px]">Email</lable>
</div>
<lable className="text-[#80b3cb]  ">Hilina.Mastewal.Ue6602@gmail.com</lable>
<div className="flex gap-1">
<a><HiOutlinePhone  className=" text-xl text-white mt-2 " size='28'/></a>
<lable className="contactlist top-[250px] text-white">Phone</lable></div>
<lable className=" text-[#80b3cb]">+251 963-13-02-18</lable>
<div className="flex gap-1">
<a><FaRegAddressBook  className="text-xl text-white mt-2" size='28'/></a>
<lable className="contactlist text-white ">Address</lable></div>
<lable className=" top-[350px] text-[#80b3cb]">Addis Ababa, Ethiopia</lable>
</div>
    </div>

  </div>

  );
 
}

export default Contact;
