import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADIG} from '../actions/types';

export default (state = {loading: false, repos: [], user: null, users: []}, action) => {
    switch (action.type) {
        case GET_REPOS:
            return {
                ...state,
                loading: false,
                repos: action.payload
            }
        case GET_USER:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case CLEAR_USERS:
            return {
                ...state,
                loading: false,
                users: []
            }
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_LOADIG:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}