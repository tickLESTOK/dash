// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
// import "../../App.css";
// import { MdMenuOpen, MdOutlineMenu, MdOutlineShoppingCart, MdOutlineEmail, MdOutlineLightMode } from "react-icons/md";
// import { FaBell, FaShieldAlt } from "react-icons/fa";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import Divider from "@mui/material/Divider";
// import PersonAdd from "@mui/icons-material/PersonAdd";
// import Logout from "@mui/icons-material/Logout";
// import SearchBox from "../SearchBox";
// import { MyContext } from "../../App";
// import UserAvatarImgComponent from "../userAvatarImg";

// const Header = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [isOpennotificationDrop, setisOpennotificationDrop] = React.useState(null);
//   const openmyAcc = Boolean(anchorEl);
//   const openNotifications = Boolean(isOpennotificationDrop);

//   const context = useContext(MyContext);

//   const handleOpenMyAccDrop = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleCloseMyAccDrop = () => {
//     setAnchorEl(null);
//   };

//   const handleOpenotificationsDrop = (event) => {
//     setisOpennotificationDrop(event.currentTarget);
//   };
//   const handleClosenotificationsDrop = () => {
//     setisOpennotificationDrop(null);
//   };

//   return (
//     <>
//       <header className="d-flex align-items-center">
//         <div className="container-fluid w-100">
//           <div className="col d-flex align-items-center w-100">
//             <div className="col-sm-2 part1">
//               <Link to={"/"} className="d-flex align-items-center logo">
//                 <img src={logo} alt="logo" />
//                 <span className="ml-2">click</span>
//                 <span id="soap" className="ml-2">
//                   SHOP
//                 </span>
//               </Link>
//             </div>

//             <div className="col-sm-3 d-flex align-items-center part2 pl-4">
//               <Button className="rounded-circle mr-3" onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}>
//               {
//                 context.isToggleSidebar===false? <MdMenuOpen />:<MdOutlineMenu/>
//               } 
//               </Button>
//               <SearchBox />
//             </div>

//             <div className="col-sm-7 d-flex align-items-center part3 justify-content-end">
//               <Button className="rounded-circle mr-3">
//                 <MdOutlineLightMode />
//               </Button>
//               <Button className="rounded-circle mr-3">
//                 <MdOutlineShoppingCart />
//               </Button>
//               <Button className="rounded-circle mr-3">
//                 <MdOutlineEmail />
//               </Button>
              

//               <div className="myAccWrapper">
//                 <Button className="rounded-circle mr-3" onClick={handleOpenotificationsDrop}>
//                   <FaBell />
//                 </Button>
//                 <Menu
//                   anchorEl={isOpennotificationDrop}
//                   id="notifications"
//                   className="notifications dropdown_list"
//                   open={openNotifications}
//                   onClose={handleClosenotificationsDrop}
//                   onClick={handleClosenotificationsDrop}
//                   transformOrigin={{ horizontal: "right", vertical: "top" }}
//                   anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//                 >
//                   <div className="head pl-3 pb-0"><h4> Order (12)</h4></div>
//                   <Divider />
//                   <MenuItem onClick={handleClosenotificationsDrop}>
//                     <ListItemIcon>
//                       <PersonAdd fontSize="small" />
//                     </ListItemIcon>
//                     My Notification
//                   </MenuItem>
//                   <MenuItem onClick={handleClosenotificationsDrop}>
//                     <ListItemIcon>
//                       <FaShieldAlt fontSize="small" />
//                     </ListItemIcon>
//                     Reset Password
//                   </MenuItem>
//                   <MenuItem onClick={handleClosenotificationsDrop}>
//                     <ListItemIcon>
//                       <Logout fontSize="small" />
//                     </ListItemIcon>
//                     Logout
//                   </MenuItem>
//                 </Menu>
//               </div>

//             {
//               context.isLogin!==true?
              
//               <Button className="btn-blue btn-lg btn-round " id="sandy" > <Link to ={'/login'} id="anchor">Sign In</Link></Button>
//               :

//               <div className="myAccWrapper">
//                 <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
//                  <UserAvatarImgComponent img={'https://i.pinimg.com/564x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg'}/>
//                   {/* <div className="userImg">
//                     <span className="rounded-circle">
//                       <img
//                         src="https://i.pinimg.com/564x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg"
//                         alt="user"
//                       />
//                     </span>
//                   </div> */}

