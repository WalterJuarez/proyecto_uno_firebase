/* eslint-disable react-hooks/rules-of-hooks */
import StartFirebase from "../components/firebase-config";
import React from "react";
import { ref, onValue } from 'firebase/database';
import { Table } from 'react-bootstrap';

const db = StartFirebase();

export class HorarioA extends React.Component {

    constructor() {
        super();
        this.state = {
            tableData: [],
            tableData1: [],
            tableData2: []
            
        }
    }
    componentDidMount() {
        const dbRef = ref(db, `horario-encuentros/grupo-a/jornada-uno`);
        const dbRef1 = ref(db, `horario-encuentros/grupo-a/jornada-dos`);
        const dbRef2 = ref(db, `horario-encuentros/grupo-a/jornada-tres`);
        console.log(dbRef);
        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData: records });
        });
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
                        {this.state.tableData.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
                                    <td>{row.data.equipoUno} vrs {row.data.equipoDos}</td>
                                    <td>{row.data.estadio}</td>

                                </tr>
                            )
                        })}
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
                    </tbody>
                </Table>
            </div>
        )
    }
}
export class HorarioB extends React.Component {


    constructor() {
        super();
        this.state = {
            tableData: [],
            tableData1: [],
            tableData2: []
            
        }
    }

    componentDidMount() {
        const dbRef = ref(db, `horario-encuentros/grupo-b/jornada-uno`);
        const dbRef1 = ref(db, `horario-encuentros/grupo-b/jornada-dos`);
        const dbRef2 = ref(db, `horario-encuentros/grupo-b/jornada-tres`);
        console.log(dbRef);
        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData: records });
        });
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
    }
    render() {

        return (
            <div>                
                <Table className="container w-75" bordered striped>
                    <thead>
                        <tr>
                            <th>Fecha y Hora</th>
                            <th>Equipos</th>
                            <th>Estadio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
                                    <td>{row.data.equipoUno} vrs {row.data.equipoDos}</td>
                                    <td>{row.data.estadio}</td>

                                </tr>
                            )
                        })}
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
                    </tbody>
                </Table>
            </div>
        )
    }
}
export class HorarioC extends React.Component {


    constructor() {
        super();
        this.state = {
            tableData: [],
            tableData1: [],
            tableData2: []
            
        }
    }

    componentDidMount() {
        const dbRef = ref(db, `horario-encuentros/grupo-c/jornada-uno`);
        const dbRef1 = ref(db, `horario-encuentros/grupo-c/jornada-dos`);
        const dbRef2 = ref(db, `horario-encuentros/grupo-c/jornada-tres`);
        console.log(dbRef);
        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData: records });
        });
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
    }
    render() {

        return (
            <div>                
                <Table className="container w-75" bordered striped>
                    <thead>
                        <tr>
                            <th>Fecha y Hora</th>
                            <th>Equipos</th>
                            <th>Estadio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
                                    <td>{row.data.equipoUno} vrs {row.data.equipoDos}</td>
                                    <td>{row.data.estadio}</td>

                                </tr>
                            )
                        })}
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
                    </tbody>
                </Table>
            </div>
        )
    }
}
export class HorarioD extends React.Component {


    constructor() {
        super();
        this.state = {
            tableData: [],
            tableData1: [],
            tableData2: []
            
        }
    }

    componentDidMount() {
        const dbRef = ref(db, `horario-encuentros/grupo-d/jornada-uno`);
        const dbRef1 = ref(db, `horario-encuentros/grupo-d/jornada-dos`);
        const dbRef2 = ref(db, `horario-encuentros/grupo-d/jornada-tres`);
        console.log(dbRef);
        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData: records });
        });
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
    }
    render() {

        return (
            <div>                
                <Table className="container w-75" bordered striped>
                    <thead>
                        <tr>
                            <th>Fecha y Hora</th>
                            <th>Equipos</th>
                            <th>Estadio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
                                    <td>{row.data.equipoUno} vrs {row.data.equipoDos}</td>
                                    <td>{row.data.estadio}</td>

                                </tr>
                            )
                        })}
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
                    </tbody>
                </Table>
            </div>
        )
    }
}
export class HorarioE extends React.Component {


