import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RealtimeData } from './RealtimeData/grupos';
import { InformacionEstadios } from './RealtimeData/estadios';
import { InformacionHorarios } from './RealtimeData/horarios';


function App() {
    return ( 
    <div className = "App">
        <br></br>  
        <p class = "h3"> Grupos </p>  
        <br></br> 
        <RealtimeData></RealtimeData>  
        <br></br>  
        <p class = "h3"> Estadios </p>  
        <br></br>  
        <InformacionEstadios></InformacionEstadios>  
        <br></br>  
        <p class = "h3"> Horarios </p>  
        <InformacionHorarios></InformacionHorarios>  
        </div>
    );
}

export default App;