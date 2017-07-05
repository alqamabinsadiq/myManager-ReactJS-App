import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
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
        if (sessionStorage.getItem('user')) {
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

Navigation.propTypes = {
    user: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        user: state.user.user ? state.user.user : null
    };
};

export default connect(mapStateToProps)(Navigation);