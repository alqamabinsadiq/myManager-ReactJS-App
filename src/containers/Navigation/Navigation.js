import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

//Components
// import PublicNavigation from '../../components/Navigation/PublicNavigation';
import UserAvatar from '../../components/User/UserAvatar';
const myStyles = {
    headerStyle: {
        backgroundColor: 'rgba(0, 43, 49, 0.57)',
        position: 'fixed'
    }
};

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            logged: false
        });
    }
    render() {
        return (
            <AppBar title="myManager"
                style={myStyles.headerStyle}
                iconElementRight={<UserAvatar />} />
        );
    }
}

export default Navigation;