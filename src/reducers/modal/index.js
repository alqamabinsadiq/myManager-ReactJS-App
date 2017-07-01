import { actions } from '../../actions/modal';

const INITIAL_STATE = {
    template: null
};

const openModal = (state, data) => {
    return {
        ...state,
        template: data
    };
};

const closeModal = (state) => {
    return {
        ...state,
        template: null
    };
};

export default function reducer(state = INITIAL_STATE, { data, type }) {
    switch (type) {
        case actions.OPEN_MODAL: {
            return openModal(state, data);
        }
        case actions.CLOSE_MODAL: {
            return closeModal(state, data);
        }
        default: {
            return state;
        }
    }
}