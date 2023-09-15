import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./scheduleCard.css";
import { StyleBtn } from "../../utils/styleBtn";
import CalendarIcon from "../../../assets/icons/Iconly/Light/Calendar.svg";
import Addcircle from "../../../assets/icons/add-circle.svg";

const ScheduleCard = ({
  reason,
  theme,
  tag,
  startTime,
  endTime,
  date,
  peoples,
}) => {
  return (
    <div>
      <div className="flex">
        {/* time div */}
        <div className="text-sm time_container fade_text">
          <div>{startTime}</div>
          <div>{endTime}</div>
        </div>
        {/* card div */}
        <div className="card">
          <div className="flex justify-between">
            <StyleBtn theme={theme} text={tag} />
            <BsThreeDotsVertical />
          </div>
          <p className="text-smPlus">{reason}</p>
          <div className="flex justify-between">
            <div className="flex">
              <img src={CalendarIcon} width={20} height={20} alt="Calendar" />
              {/* date */}
              <p className="text-sm fade_text">{date}</p>
            </div>
            {/* map  */}
            <div className="flex">
              {peoples.src.map((image) => (
                <img
                  src={image.src}
                  height={20}
                  width={20}
                  alt="ji"
                  key={image.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
        <div className="flex" style={{gap:"0"}}>
          <img src={Addcircle} width={20} height={20} alt="add circle" />
          <div
            className="divider_y" 
            style={{ backgroundColor: "#FA4907" }}
          ></div>
        </div>
    </div>
  );
};

export default ScheduleCard;
