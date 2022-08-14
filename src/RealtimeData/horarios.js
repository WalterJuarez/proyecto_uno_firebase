/* eslint-disable react-hooks/rules-of-hooks */
import StartFirebase from "../components/firebase-config";
import React from "react";
import {ref, onValue} from 'firebase/database';
import { Table } from 'react-bootstrap';



const db = StartFirebase();
   
export class InformacionHorarios extends React.Component{
    
   
    constructor(props){
      super(props);
        this.state = {
            tableData: [],
            selectedValue:"jornada-dos"
        }
               
    }    
    

    componentDidMount(){
        
        const dbRef = ref(db, `horario-encuentros/grupo-a/${this.state.selectedValue}`);
        
        
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
        const handleChange =(e)=>{
            this.setState({selectedValue: e.target.value})
        }
        return(            
            <div>
                <div>
                <label>Jornada</label>
                  <select onChange={(e)=>handleChange(e)}>
                    <option value="jornada-uno">1</option>
                    <option value="jornada-dos">2</option>
                    <option value="jornada-tres">3</option>
                    <option value="jornada-cuatro">4</option>
                  </select>
                  <h1>elegiste {this.state.selectedValue}</h1>
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