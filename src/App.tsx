import { MainPage } from "./components/pages/main/MainPage"
import { Header } from './components/ui/header/Header';
import { Routes, Route } from 'react-router-dom'

function App() {

  return <div className="relative h-[700vh] container max-w-[1160px]">
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
      {/* <Route path='*' element={<NotFoundPage />} /> */}
    </Routes>
  </div>
}

export default App
