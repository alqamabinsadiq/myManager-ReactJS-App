import React, { Component, PropTypes } from 'react';
// material-ui components
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Note from '../../components/Note/Note';

class Board extends Component {
    constructor(props) {
        super(props);
        this.addNote = this._addNote.bind(this);
        this.eachNote = this._eachNote.bind(this);
        this.state = {
            notes: []
        };
    }


    createArray (id, text, title) {
        let notesArray = this.state.notes;
        notesArray.push({
            id,
            text,
            title
        });
        return notesArray;

    }

    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    _addNote(text, title) {
        let arr = this.state.notes;
        arr.push({
            id: this.nextId(),
            note: text,
            title: title
        });
        this.setState({ notes: arr });
    }

    _eachNote(note, i) {
        return (
            <Note key={note.id}
                index={i}
                title={note.title}
            > {note.note} </Note>
        );
    }

    render() {
        return (
            <div className="notesBoard">
                <div className="notesContainer">
                {this.state.notes.map(this.eachNote)}
                </div>
                <FloatingActionButton className="notesBoard-plusButtonContainer" onClick={() => this.addNote('New Text', 'New Title')} >
                    <ContentAdd className="notesBoard-plusButton" />
                </FloatingActionButton>
            </div>
        );
    }
}
Board.propTypes = {
    setUserToken: PropTypes.func
};
export default Board;