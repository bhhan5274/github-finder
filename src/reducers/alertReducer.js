import {REMOVE_ALERT, SET_ALERT} from "../actions/types";

export default (state = null, action) => {
    switch (action.type) {
        case SET_ALERT:
            return action.payload;
        case REMOVE_ALERT:
            return null;
        default:
            return state;
    }
};