import UserIcon from "../assets/icons/Iconly/Light/User.svg"
import ActivityIcon from "../assets/icons/Iconly/Light/Activity.svg"
import CalendarIcon from "../assets/icons/Iconly/Light/Calendar.svg"
import FolderIcon from "../assets/icons/Iconly/Light/Folder.svg"
import HomeIcon from "../assets/icons/vuesax/linear/home-2.svg"
import MessagesIcon from "../assets/icons/vuesax/linear/messages.svg"
import SettingIcon from "../assets/icons/vuesax/linear/setting-2.svg"
import LinkIcon from "../assets/icons/vuesax/bold/link-2.svg"
import FilterIcon from "../assets/icons/vuesax/linear/filter.svg"
import CategoryIcon from "../assets/icons/Iconly/Light/Category.svg"



export const IconsData = [
    {
        id: 0,
        title: "Home",
        icon: HomeIcon,
        path: "/"
    },
    {
        id: 1,
        title: "Activity",
        icon: ActivityIcon,
        path: "/activity"
    },
    {
        id:2,
        title:"Folder",
        icon:FolderIcon,
        path:"/folder"
      },
      {
        id:3,
        title:"Calendar",
        icon:CalendarIcon,
        path:"/calendar"
      },
      {
        id:4,
        title:"Messages",
        icon:MessagesIcon,
        path:"/messages"
      },
      {
        id:5,
        title:"Users",
        icon:UserIcon,
        path:"/users"
      },

      {
        id:6,
        title:"Settings",
        icon:SettingIcon,
        path:"/settings"
      }
]

export const FilterIconsData = [
   {
     id:1,
     icon: FilterIcon,
   },
   {
    id:2,
    icon: LinkIcon,
  },
  {
    id:3,
    icon: CategoryIcon,
  }
]