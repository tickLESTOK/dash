// import React, { useState ,useContext} from "react";
// import Button from "@mui/material/Button";
// import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
// import { SiProducthunt } from "react-icons/si";
// import { FaUsers, FaShoppingCart } from "react-icons/fa";
// import { MdDashboard } from "react-icons/md";
// import { SiGooglemessages } from "react-icons/si";
// import { IoLogOut, IoSettings } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { MyContext } from "../../App";
// const Sidebar = () => {
//   const [activeTab, setActiveTab] = useState(null);
//   const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

//   const context = useContext(MyContext);
//   const isOpenSubmenu = (index) => {
//     if (activeTab === index) {
//       setIsToggleSubmenu(!isToggleSubmenu);
//     } else {
//       setActiveTab(index);
//       setIsToggleSubmenu(true);
//     }
//   };


//   return (
//     <div className="sidebar .raa">
//       <ul>
//         <li>
//           <Link to="/dashboard">
//             <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`}>
//               <span className="icon">
//                 <MdDashboard />
//               </span>
//               Dashboard
//               <span className="arrow">
//                 <IoIosArrowForward />
//               </span>
//             </Button>
//           </Link>
//         </li>
//         <li>
//           <Button
//             className={`w-100 ${activeTab === 1 ? 'active' : ''}`}
//             onClick={() => isOpenSubmenu(1)}
//           >
//             <span className="icon">
//               <SiProducthunt />
//             </span>
//             Products
//             <span className="arrow">
//               {activeTab === 1 && isToggleSubmenu ? <IoIosArrowDown /> : <IoIosArrowForward />}
//             </span>
//           </Button>
//           <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu ? 'colapse' : 'colapsed'}`}>
//             <ul className="submenu">
//               <li><Link to="/product/list">Product List</Link></li>
//               <li><Link to="/product/details">Product View</Link></li>
//               <li><Link to="/product/upload">Product Edit</Link></li>
//             </ul>
//           </div>
//         </li>
//         <li>
//           <Link to="#">
//             <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`}>
//               <span className="icon">
//                 <FaUsers />
//               </span>
//               Customers
//               <span className="arrow">
//                 <IoIosArrowForward />
//               </span>
//             </Button>
//           </Link>
//         </li>
//         <li>
//           <Link to="#">
//             <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`}>
//               <span className="icon">
//                 <FaShoppingCart />
//               </span>
//               Orders
//               <span className="arrow">
//                 <IoIosArrowForward />
//               </span>
//             </Button>
//           </Link>
//         </li>
//         <li>
//           <Link to="#">
//             <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`}>
//               <span className="icon">
//                 <SiGooglemessages />
//               </span>
//               Messages
//               <span className="arrow">
//                 <IoIosArrowForward />
//               </span>
//             </Button>
//           </Link>
//         </li>
//         <li>
//           <Link to="#">
//             <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`}>
//               <span className="icon">
//                 <IoSettings />
//               </span>
//               Settings
//               <span className="arrow">
//                 <IoIosArrowForward />
//               </span>
//             </Button>
//           </Link>
//         </li>
//         <li>
//           <Link to="#">
//             <Button className={`w-100 ${activeTab === 6 ? 'active' : ''}`}>
//               <span className="icon">
//                 <IoLogOut />
//               </span>
//               Logout
//               <span className="arrow">
//                 <IoIosArrowForward />
//               </span>
//             </Button>
//           </Link>
//         </li>
//         <div className="charts"> Charts</div>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { IoMdLogOut } from "react-icons/io";
import { MyContext } from '../../App';
import { FaUser } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";



const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear authentication token from localStorage
        localStorage.removeItem('token');
        
        // Optionally, clear context or other states if needed
        context.setisHideSidebarAndHeader(true); // Example of clearing context state
        
        // Redirect to login page
        navigate('/');
    };
    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context = useContext(MyContext);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu)
    }


    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/dash">
                            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard
                              
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                            <span className='icon'><FaProductHunt /></span>
                            Products
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="/products">Product List</Link></li>
                                <li><Link to="/product/details">Product View</Link></li>
                                <li><Link to="/product/upload">Product Upload</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/dash">
                            <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                                <span className='icon'><FaCartArrowDown /></span>
                                Orders
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dash">
                            <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
                                <span className='icon'><MdMessage /></span>
                                Messages
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                   
                  

                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 6 ? 'active' : ''}`} onClick={() => isOpenSubmenu(6)}>
                                <span className='icon'><FaUser /></span>
                                Login
                               
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/signUp">
                            <Button className={`w-100 ${activeTab === 6 ? 'active' : ''}`} onClick={() => isOpenSubmenu(6)}>
                                <span className='icon'><FaUser /></span>
                                Sign Up
                               
                            </Button>
                        </Link>
                    </li>
                   
                    <li>
                        <Link to="/dash">
                            <Button className={`w-100 ${activeTab === 9 ? 'active' : ''}`} onClick={() => isOpenSubmenu(9)}>
                                <span className='icon'><MdMessage /></span>
                                Messages
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/dash">
                            <Button className={`w-100 ${activeTab === 10 ? 'active' : ''}`} onClick={() => isOpenSubmenu(11)} >
                                <span className='icon'><IoIosSettings /></span>
                                Settings
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>

                </ul>


                <br />

                <div className='logoutWrapper'>
                    <div className='logoutBox'>
                        <Button variant="contained" onClick={handleLogout}><IoMdLogOut /> Logout</Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar;