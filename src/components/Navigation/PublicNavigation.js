import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal';

const styles = {
  title: {
    color: 'white',
    fontWeight: 600,
    letterSpacing: 0.5,
  }
};
class PublicNavigation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <FlatButton label="Login" className="NaigationButton"
                    style={styles.title}
                    onTouchTap={() => {
                        this.props.openModal("login");
                    }} />
                <FlatButton label="Register"
                    style={styles.title} 
                    onTouchTap={() => {
                        this.props.openModal("register");
                    }} />

            </div>
        );
    }
}

PublicNavigation.propTypes = {
    openModal: PropTypes.func
};

export default connect(null, { openModal })(PublicNavigation);