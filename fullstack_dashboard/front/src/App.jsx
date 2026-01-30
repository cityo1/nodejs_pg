import Appbar from './components/baseLayout/Appbar';
import Sidebar from './components/baseLayout/Sidebar';
import DashboardScreen from './components/dashboard/DashboardScreen';
import './index.css';
import { useSelector } from 'react-redux';

function App() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <div className="App w-screen flex items-center justify-center flex-col dark:bg-[#212121] dark:text-white">
      <div className="page-wrapper min-h-screen flex w-full">
        <Sidebar />
        <div
          className={`content-wrapper w-[calc(100%-28px)] ml-[14px] ${isSidebarOpen ? 'w-[calc(100%-28px)] ml-[14px]' : 'lg:w-[calc(80%-28px)] lg:ml-[calc(20%+14px)]'}`}
        >
          <Appbar />
          <DashboardScreen />
        </div>
      </div>
    </div>
  );
}

export default App;
