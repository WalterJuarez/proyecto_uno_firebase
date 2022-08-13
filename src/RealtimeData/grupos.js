import StartFirebase from "../components/firebase-config";
import React from "react";
import { ref, onValue } from 'firebase/database';
import { Table } from 'react-bootstrap';

const db = StartFirebase();

export class RealtimeData extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount() {
        const dbRef = ref(db, 'grupos');

        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData: records });

        });
    }

    render() {
        return (
            <div>

            <Table className = "container w-75" bordered striped>
            <thead>
            <tr>
            <th> Grupo </th> 
            <th> Equipo 1 </th> 
            <th> Equipo 2 </th> 
            <th> Equipo 3 </th> 
            <th> Equipo 4 </th> 
            </tr> 
            </thead>

            <tbody>

            {this.state.tableData.map((row, index) => {
                    return ( 
                        <tr>
                        <td> { row.data.grupo } </td> 
                        <td> { row.data.equipoUno } </td> 
                        <td> { row.data.equipoDos } </td> 
                        <td> { row.data.equipoTres } </td> 
                        <td> { row.data.equipoCuatro } </td> 
                        </tr>
                    )
                })
            }

            </tbody> 
            </Table>
            </div>
        )
    }
}