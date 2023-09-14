import React from "react";
import "./TaskCard.css";

export const TaskCard = ({ title, subTitle, icon,color }) => {
  return (
    <div className="flex justify-between task_card  relative">
      <div className="flex">
        <div className="icon_task_container">
          <img src={icon} height={26} width={26} alt={title} />
        </div>
        <input type="checkbox" name="" id="" />
        <div className="task_content_container">
          <p className="text-smPlus max-char">{title}</p>
          <p className="text-sm max-char" style={{color:color}}>{subTitle}</p>
        </div>
      </div>
      <div style={{height:".8rem",width:".8rem",padding:"0 20px"}}></div>
    </div>
  );
};
