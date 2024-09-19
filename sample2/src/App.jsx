import NavBar from "./components/Navbar.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Contact from './pages/Contact';
const App = () => {
  
  return (
    <>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Profile/>}/>
     <Route path="/projects" element={<Project/>}/>
     <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App;

