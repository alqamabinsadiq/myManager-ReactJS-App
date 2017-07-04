import { actions } from '../../actions/user';

const INITIAL_STATE = {
    user: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.SET_USER_TOKEN:
            return { ...state, user: action.data };
        default:
            return INITIAL_STATE;

    }
};