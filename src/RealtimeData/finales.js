/* eslint-disable react-hooks/rules-of-hooks */
import StartFirebase from "../components/firebase-config";
import React from "react";
import { ref, onValue } from 'firebase/database';
import { Table } from 'react-bootstrap';

const db = StartFirebase();

export class OctavosJ1 extends React.Component {

    constructor() {
        super();
        this.state = {
            tableData1: [],
            tableData2: [],
            tableData3: [],
            tableData4: []
            
        }
    }
    componentDidMount() {
        const dbRef1 = ref(db, `horario-octavo-final/jornada-uno`);
        const dbRef2 = ref(db, `horario-octavo-final/jornada-dos`);
        const dbRef3 = ref(db, `horario-octavo-final/jornada-tres`);
        const dbRef4 = ref(db, `horario-octavo-final/jornada-cuatro`);
        console.log(dbRef1);
    
        onValue(dbRef1, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData1: records });
        });
        onValue(dbRef2, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData2: records });
        });
        onValue(dbRef3, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData3: records });
        });
        onValue(dbRef4, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData4: records });
        });
    }
    render() {

        return (
            <div>
                
                <Table className="container w-75" bordered striped>
                    <thead>
                        <tr>
                            <th>Fecha y hora</th>
                            <th>Equipos</th>
                            <th>Estadio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData1.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
                                    <td>{row.data.equipoUno} vrs {row.data.equipoDos}</td>
                                    <td>{row.data.estadio}</td>

                                </tr>
                            )
                        })}
                        {this.state.tableData2.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
                                    <td>{row.data.equipoUno} vrs {row.data.equipoDos}</td>
                                    <td>{row.data.estadio}</td>

                                </tr>
                            )
                        })}
                        {this.state.tableData3.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
                                    <td>{row.data.equipoUno} vrs {row.data.equipoDos}</td>
                                    <td>{row.data.estadio}</td>

                                </tr>
                            )
                        })}
                        {this.state.tableData4.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
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
export class CuartosJ1 extends React.Component {

    constructor() {
        super();
        this.state = {
            tableData1: [],
            
            
            
        }
    }
    componentDidMount() {
        const dbRef1 = ref(db, `horario-octavo-final/jornada-uno`);
        
        console.log(dbRef1);
    
        onValue(dbRef1, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData1: records });
        });
       
    }
    render() {

        return (
            <div>
                
                <Table className="container w-75" bordered striped>
                    <thead>
                        <tr>
                            <th>Fecha y hora</th>
                            <th>Equipos</th>
                            <th>Estadio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData1.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
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
export class TerceroyCuarto extends React.Component {

    constructor() {
        super();
        this.state = {
            tableData1: [],
        }
    }
    componentDidMount() {
        const dbRef1 = ref(db, `horario-3er-4to-lugar`);
        
        console.log(dbRef1);
    
        onValue(dbRef1, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData1: records });
        });
       
    }
    render() {

        return (
            <div>
                
                <Table className="container w-75" bordered striped>
                    <thead>
                        <tr>
                            <th>Fecha y hora</th>
                            <th>Equipos</th>
                            <th>Estadio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData1.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
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
export class Final extends React.Component {

    constructor() {
        super();
        this.state = {
            tableData1: [],
        }
    }
    componentDidMount() {
        const dbRef1 = ref(db, `horario-final`);
        
        console.log(dbRef1);
    
        onValue(dbRef1, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData1: records });
        });
       
    }
    render() {

        return (
            <div>
                
                <Table className="container w-75" bordered striped>
                    <thead>
                        <tr>
                            <th>Fecha y hora</th>
                            <th>Equipos</th>
                            <th>Estadio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData1.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
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