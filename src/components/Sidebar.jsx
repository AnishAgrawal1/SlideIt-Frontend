import { UserAuth } from '../context/AuthContext'
import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart, AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {FiFolder} from "react-icons/fi";
import {BiLogOut} from "react-icons/bi"
import { Link } from "react-router-dom";

const Sidebar = () => {

  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const menus = [
    { name: "Dashboard", link: "/account", icon: MdOutlineDashboard },
    { name: "Analytics", link: "/analytics", icon: TbReportAnalytics, margin: true },
    { name: "Files", link: "/account", icon: FiFolder },
    { name: "Saved", link: "/account", icon: AiOutlineHeart, margin: true },
    { name: "Settings", link: "/account", icon: RiSettings4Line },
  ];
  

  return (
    <div className=''>
        <div className='hidden md:flex'>
            <div className={`bg-black min-h-screen text-gray-100 px-4`}>
                <h1 className={`text-3xl my-5 font-bold text-[#00df9a]`}>SlideIt.</h1>
                <div className='items-center flex'>
                    <AiOutlineUser size={20} className='ml-2 mr-2' />
                    <p className={`font-bold text-sm justify-start text-zinc-400`}>Welcome, {user?.displayName}</p>
                </div>
                <div className=" mt-4 flex flex-col gap-4 relative">
                {menus?.map((menu, i) => (
                    <Link
                    to={menu?.link}
                    key={i}
                    className={` ${
                        menu?.margin && "mt-50"
                    } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                    >
                    <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                    <h2
                        style={{
                        transitionDelay: `${i + 3}00ms`,
                        }}
                    >
                        {menu?.name}
                    </h2>
                    </Link>
                ))}
                <button onClick={handleSignOut} className={`flex items-center font-medium ml-2 rounded`}>
                    <BiLogOut size={20} className='mr-4'/>
                    Logout
                </button>
                </div>
            </div>
        </div>
        <div className='block fixed w-full flex justify-between items-center text-white bg-zinc-900 p-3 md:hidden'>
            <h1 className='font-bold text-3xl flex text-[#00df9a]'>SlideIt</h1>
            <div onClick={handleNav} className="cursor-pointer">
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
        </div>
        <ul className={nav ? 'md:hidden text-white fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300' : 'ease-in-out duration-300 fixed left-[-100%] top-0'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>SlideIt.</h1>
                <li><p className={`text-xs font-bold justify-start p-4 text-zinc-400`}>Welcome, {user?.displayName}</p></li>
                <li className='p-4'><button><Link to="/account" smooth={true} duration={500} onClick={()=> setNav(false)}>Dashboard</Link></button></li>
                <li className='p-4'><button><Link to="/analytics" smooth={true} duration={500} onClick={()=> setNav(false)}>Analytics</Link></button></li>
                <li className='p-4'><button><Link to="/" smooth={true} duration={500} onClick={()=> setNav(false)}>Files</Link></button></li>
                <li className='p-4'><button><Link to="/" smooth={true} duration={500} onClick={()=> setNav(false)}>Saved</Link></button></li>
                <li className='p-4'><button><Link to="/" smooth={true} duration={500} onClick={()=> setNav(false)}>Settings</Link></button></li>
                <li className='p-4'><button onClick={handleSignOut}><Link to="/" smooth={true} duration={500} onClick={()=> setNav(false)}>Logout</Link></button></li>
        </ul>
    </div>
  );
};

export default Sidebar