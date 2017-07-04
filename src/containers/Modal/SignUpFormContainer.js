import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { closeModal } from '../../actions/modal/index';
import { registerUser } from '../../actions/user';
// Components
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

// Redux Form Dependencies
import { Field, reduxForm } from 'redux-form';

import { styles, renderTextField } from './imports';

class SignupFormContainer extends Component {
    constructor(props) {
        super(props);
        this.onCloseHandler = this._onCloseHandler.bind(this);
        this.state = {
            isOpened: true
        };
    }

    _onCloseHandler() {
        this.setState({
            isOpened: false
        });
        this.props.closeModal();
    }

    submitForm(values) {
          return new Promise(resolve => {
          return this.props.registerUser(values, resolve);
     });
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <Dialog
                title="Register Today"
                modal={false}
                open={this.state.isOpened}
                onRequestClose={this.onCloseHandler}
                titleStyle={styles.title}
                contentStyle={styles.content}
            >
                <div style={{ flex: 1 }}>
                    <form onSubmit={handleSubmit(this.submitForm.bind(this))} className="formContainer">
                        <div className="formInputs">
                            <Field name="email" component={renderTextField} label="Email" type="text" />
                            <Field name="password" component={renderTextField} label="Password" type="password" />
                            <Field name="confirmPassword" component={renderTextField} label="Confirm Password" type="password" />
                        </div>
                        <div className="formButtonContainer">
                            <RaisedButton
                                disabled={pristine || submitting}
                                type="submit"
                                label="Register"
                                backgroundColor="#00AEEF"
                                className="formSubmitButton"
                            />
                        </div>
                    </form>
                </div>
            </Dialog>
        );
    }
}

SignupFormContainer.propTypes = {
    closeModal: PropTypes.func,
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    registerUser: PropTypes.func
};

const validate = values => {
    const errors = {};
    const requiredFields = ['email', 'password', 'confirmPassword'];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    if (values.confirmPassword && (values.password !== values.confirmPassword)) {
        errors.confirmPassword = 'Password donot match';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeModal,
        registerUser
    }, dispatch);
};
export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'SignupForm',
    validate
})(SignupFormContainer));
