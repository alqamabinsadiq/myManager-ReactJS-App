import React, { Component, PropTypes } from 'react';
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
        
    }
    render() {
        return (
            <div>
                <Navigation />
                <ModalContainer />
                <NotificationContainer />
                <div className="mainContentBody">
                    {this.props.children ? this.props.children : <LandingComponent />} 
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default App;
