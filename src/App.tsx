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
import { TeamItemPage } from "./components/pages/teamItem/TeamItemPage";
import { TeamRepresentativePage } from "./components/pages/teamRepresentative/TeamRepresentativePage";
import { FundingItemPage } from './components/pages/fundingItem/FundingItemPage';
import { FundingPage } from './components/pages/FundingPage';
import { ContactPage } from "./components/pages/Contact";
import { TeamPage } from './components/pages/TeamPage';
import { BlogPage } from "./components/pages/blog/BlogPage";
import { BlogItemPage } from "./components/pages/blogItem/BlogItemPage";

function App() {
  useStaticItems('jobs');
  useStaticItems('investmentPortfolios')
  useStaticItems('startups');

  return <div className="relative container flex flex-col h-full max-w-[1160px]">
    <ToastContainer 
      position="bottom-right"
      hideProgressBar={false}
    />
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/funding' element={<FundingPage />} />
      <Route path='/funding/:name' element={<FundingItemPage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} />
      <Route path='/program' element={<ProgramPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/blog/:categoryId/:itemId' element={<BlogItemPage />} />
      <Route path='/terms&conditions' element={<TermsAndConditionsPage />} />
      <Route path='/team' element={<TeamPage />} />
      <Route path='/team/:name' element={<TeamItemPage />} />
      <Route path='/team/:name/:representativeName' element={<TeamRepresentativePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </div>
}

export default App
