import React from 'react';
import About from './About';

import './home.css';
const Home = () => {
    return (
        <>
        <div className="parent">
                <h1 className='div1'>Welcome </h1> 
                <h1 className="div2"> to </h1>
                <h1 className='div3'> Cure </h1>               
                
            </div>
            
            <div className="buttons">
                <a href="http://127.0.0.1:5500/Ai-doctor/standalone-frontend/base.html" className=""><button className="btn-1"> GO TO Dr Strange</button></a>
                <button className="btn-2"> MitaharaChain App </button>
                <button className="btn-2"> Chemist Payment App</button>
            </div>
            
            <div className="button-content">
                 With docbot app you can contact AI doctors, call ambulance from the near hospital.
                A fast transfer of your health data to the hospitals as well 
             </div> 

            <About/>
            

        </>
    )
}

export default Home
