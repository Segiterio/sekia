import { imageCollection } from "./imagesCollection";
import MobileIcon from "../assets/icons/mobile.svg";
import MonitorIcon from "../assets/icons/monitor.svg";
import IllustratorIcon from "../assets/icons/illustrator.svg";

function getImage(number) {
  let arr = [];
  for (let x = 0; x < number; x++) {
    arr.push(imageCollection[x]);
  }
  return arr;
}

export const ProgressCardData = [
  {
    id: 1,
    title: "Real Estate Project",
    content:
      "Create a consistent look and feel smooth on web and mobile, revisi in a landing page.",
    themeStyle: {
      text: "UI Design",
      theme: true,
    },
    messages: 2,
    links: 3,
    date: "25 January 2022",
    contributors: getImage(3),
  },
  {
    id: 2,
    title: "Travel Mobile Design",
    content:
      "Create a consistent look and feel smooth on web and mobile, revisi in a landing page.",
    themeStyle: {
      text: "UI Research",
      theme: false,
    },
    messages: 2,
    links: 3,
    date: "25 January 2022",
    contributors: getImage(3),
  },
  {
    id: 3,
    title: "Health Tracker Dashboard",
    content:
      "Create a consistent look and feel smooth on dash and mobile, revisi in a Dashboard.",
    themeStyle: {
      text: "UI Design",
      theme: true,
    },
    messages: 2,
    links: 3,
    date: "25 January 2022",
    contributors: getImage(3),
  },
];

export const TaskCardData = [
  {
    id: 1,
    title: "Create Real Estate Landing Page",
    subTitle: "UI Design",
    icon: MonitorIcon,
    color: "#FA4907",
  },
  {
    id: 2,
    title: "Create Online Course Illustration",
    subTitle: "Illustrator",
    icon: IllustratorIcon,
    color: "#14AA07",
  },
  {
    id: 3,
    title: "Research Online Course Mobile App Design",
    subTitle: "Research",
    icon: MobileIcon,
    color: "#1679FD",
  },
];

export const ScheduleCardData = [
  {
    id: 1,
    startTime:"09:00",
    endTime:"10:00",
    reason: "Post Dribble Shot",
    theme: true,
    tag: "Dribbble Post",
    date: "29 January 2023",
    peoples: { 
       src:[imageCollection[0]]
    }
  },
  {
    id: 2,
    startTime:"11:00",
    endTime:"12:30",
    reason: "Meet With Andika",
    theme: false,
    tag: "Meeting",
    date: "30 January 2023",
    peoples: { 
       src:[imageCollection[0],imageCollection[1],imageCollection[2]]
    }
  },
  {
    id: 3,
    startTime:"09:00",
    endTime:"10:00",
    reason: "Post Dribble Shot",
    theme: true,
    tag: "Dribbble Post",
    date: "31 January 2023",
    peoples: { 
       src:[imageCollection[2]]
    }
  },
];
