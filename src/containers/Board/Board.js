import React, { Component } from 'react';

// material-ui components
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Note from '../../components/Note/Note';

class Board extends Component {
    render() {
        return (
            <div className="notesBoard">
                <Note> Hey there how are you ?</Note>
                <FloatingActionButton className="notesBoard-plusButtonContainer">
                    <ContentAdd className="notesBoard-plusButton"/>
                </FloatingActionButton>
            </div>
        );
    }
}
export default Board;