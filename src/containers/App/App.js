import React, { Component } from 'react';
import firebase from 'firebase';
// Components
import Navigation from '../Navigation/Navigation';
import LandingComponent from '../../components/Landing/Landing';
import ModalContainer from '../Modal';
import NotificationContainer from '../Notification/NotificationContainer';

// Main App Component
class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyCv1YcLZxtQLZErsuH0n7bMOfQMZMCFiyw",
            authDomain: "mymanager-bec86.firebaseapp.com",
            databaseURL: "https://mymanager-bec86.firebaseio.com",
            projectId: "mymanager-bec86",
            storageBucket: "mymanager-bec86.appspot.com",
            messagingSenderId: "485887851803"
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <div>
                <Navigation />
                <ModalContainer />
                <NotificationContainer />
                <div className="mainContentBody">
                    <LandingComponent />
                </div>
            </div>
        );
    }
}

export default App;
