import firebase from 'firebase';

// action types
export const actions = {
    SET_CURRENT_NOTE: "SET_CURRENT_NOTE",
    GET_ALL_NOTES: "GET_ALL_NOTES"
};

let notes = [];

export const createArray = (id, text, title) => {
    let notesArray = notes;
    notesArray.push({
        id,
        text,
        title
    });
    return notesArray;
};

export const setNotes = (notesArray) => ({
    type: actions.GET_ALL_NOTES,
    data: notesArray
});

export const getNotes = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    // Database reference
    const dbRef = firebase.database().ref('users').child(user.uid).child('notes');
    return (dispatch) => {
        // Getting notes from firebase database.
        dbRef.on('child_added', snap => {
            let dbNotes = [];
            dbNotes = snap.val();
            let notesArray = createArray(snap.key.toString(), dbNotes.note, dbNotes.title);
            dispatch(setNotes(notesArray));
        });
    };
};

// Delete note action.
export const deleteNote = (notesArray, i) => {
    return (dispatch) => {
        let user = JSON.parse(localStorage.getItem('user'));

        // Removing a note from board.
        firebase.database().ref('users').child(user.uid).child('notes').child((notesArray.getIn([i, "id"]))).remove();
        const newNotesArray = notesArray.delete(i);
        dispatch(setNotes(newNotesArray));
    };
};

// export const setCurrentNote = ({index, title, note}) => {
//     return(dispatch) => {

//     };
// };