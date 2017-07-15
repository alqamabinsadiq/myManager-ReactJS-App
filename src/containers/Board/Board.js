import React, { Component, PropTypes } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
// material-ui components
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import Note from '../../components/Note/Note';
import { getNotes } from '../../actions/notes';

let individualNote = [];

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
    componentWillMount() {
        new Promise((resolve) => {
            this.props.getNotes();
            resolve();
        }).then(
            this.setState({
                notes: this.props.allNotes
            })
        );
        // this.props.getNotes();
    }
    componentDidMount() {
        // // Getting user from localStorage.
        // let user = JSON.parse(localStorage.getItem('user'));

        // // Database reference
        // const dbRef = firebase.database().ref('users').child(user.uid).child('notes');

        // // Getting notes from firebase database.
        // dbRef.on('child_added', snap => {
        //     let dbNotes = [];
        //     dbNotes = snap.val();
        //     let notesArray = this.createArray(snap.key.toString(), dbNotes.note, dbNotes.title);

        //     this.setState({
        //         notes: notesArray
        //     });

        // });

    }
    componentWillReceiveProps(nextProps) {
        var that = this;
        console.log(nextProps);
        if (nextProps.allNotes !== this.props.allNotes) {
            let notesArray = nextProps.allNotes;
            setTimeout( () => {
                that.setState({
                    notes: notesArray
                });
            },20 );
        }
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

    _eachNote() {
        if(this.state.notes){
        this.state.notes.map((note, i) => {
            individualNote.push(
                 <Note className="animated fadeIn" key={note.get("id")}
                index={i}
                title={note.get("title")}
                onRemove={this.remove}
            > {note.get("note")} </Note>
          );  
        });
        }
        return individualNote;
    }

    render() {
        console.log(this.state.notes.getIn([0, "id"]));
        if (!this.props.allNotes)
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
                        {this.eachNote()}
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
    allNotes: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        allNotes: state.notes.get("allNotes")
    };
};

export default connect(mapStateToProps, { getNotes })(Board);