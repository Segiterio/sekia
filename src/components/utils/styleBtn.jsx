import React from "react";
import "./styleBtn.css"

export const StyleBtn = ({text,theme}) => {
  return (
    <div>
      <p className={" rounded_box text-sm " + (theme ? " OrangeTheme " : " BlueTheme ")}>{text}</p>
    </div>
  );
};
