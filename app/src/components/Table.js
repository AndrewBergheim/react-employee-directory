
import React from 'react';
import "./styles.css"
import employees from "./employees" 

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {tableData: employees.meetsCriteria, searchVal: 10}
        }

        createTableRows(user){
            let data = this.state.tableData;
            //console.log(data)
            if (user){
                return data.map((user) => {
                    const {age, name, title, salary} = user
                    const key = user.name
                    return (
                    <tr key = {key}>
                        <td>{age}</td>
                        <td>{name}</td>
                        <td>{title}</td>
                        <td>{salary}</td>
                    </tr>
                    )
                })
            }
            else{return}
        }
/*
        stateChange(){
            this.setState((val) => ({
                tableData: val
            }))
        }
*/
    render() {
    return (  <div id = "tableWrapper">
            <div id = "search">
                <input id = "searchbar" type = "text" onKeyUp= {(event) => {this.setState({searchVal: document.getElementById("searchbar").value})}}></input>
                <div className = "buttonsDiv"> 
                
    <button onClick = {() => (this.setState({tableData: (employees.SalaryUnder(this.state.searchVal))}))}>Filter Out Employees Making Less than {this.state.searchVal}</button>
    <button onClick = {() => (this.setState({tableData: (employees.SalaryOver(this.state.searchVal))}))}>Filter Out Employees Making More than {this.state.searchVal}</button>
                </div>
                <div className = "buttonsDiv"> 
                    <button onClick = {() => (this.setState({tableData: employees.sortByAge()}))}>Sort By Age (Youngest to Oldest)</button>
                    <button onClick = {() => (this.setState({tableData: employees.sortByAgeRev()}))}>Sort By Age (Oldest to Youngest)</button>
                </div>
                <div className = "buttonsDiv"> 
                    <button onClick = {() => (this.setState({tableData: employees.sortByName()}))}>Sort By Name (A to Z)</button>
                    <button onClick = {() => (this.setState({tableData: employees.sortByNameRev()}))}>Sort By Name (Z to A)</button>
                </div>
            </div>
            <div id = "tableDiv">
                <table id = "table">
                    <tbody>
                        <tr className = "row">
                            <th>Age</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Salary</th>
                        </tr>
                        {this.createTableRows(this.state.tableData)}
                    </tbody>
                </table>
            </div>
            <div>

            </div>
        </div>)
    }
}




export default Table