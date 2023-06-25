import { FaFacebookSquare,FaInstagram ,FaLinkedin,FaYoutube} 
from 'react-icons/fa';

const  Sidebar=()=> {
 
  return (
  <div className=" absolute  top-0 w-16 m-0 pt-56  h-screen left-0 flex flex-col pl-2 gap-12 items-center
       bg-[#0f1b34]  text-white  z-[1]">
<a className='SideBar '> <FaFacebookSquare size="22"/></a>
<a className='SideBar'><FaInstagram size="22"/></a>
<a className='SideBar'><FaLinkedin size="22"/></a>
<a className='SideBar'><FaYoutube size="22"/></a>

        </div>

  );

 y

}

export default Sidebar;