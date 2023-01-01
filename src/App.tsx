import { MainPage } from "./components/pages/main/MainPage"
import { Header } from './components/ui/header/Header';
import { Routes, Route } from 'react-router-dom'
import { JobPage } from "./components/pages/job/JobPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "./components/ui/Footer";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { ProgramPage } from "./components/pages/program/ProgramPage";
import { useStaticItems } from './hooks/useStaticItems';
import { JobsPage } from "./components/pages/JobsPage";
import { TermsAndConditionsPage } from './components/pages/terms&condition/TermsAndConditionsPage';
import { TeamPage } from "./components/pages/team/TeamPage";

function App() {
  useStaticItems('jobs');

  return <div className="relative container flex flex-col h-full max-w-[1160px]">
    <ToastContainer 
      position="bottom-right"
      hideProgressBar={false}
    />
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} />
      <Route path='/program/:id' element={<ProgramPage />} />
      <Route path='/terms&conditions' element={<TermsAndConditionsPage />} />
      <Route path='/team/:name' element={<TeamPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </div>
}

export default App
