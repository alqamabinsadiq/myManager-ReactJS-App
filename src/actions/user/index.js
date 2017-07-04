// import { replace } from 'react-router-redux';
import { closeModal } from '../modal/index';
import Notifications from 'react-notification-system-redux';
import { focus, change } from 'redux-form';
import firebase from 'firebase';

export const actions = {
  SET_USER_TOKEN: 'SET_USER_TOKEN'
};

export const loginUserSuccess = (user) => ({
  type: actions.SET_USER_TOKEN,
  data: user
});

export const registerUser = ({email, password}, resolve) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(({ data: user }) => {
        // sessionStorage.setItem('userId', user.id);
        // sessionStorage.setItem('token', user.token);
        dispatch(loginUserSuccess(user));
        setTimeout(() => {
          window.location = '/';
          dispatch(closeModal());
          resolve();
        }, 500);
      })
      .catch(() => {
        const notificationOpts = {
          title: 'Oops! Something went wrong.',
          message: 'internet problem maybe?',
          position: 'tr',
          autoDismiss: 5
        };
        dispatch(Notifications.error(notificationOpts));
        resolve();
      });
  };
};
export const login = ({ email, password }, resolve) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          dispatch(loginUserSuccess(user));
          // sessionStorage.setItem('userId', user.id);
          // sessionStorage.setItem('token', user.token);
          // dispatch(setUserToken(user.token));
          // Forcing reload to refresh navbar
          // window.location = '/';
          resolve();
        } else {
          const notificationOpts = {
            title: 'Oops! Something went wrong.',
            message: user.message,
            position: 'tr',
            autoDismiss: 5
          };
          dispatch(change('LoginForm', 'password', ''));
          dispatch(focus('LoginForm', 'password'));
          dispatch(Notifications.error(notificationOpts));
          resolve();
        }
      })
      .catch(() => {
        const notificationOpts = {
          title: 'Oops! User not found.',
          message: 'please register yourself',
          position: 'tr',
          autoDismiss: 5
        };
        dispatch(change('LoginForm','email', ''));
        dispatch(change('LoginForm', 'password', ''));
        dispatch(focus('LoginForm', 'password'));
        dispatch(Notifications.error(notificationOpts));
        resolve();
      });
  };
};

/*
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch((error) => {
            console.log(error.message);
            loginUserFail(dispatch);
          });
      });
  };
}; */