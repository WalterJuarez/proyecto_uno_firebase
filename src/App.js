import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RealtimeData } from './RealtimeData/grupos';
import { InformacionEstadios } from './RealtimeData/estadios';
import { HorarioA, HorarioB, HorarioC, HorarioD, HorarioE, HorarioF, HorarioG, HorarioH } from './RealtimeData/horarios';
import { OctavosJ1, CuartosJ1, TerceroyCuarto, Final } from './RealtimeData/finales';
import BarraNavegacion from './components/BarraNavegacion';
import ScrollToTop from "react-scroll-to-top";

function App() {
    return (

        <div className="App" >
            <div id="inicio">
                <BarraNavegacion></BarraNavegacion>
            </div>
            <br></br>
            <p class="h3"> Paises clasificados y conformacion de grupos </p>
            <br></br>
            <RealtimeData></RealtimeData>
            <br></br>
            <div id="Estadios">
                <p class="h3"> Sedes </p>
                <br></br>
                <InformacionEstadios></InformacionEstadios>
            </div>
            <br></br>
            <div id='Horarios'>
                <p class="h1"> Horarios </p>
                <p class="h2"> Fase de grupos </p>
                <br></br>
                <div id='Grupo A'>
                    <p class="h3"> Grupo A </p>
                    <HorarioA></HorarioA>
                </div>
                <div id='Grupo B'>
                    <p class="h3"> Grupo B </p>
                    <HorarioB></HorarioB>
                </div>
                <div id='Grupo C'>
                    <p class="h3"> Grupo C </p>
                    <HorarioC></HorarioC>
                </div>
                <div id='Grupo D'>
                    <p class="h3"> Grupo D </p>
                    <HorarioD></HorarioD>
                </div>
                <div id='Grupo E'>
                    <p class="h3"> Grupo E </p>
                    <HorarioE></HorarioE>
                </div>
                <div id='Grupo F'>
                    <p class="h3"> Grupo F </p>
                    <HorarioF></HorarioF>
                </div>
                <div id='Grupo G'>
                    <p class="h3"> Grupo G </p>
                    <HorarioG></HorarioG>
                </div>
                <div id='Grupo H'>
                    <p class="h3"> Grupo H </p>
                    <HorarioH></HorarioH>
                </div>
                <div id='octavos'>
                    <p class="h3"> Octavos de Final </p>
                    <OctavosJ1></OctavosJ1>
                </div>
                <div id='cuartos'>
                    <p class="h3"> Cuartos de Final </p>
                    <CuartosJ1></CuartosJ1>
                </div>
                <div id='tercer'>
                    <p class="h3"> 3er y 4to Lugar </p>
                    <TerceroyCuarto></TerceroyCuarto>
                </div>
                <div id='final'>
                    <p class="h3"> Gran Final </p>
                    <Final></Final>
                </div>
                
            </div>
            <ScrollToTop smooth color="#6f00ff" viewBox="0 0 256 256" />
            <br></br>
            <br></br>
        </div>
    );
}

export default App;