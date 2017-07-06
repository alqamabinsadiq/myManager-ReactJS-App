import React, { Component, PropTypes } from 'react';

class Note extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.style = {
            right: this.RandowBetween(0, window.innerWidth - 150) + 'px',
            top: this.RandowBetween(0, window.innerHeight - 150) + 'px',
            transform: 'rotate(' + this.RandowBetween(-15, 15) + 'deg)'
        };
    }

    RandowBetween(min, max) {
        return (min + Math.ceil(Math.random() * max));
    }

    render() {
        return (
            <div className="note"
                style={this.style}>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

Note.propTypes = {
    children: PropTypes.string
};

export default Note;