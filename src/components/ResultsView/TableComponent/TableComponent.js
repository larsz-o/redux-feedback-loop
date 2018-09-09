import React, {Component} from 'react';
import {connect} from 'react-redux';
import TableBodyComponent from '../TableBodyComponent/TableBodyComponent.js';
import {Table, TableHead, TableCell, TableRow} from '@material-ui/core'; 

class TableComponent extends Component {
    render(){
        return(
        <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Meal</TableCell>
                        <TableCell>Taste</TableCell>
                        <TableCell>Texture</TableCell>
                        <TableCell>Creativity</TableCell>
                        <TableCell>Nutrition</TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell>Overall Rating</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
               <TableBodyComponent/>
            </Table>
        );
    }
}

export default connect()(TableComponent); 


        