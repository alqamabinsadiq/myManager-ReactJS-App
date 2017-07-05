import React, { PropTypes } from 'react';

// components
import TextField from 'material-ui/TextField';
// Styles
// const contentBackgroundColor = '#BCBDC0';
const titleBackgroundColor = '#172831';

export const styles = {
  mainDialog: {
    borderRadius: 18
  },
  content: {
    // backgroundColor: contentBackgroundColor,
    maxWidth: 500
  },
  title: {
    textAlign: 'center',
    backgroundColor: titleBackgroundColor,
    color: 'white',
    fontWeight: 600,
    letterSpacing: 0.5,
    padding: 15,
    marginBottom: 5,
    borderRadius: 2,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  }
};

// Material UI TextField
export const renderTextField = ({ input, type, label, meta: { touched, error }, ...custom }) => {
  return (
    <TextField
      style={{ width: '100%' }}
      type={type}
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  );
};

renderTextField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  type: PropTypes.string
};