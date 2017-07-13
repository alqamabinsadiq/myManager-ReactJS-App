import { actions } from '../../actions/notes';

const INITIAL_STATE = {
    allNotes: null,
    currentNote: null
};

const setCurrentNote = (state, data) => {
    return{ ...state, currentNote: data};
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.GET_ALL_NOTES:
            return { ...state, allNotes: action.data };
        case actions.SET_CURRENT_NOTE:
            return setCurrentNote(state, action.data);
        default:
            return state;
    }
};