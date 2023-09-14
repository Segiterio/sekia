import React from "react";
import "./Layout.css";
import { ProgressCardData, TaskCardData } from "../../Data/CardsData";
import { BsThreeDotsVertical } from "react-icons/bs";
import { StyleBtn } from "./styleBtn";
import MessagesIcon from "../../assets/icons/vuesax/linear/messages.svg";
import CalendarIcon from "../../assets/icons/Iconly/Light/Calendar.svg";
import LinkIcon from "../../assets/icons/vuesax/bold/link-2.svg";
import AddIcon from "../../assets/icons/add-circle.svg";
import { TaskCard } from "../Cards/TaskCard";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRation:false,
  aspectRatio:1/.5,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: true,
      text: "Task Activities",
      position: "top",
      align: "start",
      font: {
        family: "Inter",
        size: 18,
      },
      color: "#393230",
      backgroundColor: "#fff",
      padding: {
        bottom: 20,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: 0, max: 200 })),
      backgroundColor: "#FEEDE6",
      hoverBackgroundColor: "#FA4907",
      maxBarThickness: 30,
      borderRadius: 999,
    },
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}

const positions = [
  {
    id: 1,
    title: "In Progress",
    status: true,
  },
  {
    id: 2,
    title: "In Preview",
    status: false,
  },
  {
    id: 3,
    title: "Completed",
    status: false,
  },
];

const Layout = () => {
  return (
    <div className="grid_layout">
      <div className="grid-item-1">
        <div className="flex justify-between">
          {positions.map((position) => (
            <div key={position.id}>
              <p
                className={`text-smPlus border-bottom ${
                  position.status
                    ? " border-orange heading_text "
                    : " fade_text "
                }`}
              >
                {position.title}
              </p>
            </div>
          ))}
        </div>
        {ProgressCardData.map((cardData) => (
          <div key={cardData.id} className="progress_card_container">
            <div className="flex justify-between">
              <p>{cardData.title}</p>
              {/* icons */}
              <BsThreeDotsVertical />
            </div>
            <p className="text-sm fade_text max-char">{cardData.content}</p>

            <div className="flex justify-between">
              <StyleBtn
                text={cardData.themeStyle.text}
                theme={cardData.themeStyle.theme}
              />

              <div>
                {cardData.contributors.map((contibutor) => (
                  <img
                    key={contibutor.id}
                    src={contibutor.src}
                    height={20}
                    width={20}
                    alt={contibutor.id}
                  />
                ))}
              </div>
            </div>

            <div className="divider_y no_margin"></div>

            <div className="text-sm fade_text flex justify-between">
              {/* link messages icon */}
              <div className="flex">
                <div className="flex">
                  <img
                    src={MessagesIcon}
                    height={20}
                    width={20}
                    alt="messages"
                  />
                  <p>{cardData.messages}</p>
                </div>
                <div className="flex">
                  <img src={LinkIcon} height={20} width={20} alt="Link" />
                  <p>{cardData.links}</p>
                </div>
              </div>
              {/* calendar icon */}
              <div>
                <div className="flex">
                  <img
                    src={CalendarIcon}
                    height={20}
                    width={20}
                    alt="calendar"
                  />
                  <p>{cardData.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* add circle card */}
        <div className="flex justify-center dotted-border">
          <img src={AddIcon} alt="add-icon" />
        </div>
      </div>
      <div
        className="chart_container"
        
      >
        <Chart />
      </div>
      <div className="task_container">
        {/* Task section */}
        <div className="flex justify-between">
          <p className="heading_text">My Task Today</p>
          <button className="view_btn text-sm fade_text">View All</button>
        </div>
        <div className="task_cards_container">
          {TaskCardData.map((taskData) => (
            <TaskCard key={taskData.id} {...taskData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
