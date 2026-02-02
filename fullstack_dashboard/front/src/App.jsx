import Appbar from './components/baseLayout/Appbar';
import Sidebar from './components/baseLayout/Sidebar';
import DashboardScreen from './components/dashboard/DashboardScreen';
import './index.css';

function App() {
  return (
    <div className="App w-screen flex items-center justify-center flex-col dark:bg-[#212121] dark:text-white">
      <div className="page-wrapper min-h-screen w-full flex">
        <Sidebar />
        <div className={`content-wrapper w-[calc(100%-28px)] ml-[14px] `}>
          <Appbar />
          <DashboardScreen />
        </div>
      </div>
    </div>
  );
}

export default App;
