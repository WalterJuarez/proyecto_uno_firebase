import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RealtimeData } from './RealtimeData/grupos';
import { InformacionEstadios } from './RealtimeData/estadios';
import { HorarioA, HorarioB, HorarioC, HorarioD, HorarioE, HorarioF, HorarioG, HorarioH } from './RealtimeData/horarios';
import { OctavosJ1, CuartosJ1, TerceroyCuarto, Final } from './RealtimeData/finales';
import { Navbar } from 'react-bootstrap';



function App() {
    return (

        <div className="App">
            <div id="inicio">
                <Navbar class="menu">
                    <ul>
                        <li><a href="#Estadios" >Estadios</a></li>
                    </ul>
                    <ul>
                        <li><a href="#Horarios" class="HorarioA">Horarios</a></li>
                    </ul>
                    <ul>
                        <li><a href="#octavos" >Octavos_f</a></li>
                    </ul>
                    <ul>
                        <li><a href="#cuartos" >Cuartos_f</a></li>
                    </ul>
                    <ul>
                        <li><a href="#tercer" >3er_4to</a></li>
                    </ul>
                    <ul>
                        <li><a href="#final" >Gran Final</a></li>
                    </ul>

                </Navbar>
            </div>
            <br></br>
            <p class="h3"> Grupos </p>
            <br></br>
            <RealtimeData></RealtimeData>
            <br></br>
            <div id="Estadios">
                <p class="h3"> Estadios </p>
                <ul>
                    <li><a href="#inicio" > Inicio </a></li>
                </ul>
                <br></br>
                <InformacionEstadios></InformacionEstadios>
            </div>
            <br></br>
            <div id='Horarios'>
                <p class="h1"> Horarios </p>


                <Navbar class="menu">

                    <ul>
                        <li><a href="#Grupo A" class="HorarioA">A </a></li>
                    </ul>
                    <ul>
                        <li><a href="#Grupo B" class="HorarioA">B </a></li>
                    </ul>
                    <ul>
                        <li><a href="#Grupo C" class="HorarioA">C </a></li>
                    </ul>
                    <ul>
                        <li><a href="#Grupo D" class="HorarioA">D </a></li>
                    </ul>
                    <ul>
                        <li><a href="#Grupo E" class="HorarioA">E </a></li>
                    </ul>
                    <ul>
                        <li><a href="#Grupo F" class="HorarioA">f </a></li>
                    </ul>
                    <ul>
                        <li><a href="#Grupo G" class="HorarioA">G </a></li>
                    </ul>
                    <ul>
                        <li><a href="#Grupo H" class="HorarioA">H </a></li>
                    </ul>
                    <ul>
                        <li><a href="#inicio" > Inicio </a></li>
                    </ul>


                </Navbar>

                <div id='Grupo A'>
                    <p class="h3"> Grupo A </p>
                    <ul>
                        <li><a href="#inicio" > Inicio </a></li>
                    </ul>
                    <HorarioA></HorarioA>
                </div>
                <div id='Grupo B'>
                    <p class="h3"> Grupo B </p>
                    <ul>
                        <li><a href="#inicio" > Inicio </a></li>
                    </ul>
                    <HorarioB></HorarioB>
                </div>
                <div id='Grupo C'>
                    <p class="h3"> Grupo C </p>
                    <ul>
                        <li><a href="#inicio" > Inicio </a></li>
                    </ul>
                    <HorarioC></HorarioC>
                </div>
                <div id='Grupo D'>
                    <p class="h3"> Grupo D </p>
                    <ul>
                        <li><a href="#inicio" > Inicio </a></li>
                    </ul>
                    <HorarioD></HorarioD>
                </div>
                <div id='Grupo E'>
                    <p class="h3"> Grupo E </p>
                    <ul>
                        <li><a href="#inicio" > Inicio </a></li>
                    </ul>
                    <HorarioE></HorarioE>
                </div>
                <div id='Grupo F'>
                    <p class="h3"> Grupo F </p>
                    <ul>
                        <li><a href="#inicio" > Inicio </a></li>
                    </ul>
                    <HorarioF></HorarioF>
                </div>
                <div id='Grupo G'>
                    <p class="h3"> Grupo G </p>
                    <ul>
                        <li><a href="#inicio" > Inicio </a></li>
                    </ul>
                    <HorarioG></HorarioG>
                </div>
                <div id='Grupo H'>
                    <p class="h3"> Grupo H </p>
                    <ul>
                        <li><a href="#inicio" > Inicio </a></li>
                    </ul>
                    <HorarioH></HorarioH>
                </div>
                <div id='octavos'>
                    <p class="h3"> Octavos de Final </p>
                    <ul>
                        <li><a href="#inicio" > Inicio </a></li>
                    </ul>
                    <OctavosJ1></OctavosJ1>
                </div>
                <div id='cuartos'>
                    <p class="h3"> Cuartos de Final </p>
                    <ul>
                        <li><a href="#inicio" > Inicio </a></li>
                    </ul>
                    <CuartosJ1></CuartosJ1>
                </div>
                <div id='tercer'>
                    <p class="h3"> 3er y 4to Lugar </p>
                    <ul>
                        <li><a href="#inicio" > Inicio </a></li>
                    </ul>
                    <TerceroyCuarto></TerceroyCuarto>
                </div>
                <div id='final'>
                    <p class="h3"> Gran Final </p>
                    <ul>
                        <li><a href="#inicio" > Inicio </a></li>
                    </ul>
                    <Final></Final>
                </div>
            </div>
        </div>
    );
}

export default App;