import React, { Component, PropTypes } from 'react';
import Draggable from 'react-draggable';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete-forever';
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
            <Draggable bounds="parent">
                <div className="note handle"
                    style={this.style}>
                    <div id="contentTitle">
                        <div> Title </div>
                        <div>
                            <IconButton>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                            </IconButton>
                            <IconButton>
                                <ActionDelete />
                            </IconButton>
                        </div>
                    </div>
                    <p>{this.props.children}</p>
                </div>
            </Draggable>
        );
    }
}

Note.propTypes = {
    children: PropTypes.array
};

export default Note;