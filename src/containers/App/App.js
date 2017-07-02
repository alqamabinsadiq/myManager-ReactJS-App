import React from 'react';
import Navigation from '../Navigation/Navigation';
import Landing from '../../components/Landing/Landing';
import ModalContainer from '../Modal';
const App = () => {
    return (
        <div>
            <Navigation />
            <ModalContainer />
            <div className="mainContentBody">
                <Landing />
            </div>
        </div>
    );
};

export default App;