//                   <div className="userInfo">
//                     <h4>Ankur</h4>
//                     <p>ankur@12</p>
//                   </div>
//                 </Button>
//                 <Menu
//                   anchorEl={anchorEl}
//                   id="account-menu"
//                   open={openmyAcc}
//                   onClose={handleCloseMyAccDrop}
//                   onClick={handleCloseMyAccDrop}
//                   transformOrigin={{ horizontal: "right", vertical: "top" }}
//                   anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//                 >
//                   <Divider />
//                   <MenuItem onClick={handleCloseMyAccDrop}>
//                     <ListItemIcon>
//                       <PersonAdd fontSize="small" />
//                     </ListItemIcon>
//                     My account
//                   </MenuItem>
//                   <MenuItem onClick={handleCloseMyAccDrop}>
//                     <ListItemIcon>
//                       <FaShieldAlt fontSize="small" />
//                     </ListItemIcon>
//                     Reset Password
//                   </MenuItem>
//                   <MenuItem onClick={handleCloseMyAccDrop}>
//                     <ListItemIcon>
//                       <Logout fontSize="small" />
//                     </ListItemIcon>
//                     Logout
//                   </MenuItem>
//                 </Menu>
//               </div>
//               }
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;



import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";

import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { IoShieldHalfSharp } from "react-icons/io5";
import Divider from '@mui/material/Divider';
import { MyContext } from '../../App';
import UserAvatarImgComponent from '../userAvatarImg';


const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpennotificationDrop, setisOpennotificationDrop] = useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpennotificationDrop);

    const context = useContext(MyContext)

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };

    const handleOpenotificationsDrop = () => {
        setisOpennotificationDrop(true)
    }

    const handleClosenotificationsDrop = () => {
        setisOpennotificationDrop(false)
    }

   
    const changeTheme=()=>{
       if(context.theme==="dark"){
        context.setTheme("light");
       }
       else{
        context.setTheme("dark");
       }
    }

    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* Logo Wraooer */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img src={logo} />
                                <span className="ml-2">click</span>
               <span id="soap" className="ml-2">
                  SHOP
                </span>
                            </Link>
                        </div>


                        {
                            context.windowWidth>992 && 
                            <div className="col-sm-3 d-flex align-items-center part2 res-hide">
                            <Button className="rounded-circle mr-3" onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}>
                                {
                                    context.isToggleSidebar === false ? <MdMenuOpen /> : <MdOutlineMenu />
                                }
                            </Button>
                            <SearchBox />
                        </div>
                        }
                       

                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className="rounded-circle mr-3" onClick={changeTheme}>
                                <MdOutlineLightMode />
                            </Button>
                          

                            <div className='dropdownWrapper position-relative'>
                                <Button className="rounded-circle mr-3"
                                    onClick={handleOpenotificationsDrop}><FaRegBell /></Button>

                                    {
                                        context.windowWidth<992 && 
                                        <Button className="rounded-circle mr-3"
                                    onClick={()=>context.openNav()}
                                   ><IoMenu /></Button>
                                    }
                                    

                                <Menu
                                    anchorEl={isOpennotificationDrop}
                                    className='notifications dropdown_list'
                                    id="notifications"
                                    open={openNotifications}
                                    onClose={handleClosenotificationsDrop}
                                    onClick={handleClosenotificationsDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >

                                    <div className='head pl-3 pb-0'>
                                        <h4>Orders (12)  </h4>
                                    </div>

                                    <Divider className="mb-1" />

                                    <div className='scroll'>
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <UserAvatarImgComponent img={'https://mironcoder-hotash.netlify.app/images/avatar/01.webp'}/>
                                                </div>

                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>


                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>


                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>


                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>


                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </div>


                                    <div className='pl-3 pr-3 w-100 pt-2 pb-1'>
                                        <Button className='btn-blue w-100'>View all notifications</Button>
                                    </div>

                                </Menu>
                            </div>

                            {
                                context.isLogin !== true ?
                                    <Link to={'/login'}><Button className='btn-blue btn-lg btn-round'>Sign In</Button></Link>
                                    :

                                    <div className="myAccWrapper">
                                        <Button className="myAcc d-flex align-items-center"
                                            onClick={handleOpenMyAccDrop}
                                        >
                                            <div className="userImg">
                                                <span className="rounded-circle">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                </span>
                                            </div>

                                            <div className="userInfo res-hide">
                                                <h4>Ankur </h4>
                                                <p className="mb-0">@ankur123</p>
                                            </div>

                                        </Button>

                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={openMyAcc}
                                            onClose={handleCloseMyAccDrop}
                                            onClick={handleCloseMyAccDrop}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >

                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <PersonAdd fontSize="small" />
                                                </ListItemIcon>
                                                My Account
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <IoShieldHalfSharp />
                                                </ListItemIcon>
                                                Reset Password
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </Menu>


                                    </div>

                            }





                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;