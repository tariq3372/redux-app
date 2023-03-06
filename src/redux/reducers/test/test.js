import { FETCH_TEST, LOADED_TEST, LOADING_TEST } from '../../constants/actionTypes'

export default (test = { test: [], loading: false }, action) => {
    switch (action.type) {
        case FETCH_TEST:
            return { ...test, test: action.payload, loading: false };
        case LOADING_TEST:
            return { ...test, loading: true };
        case LOADED_TEST:
            return { ...test, loading: false };
        default:
            return test;
    }
}