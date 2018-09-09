import React, {Component} from 'react'; 
import TableComponent from './TableComponent/TableComponent.js'; 
import {connect} from 'react-redux'; 

class ResultsView extends Component {
    render(){
        return(
            <div>
            <TableComponent/>
            </div>
        );
    }
}
export default ResultsView; 