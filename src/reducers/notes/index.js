import { actions } from '../../actions/notes';

const INITIAL_STATE = {
    allNotes: null
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.GET_ALL_NOTES:
            return { ...state, allNotes: action.data };
        default:
            return state;
    }
};