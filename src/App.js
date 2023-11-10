import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil.jsx';
import Listtouslesponeys from './pages/Listtouslesponeys.jsx';
import Contact from './pages/Contact.jsx';
import Aboutme from './pages/Aboutme.jsx';


function App() {
  return (    
    <BrowserRouter>
      <Routes>
        <Route path ="/" element ={<Accueil />} />
        <Route path ="/listtouslesponeys" element ={<Listtouslesponeys />} />
        <Route path ="/aboutme" element ={<Aboutme />} />      
        <Route path ="/contact" element ={<Contact />} />        
      </Routes>
    </BrowserRouter>
     
    
  );
}

export default App;