    constructor() {
        super();
        this.state = {
            tableData: [],
            tableData1: [],
            tableData2: []
            
        }
    }

    componentDidMount() {
        const dbRef = ref(db, `horario-encuentros/grupo-e/jornada-uno`);
        const dbRef1 = ref(db, `horario-encuentros/grupo-e/jornada-dos`);
        const dbRef2 = ref(db, `horario-encuentros/grupo-e/jornada-tres`);
        console.log(dbRef);
        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData: records });
        });
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
    }
    render() {

        return (
            <div>                
                <Table className="container w-75" bordered striped>
                    <thead>
                        <tr>
                            <th>Fecha y Hora</th>
                            <th>Equipos</th>
                            <th>Estadio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
                                    <td>{row.data.equipoUno} vrs {row.data.equipoDos}</td>
                                    <td>{row.data.estadio}</td>

                                </tr>
                            )
                        })}
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
                    </tbody>
                </Table>
            </div>
        )
    }
}
export class HorarioF extends React.Component {


    constructor() {
        super();
        this.state = {
            tableData: [],
            tableData1: [],
            tableData2: []
            
        }
    }

    componentDidMount() {
        const dbRef = ref(db, `horario-encuentros/grupo-f/jornada-uno`);
        const dbRef1 = ref(db, `horario-encuentros/grupo-f/jornada-dos`);
        const dbRef2 = ref(db, `horario-encuentros/grupo-f/jornada-tres`);
        console.log(dbRef);
        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData: records });
        });
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
    }
    render() {

        return (
            <div>                
                <Table className="container w-75" bordered striped>
                    <thead>
                        <tr>
                            <th>Fecha y Hora</th>
                            <th>Equipos</th>
                            <th>Estadio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
                                    <td>{row.data.equipoUno} vrs {row.data.equipoDos}</td>
                                    <td>{row.data.estadio}</td>

                                </tr>
                            )
                        })}
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
                    </tbody>
                </Table>
            </div>
        )
    }
}
export class HorarioG extends React.Component {


    constructor() {
        super();
        this.state = {
            tableData: [],
            tableData1: [],
            tableData2: []
            
        }
    }

    componentDidMount() {
        const dbRef = ref(db, `horario-encuentros/grupo-g/jornada-uno`);
        const dbRef1 = ref(db, `horario-encuentros/grupo-g/jornada-dos`);
        const dbRef2 = ref(db, `horario-encuentros/grupo-g/jornada-tres`);
        console.log(dbRef);
        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData: records });
        });
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
    }
    render() {

        return (
            <div>                
                <Table className="container w-75" bordered striped>
                    <thead>
                        <tr>
                            <th>Fecha y Hora</th>
                            <th>Equipos</th>
                            <th>Estadio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
                                    <td>{row.data.equipoUno} vrs {row.data.equipoDos}</td>
                                    <td>{row.data.estadio}</td>

                                </tr>
                            )
                        })}
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
                    </tbody>
                </Table>
            </div>
        )
    }
}
export class HorarioH extends React.Component {


    constructor() {
        super();
        this.state = {
            tableData: [],
            tableData1: [],
            tableData2: []
            
        }
    }

    componentDidMount() {
        const dbRef = ref(db, `horario-encuentros/grupo-h/jornada-uno`);
        const dbRef1 = ref(db, `horario-encuentros/grupo-h/jornada-dos`);
        const dbRef2 = ref(db, `horario-encuentros/grupo-h/jornada-tres`);
        console.log(dbRef);
        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData: records });
        });
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
    }
    render() {

        return (
            <div>                
                <Table className="container w-75" bordered striped>
                    <thead>
                        <tr>
                            <th>Fecha y Hora</th>
                            <th>Equipos</th>
                            <th>Estadio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((row, index) => {
                            return (
                                <tr>
                                    <td>{row.data.fecha} - {row.data.hora}</td>
                                    <td>{row.data.equipoUno} vrs {row.data.equipoDos}</td>
                                    <td>{row.data.estadio}</td>

                                </tr>
                            )
                        })}
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
                    </tbody>
                </Table>
            </div>
        )
    }
}