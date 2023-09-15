import "./App.css";
import MenuSideBar from "./components/MenuSideBar";
import Main from "./components/Main";
import ScheduleBar from "./components/ScheduleBar";
import MenuBar from "./components/Mobile/mobilemenuBar";
import { useState } from "react";

function App() {
  const [MobileMenu, ShowMobileMenu] = useState(false);
  return (
    <>
      {MobileMenu ? <MenuBar  ShowMobileMenu={ShowMobileMenu} /> : null}
      <div className="app_layout_container">
        <MenuSideBar />
        <Main ShowMobileMenu={ShowMobileMenu} />
        <ScheduleBar />
      </div>
    </>
  );
}

export default App;
