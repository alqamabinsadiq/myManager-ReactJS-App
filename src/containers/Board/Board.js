import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// material-ui components
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import Note from '../../components/Note/Note';
import { getNotes, deleteNote, addNote } from '../../actions/notes';

class Board extends Component {
    constructor(props) {
        super(props);
        this.addNote = this._addNote.bind(this);
        this.eachNote = this._eachNote.bind(this);
        this.remove = this._remove.bind(this);
        this.user = JSON.parse(localStorage.getItem('user'));
        this.state = {
            notes: [],
            user: null,
            loading: true
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
        if(!this.props.allNotes){
            this.setState({loading: false});
        }

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.allNotes !== this.props.allNotes) {
            let notesArray = nextProps.allNotes;
                this.setState({
                    loading: false,
                    notes: notesArray
                });
        }
    }

    // Removes a note.
    _remove(i) {
        let notesArray = this.state.notes;
        this.props.deleteNote(notesArray, i);
        // firebase.database().ref('users').child(this.user.uid).child('notes').child((notesArray.getIn([i,"id"]))).remove();
        // const newNotesArray = notesArray.delete(i);
        // this.setState({ notes: newNotesArray });
    }

    // Add a note directly to firebase database.
    _addNote(text) {
        this.props.addNote(text);
        // firebase.database().ref('users').child(this.user.uid).child('notes').push({
        //     note: text,
        //     title: "Enter a title"
        // });
    }

    _eachNote(note,i) {
        return (
            <Note key={note.get("id")}
                index={i}
                onRemove={this.remove}
                title={note.get("title")}
            >{note.get("text")}</Note>
        );
    }

    render() {
        if (this.state.loading)
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
                        {this.state.notes ? this.state.notes.map(this.eachNote): null}
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
    allNotes: PropTypes.object,
    deleteNote: PropTypes.func,
    addNote: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        allNotes: state.notes.get("allNotes")
    };
};

export default connect(mapStateToProps, { getNotes, deleteNote, addNote })(Board);