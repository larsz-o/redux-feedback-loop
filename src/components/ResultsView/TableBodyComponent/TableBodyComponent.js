import React, {Component} from 'react';
import {connect} from 'react-redux';

class TableBodyComponent extends Component {
render(){
    return (
        <tbody>
            {this.props.reduxStore.mealFeedbackHistory.map((dinner, i)=>{
                return (
                <tr key={i}>
                    <td>{dinner.meal}</td>
                    <td>{dinner.taste}</td>
                    <td>{dinner.texture}</td>
                    <td>{dinner.creativity}</td>
                    <td>{dinner.nutrition}</td>
                    <td>{dinner.comments}</td>
                    <td>Rating</td>
                    {/*  need to calculate with SQL query */}
                    <td>Delete</td>
                    {/* - fill in with icon that clicks to delete the entry in the database then re-runs redux store dispatch */}
                </tr> 
                );
            })}  
        </tbody>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TableBodyComponent); 