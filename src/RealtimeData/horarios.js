/* eslint-disable react-hooks/rules-of-hooks */
import StartFirebase from "../components/firebase-config";
import React from "react";
import {ref, onValue} from 'firebase/database';
import { Table } from 'react-bootstrap';

const db = StartFirebase();



export class InformacionHorarios extends React.Component{

    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }
    
        
    
    componentDidMount(){
        const jornada = ('jornada-uno');    
        const dbRef = ref(db, `horario-encuentros/grupo-a/${jornada}`);
        console.log(dbRef);

        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyName, "data": data});
            });
            this.setState({tableData: records});
        });
    }

    render(){
        return(            
            <div>
                <div>
                    <select name="grupos" id="cmbgrupos">
                        <option value={'opcion1'}>jornada-uno</option>
                    </select>
                </div>
            <Table className="container w-75" bordered striped>
                <thead>
                    <tr>
                        <th>Fecha</th> 
                        <th>Hora</th>
                        <th>Equipos</th>                        
                        <th>Estadio</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map((row,index)=>{
                        return(
                            <tr>
                                <td>{row.data.fecha}</td>
                                <td>{row.data.hora}</td>
                                <td>{row.data.equipoUno} vrs {row.data.equipoDos}</td>
                                <td>{row.data.estadio}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            </div>
        )
    }
}