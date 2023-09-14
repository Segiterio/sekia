import React from "react";
import "./scheduleBar.css";
import ProfileSelect from "./ProfileSelect";
import { useState } from 'react';
import Calendar from 'react-calendar';
import { ScheduleCardData } from "../../Data/CardsData";
import ScheduleCard from "../Cards/ScheduleCard/index"

const ScheduleBar = () => {
    const [value, onChange] = useState(new Date());
  return (
    <div className="scheduleBar_container">
      {/* Profile select */}
       <ProfileSelect/>
      {/* calendar ke liye */}
      <div style={{marginTop:".5rem"}}>
         <Calendar onChange={onChange} value={value}  />
      </div>
      {/* schedule task */}
      <div  className="divider_y"></div>
      <div>
          <div className="flex justify-between">
          <p className="heading_text">My Schedule</p>
          <button className="view_btn text-sm fade_text">View All</button>
        </div>

        <div className="cards_container">
         {
             ScheduleCardData.map((cardData) => (
                <ScheduleCard key={cardData.id} {...cardData} />
             ))
         }

        </div>

      </div>
    </div>
  );
};

export default ScheduleBar;
