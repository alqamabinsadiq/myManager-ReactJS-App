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
import TextField from 'material-ui/TextField';
// Actions
import { closeModal, openModal } from '../../actions/modal/index';


class LoginFormContainer extends Component {
    constructor(props) {
        super(props);
        this.onCloseHandler = this._onCloseHandler.bind(this);
        this.renderTextField = this._renderTextField.bind(this);
        this.state = {
            isOpened: true
        };
    }
    componentWillMount() {
        console.log(this.props.note);
    }
    _onCloseHandler() {
        this.setState({
            isOpened: false
        });
        this.props.closeModal();
    }
    submitForm(values) {
        console.log(values);
    }
    _renderTextField({value}) {
        return(
        <TextField
            style={{ width: '100%' }}
            type="text"
            hintText="Title"
            floatingLabelText="Title"
            value={value}
        />);
    }
    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <Dialog
                title="Edit Note"
                modal={false}
                open={this.state.isOpened}
                onRequestClose={this.onCloseHandler}
                titleStyle={styles.title}
                contentStyle={styles.content}
                className="DialogCustomStyle"
            >
                <div style={{ flex: 1 }}>
                    <form onSubmit={handleSubmit(this.submitForm.bind(this))} className="formContainer">
                        <div className="formInputs">
                            <Field name="title" component={this.renderTextField} label="Title" type="text" value={this.props.title} />
                            <Field name="note" component={renderTextField} label="Note" type="text" value={this.props.note} />
                        </div>
                        <div className="formButtonContainer">
                            <RaisedButton
                                disabled={pristine || submitting}
                                type="submit"
                                label="Save"
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
    login: PropTypes.func,
    note: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    index: PropTypes.number
};

// Here is the validation of Edit note form.
const validate = values => {
    const errors = {};
    const requiredFields = ['title'];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    return errors;
};

const mapStateToProps = (state) => {
    return {
        note: state.notes.currentNote.text,
        id: state.notes.currentNote.id,
        title: state.notes.currentNote.title,
        index: state.notes.currentNote.index
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeModal,
        openModal
    }, dispatch);
};

export default reduxForm({
    form: 'EditNoteForm',
    validate
})(connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer));