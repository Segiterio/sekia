import React from 'react'
import { IconsData } from '../../Data/SideBarData'
import LogoIcon from "../../assets/Group1.png"
import LogoutIcon from "../../assets/icons/logout.svg"
import "./Style.css"
import {useLocation} from "react-router-dom"

const MenuSideBar = () => {
  const location = useLocation();
  return (
    <div className='container'>
    {/* logo */}
      <div className=''>
        <img src={LogoIcon}  alt="brand logo" className=''/>
        <p className='text-sm'>Sekia</p>
      </div>
      {/* menu icons */}
      <div className='menu-icons-container'>
      {
       IconsData.map((icon) => (
        <div key={icon.id} className={`icon_container`}>
             <img src={icon.icon} alt={icon.title} />
             <div className={`side_border ${location.pathname === icon.path && "active"}`}></div>
        </div>
       ))
    }
      </div>
      {/* logout icon */}
      <div className='icon_container'>
         <img src={LogoutIcon} alt="Logout" />
      </div>
    </div>
  )
}

export default MenuSideBar