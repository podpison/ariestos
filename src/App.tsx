import { MainPage } from "./components/pages/main/MainPage"
import { Header } from './components/ui/header/Header';
import { Routes, Route } from 'react-router-dom'
import { JobPage } from "./components/pages/job/JobPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return <div className="relative h-[1000vh] container max-w-[1160px]">
    <ToastContainer 
      position="bottom-right"
      hideProgressBar={false}
    />
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/job/:id' element={<JobPage />} />
      {/* <Route path='*' element={<NotFoundPage />} /> */}
    </Routes>
  </div>
}

export default App
