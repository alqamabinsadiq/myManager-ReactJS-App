import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

//Components
import PublicNavigation from '../../components/Navigation/PublicNavigation';
class Navigation extends Component {
    constructor(props){
        super(props);
        this.state=({
            logged: false
        });
    }
    render() {
        return(
            <AppBar title="myManager"
            iconElementRight={<PublicNavigation />}/>
        );
    }
}

export default Navigation;