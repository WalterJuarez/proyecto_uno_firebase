import StartFirebase from "../components/firebase-config";
import React from "react";
import {ref, onValue} from 'firebase/database';
import { Table } from "react-bootstrap";

const db = StartFirebase();

export class InformacionHorarios extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef = ref(db, 'horarioFinal');

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
            
                
            <Table className="container w-75" bordered striped>
                <thead>
                    <th>Equipo 1</th>
                    <th>Equipo 2</th>
                    
                </thead>
                <tbody>
                    {this.state.tableData.map((row,index)=>{
                        return(
                            <tr>
                                <td>{row.data.equipoUno}</td>
                                <td>{row.data.equipoDos}</td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            
        )
    }
}