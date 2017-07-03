import { actions } from '../../actions/user';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.SET_USER_TOKEN: {
            return { ...state, user: action.data };
        }
    }
};