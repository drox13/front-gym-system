import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import './SideBar.css'
import { IconContext } from 'react-icons/lib';
import { startLogOut } from '../../store/auth/thunks';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/authSlice';
import Button from '@mui/material/Button';

const SideBar = ({sidebarData}) => {
    const [sidebar, setsidebar] = useState(false)
    const dispatch = useDispatch()
    const showSideBar =()=>setsidebar(!sidebar)

  const handleClick = () => {
    dispatch(startLogOut())
  };
  return (
    <>

    <div className='SideBar'>
        <Link to="" className='menu-bars'>
            <FaIcons.FaBars onClick={showSideBar}/>
        </Link>
      
    </div>
    
   
    <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSideBar}>
           
            <li className='navbar-toggle'>
            <Link to= '#' className = 'menu-bars'>
                <AiIcons.AiOutlineClose/>
            </Link>
            </li>

            {sidebarData.map((item,index)=>{
                return (
                    <li key={index} className={item.cName}>
                        <Link to = {item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                        </Link>
                    </li>

                )
            })}
                        <Button variant="outlined"color ="error" onClick={handleClick} className ='log-out-button'>LogOut</Button>


        
        </ul>
   
    </nav>
    <div>
    
    </div>
    {/* </IconContext.Provider> */}
    </>
  )
}

export default SideBar