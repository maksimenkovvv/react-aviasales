import { fetchTickets } from '../../services/aviasalesApi';
import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  SET_CHECKED_LIST,
  SET_SORT_BY,
} from '../const/actionTypes';

export const fetchTicketsRequest = () => ({
  type: FETCH_TICKETS_REQUEST,
});

export const fetchTicketsSuccess = (tickets) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: tickets.tickets,
});

export const fetchTicketsFailure = (error) => ({
  type: FETCH_TICKETS_FAILURE,
  payload: error,
});

export const setCheckedList = (checkedList) => ({
  type: SET_CHECKED_LIST,
  payload: checkedList,
});

export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  payload: sortBy,
});

export const fetchTicketsAction = (searchParams) => async (dispatch) => {
  dispatch(fetchTicketsRequest());
  try {
    const tickets = await fetchTickets(searchParams);
    dispatch(fetchTicketsSuccess(tickets));
  } catch (error) {
    dispatch(fetchTicketsFailure(error.message));
  }
};
