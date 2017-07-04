import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Components
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
// Redux Form Dependencies
import { Field, reduxForm } from 'redux-form';
//Styles
import { styles, renderTextField } from './imports';

// Actions
import { closeModal, openModal } from '../../actions/modal/index';
import { login } from '../../actions/user';

class LoginFormContainer extends Component {
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
        return new Promise((resolve) => {
      return this.props.login(values, resolve);
    });
    }
    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <Dialog
                title="Sign in to your Account"
                // login={this.props.login}
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
                        </div>
                        <div className="formButtonContainer">
                            <RaisedButton
                                disabled={pristine || submitting}
                                type="submit"
                                label="Login"
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

LoginFormContainer.propTypes = {
    closeModal: PropTypes.func,
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    login: PropTypes.func
};

// Here is the validation of login form.
const validate = values => {
    const errors = {};
    const requiredFields = ['email', 'password'];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeModal,
        login,
        openModal
    }, dispatch);
};

export default reduxForm({
    form: 'LoginForm',
    validate
})(connect(null, mapDispatchToProps)(LoginFormContainer));