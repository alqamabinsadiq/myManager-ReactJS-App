import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class PublicNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FlatButton label="Login" className="NaigationButton"
                    style={{ color: "white", fontWeight: 600 }} />
                <FlatButton label="Register"
                    style={{ color: "white", fontWeight: 600 }} />

            </div>
        );
    }
}

export default PublicNavigation;