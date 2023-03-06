import { FETCH_TEST, LOADED_TEST, LOADING_TEST } from '../constants/actionTypes'
import * as api from '../../api'

export const getUserData = () => async (dispatch) => {
    dispatch({ type: LOADING_TEST });
    try {
        const { data } = await api.getUser();
        dispatch({ type: FETCH_TEST, payload: data })
    } catch (error) {
        dispatch({ type: LOADED_TEST })
    }
}