import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
class Navigation extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <AppBar title="myManager"/>
        );
    }
}

export default Navigation;