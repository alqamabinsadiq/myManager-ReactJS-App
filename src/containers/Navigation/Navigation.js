import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

//Components
import PublicNavigation from '../../components/Navigation/PublicNavigation';
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
        this.renderElement = this._renderElement.bind(this);
    }

    _renderElement() {
        if (localStorage.getItem('user')) {
            return <UserAvatar />;
        }
        else {
            return <PublicNavigation />;
        }
    }
    render() {
        return (
            <AppBar title="myManager"
                style={myStyles.headerStyle}
                iconElementRight={this.renderElement()} />
        );
    }
}

export default Navigation;