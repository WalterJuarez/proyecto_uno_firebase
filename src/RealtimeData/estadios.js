import StartFirebase from "../components/firebase-config";
import React from "react";
import {ref, onValue} from 'firebase/database';
import { Table } from "react-bootstrap";

const db = StartFirebase();

export class InformacionEstadios extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef = ref(db, 'estadios');

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
                        <tr>                
                            <th>Nombre</th>
                            <th>Capacidad</th>

                        </tr>
                    </thead>

                    <tbody>

                        {this.state.tableData.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.nombre}</td>
                                    <td>{row.data.capacidad}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </Table>
        )
    }
}