import {HiOutlineMail,HiOutlinePhone} from 'react-icons/hi'
import {FaRegAddressBook} from 'react-icons/fa'
import {GiHand} from 'react-icons/gi'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const  Contact=()=> {

 const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1dzr5rw', 'template_9mzihbp', form.current, 'tWb-1GyfFxw2d1PSw')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent!")
      }, (error) => {
          console.log(error.text);
          alert("Thank you")
      });
  };
  return (
    <div className="bg-[#0f1b34] flex  flex-col gap-10 md:flex-row items-start justify-around w-full absolute top-10  md:left-6 h-full  overflow-y-scroll">
  <div className="md:w-[55%]  h-1/4 xs:mt-10 md:h-full md:mt-20  flex flex-col xs:pt-[6%] md:pt-0 md:items-start gap-5 md:pl-20  pl-4">
     <div>

    <div className=" xs:text-5xl text-3xl  md:text-3xl font-light text-[#d8dffe] mt-5 xs:mt-10 ">Contact Info</div>
    <div className=" xs:text-2xl md:text-2xl mt-6 text-base px-1  font-thin   text-[#80b3cb] xs::w-3/4">  If you would like  me to work for your company or you want me 
   to make you a website ,please put your name, email address and your message.Then i will get back to you within few days.
   </div></div>
    </div>
    <div className="md:w-[50%] h-1/2 w-full flex flex-col  md:mt-0 md:items-start   items-center xs:h-full ">
 <div className=" xs:text-6xl   text-3xl  font-bold text-[#80b3cb] md:mt-10 flex  md:item-start items-center gap-4  ">
      <h3 className=" xs:text-6xl  md:text-5xl text-3xl ">Just say Hello!</h3>
    <GiHand  className=" mt-2 animate-waving-hand " size='34'/>
    </div>
      <form ref={form} onSubmit={sendEmail} className="md:mt-10 flex flex-col w-[87%] mt-5 md:items-start items-center gap-2 md:gap-7" >
        <input
          className="xs:w-full md:w-[420px]  xs:h-10 h-7  w-full rounded-sm bg-[#e6eef3]"
          type="text" 
          required
         name="name"
          placeholder="Name"
          
        /> 
        <input
          className="md:w-[420px] w-full xs:h-10 h-7  rounded-sm  bg-[#e6eef3]"
          type="text"
          name="email"
          required
        
          placeholder="Email"
         
        />
      
    
        <textarea
          className="md:w-[420px] xs:h-52 w-full h-40 rounded-sm bg-[#e6eef3]"
          type="text"
          name="message"
       
       placeholder="Message"
           >
        </textarea>
        <div data-netlify-recaptcha="true"></div>
        <button
          className="button text-sm my-2 mb-20 md:w-48 "
          type="submit">
          Submit
        </button>
      </form>
    </div>

  </div>

  );
 
}

export default Contact;
