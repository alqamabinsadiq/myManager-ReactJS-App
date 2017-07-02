import React, { PropTypes } from 'react';

// components
import TextField from 'material-ui/TextField';
// Styles
const contentBackgroundColor = '#BCBDC0';
const titleBackgroundColor = '#00AEEF';

export const styles = {
  content: {
    backgroundColor: contentBackgroundColor,
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
    borderRadius: 2
  }
};


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