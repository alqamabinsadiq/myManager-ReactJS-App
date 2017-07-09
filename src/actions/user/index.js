// import { replace } from 'react-router-redux';
import { closeModal } from '../modal/index';
import Notifications from 'react-notification-system-redux';
import { focus, change } from 'redux-form';
import { push } from 'react-router-redux';
import firebase from 'firebase';

export const actions = {
  SET_USER_TOKEN: 'SET_USER_TOKEN',
  LOGOUT_USER: 'LOGOUT_USER'
};

export const setUserToken = (user) => ({
  type: actions.SET_USER_TOKEN,
  data: user
});

export const logoutUser = () => ({
  type: actions.LOGOUT_USER
});

// Register User action
export const registerUser = ({ email, password }, resolve) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        sessionStorage.setItem('user', user.uid);
        dispatch(setUserToken(user));
        dispatch(push('/board'));
        setTimeout(() => {
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

// Login Action
export const login = ({ email, password }, resolve) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          dispatch(setUserToken(user));
          sessionStorage.setItem('user', user.uid);
          dispatch(push('/board'));
          dispatch(closeModal());
          resolve();
        } else {
          const notificationOpts = {
            title: 'Oops! Something went wrong.',
            message: 'Internet problem maybe?',
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
        dispatch(change('LoginForm', 'email', ''));
        dispatch(change('LoginForm', 'password', ''));
        dispatch(focus('LoginForm', 'password'));
        dispatch(Notifications.error(notificationOpts));
        resolve();
      });
  };
};

// logout action
export const logout = () => {
  return (dispatch) => {
    firebase.auth().signOut()
      .then(() => {
        sessionStorage.removeItem('user');
        dispatch(logoutUser);
        // Forcing reload to refresh navbar
        window.location = '/';
      })
      .catch((error) => {
        const notificationOpts = {
          title: 'Oops! Something went wrong',
          message: error.message,
          position: 'tr',
          autoDismiss: 5
        };
        dispatch(Notifications.error(notificationOpts));
      });
  };
};