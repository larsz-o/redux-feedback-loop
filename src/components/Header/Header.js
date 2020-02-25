import React from 'react';
import { Button } from '@material-ui/core'
import { connect } from 'react-redux';

class Header extends React.Component{

    render(){
        return (
            <header className={`App-header App-header-${this.props.className}`}>
                <div className="flex-box flex-evenly">
                <div className="flex-col column-4">
                    <div className="flex-col flex-center space">
                    <h1 className="header-text animate-pop-in">Peer Critique Practice</h1>
                    {this.props.home && <Button className="animate-pop-in" onClick={()=>this.props.dispatch({type:'NAV_TO_FEEDBACK'})} variant="contained" color="secondary">Start</Button>}
                    </div>
                </div>
                </div>
            </header>
        )
    }

}
const mapStateToProps = state => ({
    home: state.home
})

export default connect(mapStateToProps)(Header);