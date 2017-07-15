import { actions } from '../../actions/notes';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
    allNotes: null
});


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.GET_ALL_NOTES:
            return  state.set('allNotes', fromJS(action.data));
        default:
            return state;
    }
};