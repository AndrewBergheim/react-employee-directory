
import React from 'react';
import "./styles.css"
import employees from "./employees" 
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {tableData: employees.meetsCriteria}
        }
    render() {
    return (  <div id = "tableWrapper">
            <div id = "search">
                <input id = "searchbar"></input>
                <div class = "buttonsDiv"> 
                    <button>Filter Employees Making Less</button>
                    <button>Filter Employees Making More</button>
                </div>
                <div class = "buttonsDiv"> 
                    <button>Sort By Age (Youngest to Oldest)</button>
                    <button>Sort By Age (Oldest to Youngest)</button>
                </div>
                <div class = "buttonsDiv"> 
                    <button>Sort By Name (A to Z)</button>
                    <button>Sort By Name (Z to A)</button>
                </div>
            </div>
            <div id = "tableDiv">
                <table id = "table">
                    <tr class = "row">
                        <th>Age</th>
                        <th>Name</th>
                        <th>Title</th>
                    </tr>
                </table>
            </div>
            <div>

            </div>
        </div>)
    }
}




export default Table