import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import LandingComponent from '../../components/Landing/Landing';
import ModalContainer from '../Modal';
import NotificationContainer from '../Notification/NotificationContainer';

class App extends Component {
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
