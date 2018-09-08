import React, {Component} from 'react';
import {connect} from 'react-redux';
import TableBodyComponent from '../TableBodyComponent/TableBodyComponent.js';

class TableComponent extends Component {
    render(){
        return(
        <table>
                <thead>
                    <tr>
                        <th>Meal</th>
                        <th>Taste</th>
                        <th>Texture</th>
                        <th>Creativity</th>
                        <th>Nutrition</th>
                        <th>Comments</th>
                        <th>Overall Average Rating</th>
                        <th>Delete</th>
                    </tr>
                </thead>
               <TableBodyComponent/>
            </table>
        );
    }
}

export default connect()(TableComponent); 


        