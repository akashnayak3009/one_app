
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";
import  Home  from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
<BrowserRouter>
<Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    <Footer/>
</BrowserRouter>
  );
}

export default App;
