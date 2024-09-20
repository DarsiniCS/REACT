
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Contact from './pages/Contact';
import WebLayout from "./layouts/WebLayout"
const App = () => {
  
  return (
    <>
   <BrowserRouter>
   <Routes>
      <Route element={<WebLayout />}>
     <Route path="/" element={<Profile/>}/>
     <Route path="/projects" element={<Project/>}/>
     <Route path="/contact" element={<Contact/>}/>
     </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App;

