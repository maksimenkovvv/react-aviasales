import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  SET_CHECKED_LIST,
  SET_SORT_BY,
} from '../const/actionTypes';

const initialState = {
  tickets: [],
  checkedList: [],
  sortBy: 'cheap',
  isLoading: false,
  error: null,
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tickets: action.payload,
      };
    case FETCH_TICKETS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SET_CHECKED_LIST:
      return {
        ...state,
        checkedList: action.payload,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
