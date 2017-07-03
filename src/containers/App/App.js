import React from 'react';
import Navigation from '../Navigation/Navigation';
import Landing from '../../components/Landing/Landing';
import ModalContainer from '../Modal';
import NotificationContainer from '../Notification/NotificationContainer';
const App = () => {
    return (
        <div>
            <Navigation />
            <ModalContainer />
            <NotificationContainer />
            <div className="mainContentBody">
                <Landing />
            </div>
        </div>
    );
};

export default App;
