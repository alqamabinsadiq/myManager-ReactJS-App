import React from 'react';
import Navigation from '../Navigation/Navigation';
import Landing from '../../components/Landing/Landing';

const App = () => {
    return (
        <div>
            <Navigation />
            <div className="mainContentBody">
                <Landing />
            </div>
        </div>
    );
};

export default App;
