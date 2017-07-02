import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from './LoginFormContainer';
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

const mapStateToProps = (state) => {
    return {
        template: state.modal.template
    };
};

export default connect(mapStateToProps)(Modal);