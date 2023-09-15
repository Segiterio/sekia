import React from "react";
import { IconsData } from "../../Data/SideBarData";
import LogoIcon from "../../assets/Group1.png";
import LogoutIcon from "../../assets/icons/logout.svg";
import "./mobilemenuBar.css";
import { useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const MenuBar = ({ ShowMobileMenu }) => {
  const location = useLocation();
  return (
    <div className="mobile_container">
      {/* logo */}
      <div className="flex justify-between" style={{width:"100%"}}>
       <div className="mobile_logo_container">
        <img src={LogoIcon} alt="brand logo" className="" />
        <p className="text-smPlus">Sekia</p>
        </div>
        <RxCross1 className="cross"
          onClick={() => {
            ShowMobileMenu(false);
          }}
        />
      </div>
      {/* menu icons */}
      <div className="mobile_menu-icons-container">
        {IconsData.map((icon) => (
          <div className="flex" key={icon.id}>
            <div className={`mobile_icon_container`}>
              <img src={icon.icon} alt={icon.title} />
              <div
                className={`mobile_side_border ${
                  location.pathname === icon.path && "mobile_active"
                }`}
              ></div>
            </div>
            <p>{icon.title}</p>
          </div>
        ))}
      </div>
      {/* logout icon */}
      <div className="mobile_logo_container">
        <img src={LogoutIcon} alt="Logout" />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default MenuBar;
