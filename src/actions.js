import {
  CHANGE_SEARCH_FIELD,
  REQUEST_MONSTERS_FAILED,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS
} from './constants';

export const searchChange = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestMonsters = () => async (dispatch) => {
  dispatch({type: REQUEST_MONSTERS_PENDING});
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const monsters = await res.json();
    dispatch({type: REQUEST_MONSTERS_SUCCESS, payload: monsters})
  } catch (error) {
    dispatch({type: REQUEST_MONSTERS_FAILED, payload: error})
  }
}