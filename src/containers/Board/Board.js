import React, { Component } from 'react';

// material-ui components
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class Board extends Component {
    render() {
        return (
            <div className="notesBoard">
                <FloatingActionButton>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}
export default Board;