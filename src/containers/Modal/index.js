import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from './LoginFormContainer';
import SignUpFormContainer from './SignUpFormContainer';
import EditNoteModalContainer from './EditNoteModalContainer';
class Modal extends Component {

    constructor(props) {
        super(props);
        this.renderModal = this._renderModal.bind(this);
    }

    _renderModal() {
        switch (this.props.template) {
            // case 'signup':
               // return <SignupFormContainer />;
             case 'login':
                return <LoginFormContainer />;
             case 'register':
                return <SignUpFormContainer />;
            case 'editNote':
                return <EditNoteModalContainer />;
            default: {
                return null;
            }
        }
    }
    render() {
        if (!this.props.template) {
            return null;
        }
        return (
            <div>
                {this.renderModal()}
            </div>
        );
    }
}

Modal.propTypes = {
    template: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        template: state.modal.template
    };
};

export default connect(mapStateToProps)(Modal);