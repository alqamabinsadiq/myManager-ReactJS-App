import { actions } from '../../actions/user';

const INITIAL_STATE = {
    user: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.SET_USER_TOKEN:
            return { ...state, ...INITIAL_STATE, user: action.data };
        case actions.LOGOUT_USER:
            return { ...state, user: null };
        default:
            return state;

    }
};