import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal';
class PublicNavigation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <FlatButton label="Login" className="NaigationButton"
                    style={{ color: "white", fontWeight: 600 }}
                    onTouchTap={() => {
                        this.props.openModal("login");
                    }} />
                <FlatButton label="Register"
                    style={{ color: "white", fontWeight: 600 }}
                    onTouchTap={() => {
                        this.props.openModal("register");
                    }} />

            </div>
        );
    }
}

const mapStateToProps = () => {
    return {
    };
};

PublicNavigation.propTypes = {
    openModal: PropTypes.func
};

export default connect(mapStateToProps, { openModal })(PublicNavigation);