import React from 'react';
import { HashRouter as Router,Link,Routes,Route} from "react-router-dom";
import './nav.css';
import Home from './Home';
import AIDoc from './AIDoc';
import About from './About';
import Hospo from './Hospo';

export default function Nav() {
  return (
    <>
      
      <div className='container'>
        <div className='name'> cure </div>
      {/* <img className='logo' src="https://www.citypng.com/public/uploads/preview/-4160376229953df1tofwu.png" alt="logo" />  */}
      <div className='space'> </div>
      <a href='/' className='home bn3637 bn38'> Home </a> 
      <a href='http://127.0.0.1:5500/Ai-doctor/standalone-frontend/base.html' className="aidoc bn3637 bn38"> AI Doctor</a>
      <a href='/Hospo' className="hosp bn3637 bn38">Hospo</a>
      <a href='/About' className="about bn3637 bn38">About </a>
     </div>  
      

     <Router>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/AIDoc' element={<AIDoc/>} />
     <Route path='/About' element={<About/>} />
     <Route path='/Hospo' element={<Hospo/>}/>
     </Routes>    
     </Router> 
    </>
  )
}
