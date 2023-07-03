import { FaFacebookSquare,FaInstagram ,FaLinkedin,FaTwitter,FaYoutube} 
from 'react-icons/fa';
import{AiOutlineGithub} from 'react-icons/ai';

const  Sidebar=()=> {
 
  return (
  <div className=" absolute  md:top-0  md:w-16 m-0  md:h-full bottom-0 hidden w-full h-10 md:flex md:flex-col pl-2 xs:gap-12 gap-5 items-center justify-center bg-[#0f1b34]  text-white  z-[1]">
<a  href="https://github.com/Hilina-mastewal" className='SideBar '> <AiOutlineGithub size="22"/></a>
<a href="https://instagram.com/" title="username:-Hilina_Mastewal" className='SideBar'><FaInstagram size="22"/></a>
<a href="https://twitter.com/hilinamastewal" title="username:-Hilina_Mastewal" className='SideBar'><FaTwitter size="22"/></a>
<a  href="https://youtube.com/hilinamastewal" title="username:hilinamekonnen171 "className='SideBar'><FaYoutube size="22"/></a>

        </div>

  );
}

export default Sidebar;