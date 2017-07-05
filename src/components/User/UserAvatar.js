import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// Actions
// import { logout, route } from '../../actions/user';
// Components
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Logout from 'material-ui/svg-icons/action/exit-to-app';
import Profile from 'material-ui/svg-icons/social/person'; 
import UserPicture from '../../styles/images/user.jpg';
// custom styles
const styles = {
  anchor: {
    horizontal: 'left',
    vertical: 'bottom'
  },
  target: {
    horizontal: 'right',
    vertical: 'top'
  },
  noPadding: {
    padding: 0
  }
};

class UserAvatar extends Component {
    constructor(props) {
        super(props);
        this.iconButtonElement = this._iconButtonElement.bind(this); 
    }

    _iconButtonElement() {
    return (
      <IconButton style={styles.noPadding}>
        <Avatar src={UserPicture} />
      </IconButton>
    );
  }
    render() {
        return(
            <IconMenu
        iconButtonElement={this.iconButtonElement()}
        anchorOrigin={styles.anchor}
        targetOrigin={styles.target}
      >
        <MenuItem
          // onClick={this.openProfile}
          leftIcon={
            <Profile className={styles.icon} hoverColor="#3f4f62" color="#ccc" />
          }
          primaryText="Profile"
        />
        <MenuItem
          // onClick={this.logout}
          leftIcon={
            <Logout className={styles.icon} hoverColor="#3f4f62" color="#ccc" />
          }
          primaryText="Sign out"
        />
      </IconMenu>
        );
    }
}
export default UserAvatar;
