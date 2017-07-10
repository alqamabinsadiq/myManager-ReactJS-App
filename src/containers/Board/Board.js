import React, { Component, PropTypes } from 'react';
import firebase from 'firebase';
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
            notes: [],
            user: null
        };
    }
    componentWillMount() {
        // getting current user from firebase.
        if (firebase.auth().currentUser) {
            console.log(firebase.auth().currentUser);
        }
        else {
            // Initializing Firebase
            const config = {
                apiKey: "AIzaSyCv1YcLZxtQLZErsuH0n7bMOfQMZMCFiyw",
                authDomain: "mymanager-bec86.firebaseapp.com",
                databaseURL: "https://mymanager-bec86.firebaseio.com",
                projectId: "mymanager-bec86",
                storageBucket: "mymanager-bec86.appspot.com",
                messagingSenderId: "485887851803"
            };
            firebase.initializeApp(config);
        }
    }
    componentDidMount() {
        // getting current user from firebase.
        let user = firebase.auth().currentUser;
        console.log(user);
        //Database reference
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
    // Add a note directly to firebase database.
    _addNote(text) {
        firebase.database().ref('users').child(this.state.user.uid).child('notes').push({
            note: text,
            title: "Enter a title"
        });
        // let arr = this.state.notes;
        // arr.push({
        //     id: this.nextId(),
        //     note: text,
        //     title: title
        // });
        // this.setState({ notes: arr });
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
                <FloatingActionButton className="notesBoard-plusButtonContainer" onClick={() => this.addNote('New Text')} >
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