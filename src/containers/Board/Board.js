import React, { Component, PropTypes } from 'react';
import firebase from 'firebase';
// material-ui components
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import Note from '../../components/Note/Note';

class Board extends Component {
    constructor(props) {
        super(props);
        this.addNote = this._addNote.bind(this);
        this.eachNote = this._eachNote.bind(this);
        this.remove = this._remove.bind(this);
        this.user = JSON.parse(localStorage.getItem('user'));
        this.state = {
            notes: [],
            user: null
        };
    }

    componentDidMount() {
        // Getting user from localStorage.
        let user = JSON.parse(localStorage.getItem('user'));

        // Database reference
        const dbRef = firebase.database().ref('users').child(user.uid).child('notes');

        // Getting notes from firebase database.
        dbRef.on('child_added', snap => {
            let dbNotes = [];
            dbNotes = snap.val();
            let notesArray = this.createArray(snap.key.toString(), dbNotes.note, dbNotes.title);

            this.setState({
                notes: notesArray
            });

        });

    }


    createArray(id, text, title) {
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

    // Removes a note.
    _remove(i) {
        let notesArray = this.state.notes;
        firebase.database().ref('users').child(this.user.uid).child('notes').child(notesArray[i].id).remove();
        notesArray.splice(i, 1);
        this.setState({ notes: notesArray });
    }

    // Add a note directly to firebase database.
    _addNote(text) {
        firebase.database().ref('users').child(this.user.uid).child('notes').push({
            note: text,
            title: "Enter a title"
        });
    }

    _eachNote(note, i) {
        return (
            <Note key={note.id}
                index={i}
                onChange={this.update}
                onRemove={this.remove}
                title={note.title}
            >{note.note}</Note>
        );
    }

    render() {
        if (this.state.notes === null)
            return (
                <div className="notesBoard">
                    <div className="notesContainer">
                        <CircularProgress />
                    </div>
                </div>
            );
        else {
            return (
                <div className="notesBoard">
                    <div className="notesContainer">
                        {this.state.notes.map(this.eachNote)}
                    </div>
                    <FloatingActionButton className="notesBoard-plusButtonContainer" onClick={() => this.addNote('New Text')} >
                        <ContentAdd className="notesBoard-plusButton" />
                    </FloatingActionButton>
                </div>
            );
        }
    }
}
Board.propTypes = {
    setUserToken: PropTypes.func,
    getNotes: PropTypes.func,
    allNotes: PropTypes.array
};

export default Board;