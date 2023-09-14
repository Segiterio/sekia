import './App.css';
import MenuSideBar from './components/MenuSideBar';
import Main from './components/Main';
import ScheduleBar from './components/ScheduleBar';

function App() {
  return (
    <div className='app_layout_container'>
      <MenuSideBar />
      <Main/>
      <ScheduleBar/>
    </div>
  );
}

export default App;
