import axios from 'axios';

const API_URL = 'https://aviasales-test-api.kata.academy';

export const searchTickets = async (searchParams) => {
  try {
    const searchRes = await axios.get(`${API_URL}/search`, { params: searchParams });
    const ticketId = searchRes.data.searchId;
    return ticketId;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getTickets = async (ticketId) => {
  try {
    const ticketResponse = await fetch(`${API_URL}/tickets?searchId=${ticketId}`);
    const json = await ticketResponse.json();
    if (!json) throw new Error('No data found');
    return json;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchTickets = async (searchParams) => {
  try {
    const ticketId = await searchTickets(searchParams);
    const tickets = await getTickets(ticketId);
    if (!tickets || !tickets.tickets) throw new Error('No tickets found');
    return tickets;
  } catch (error) {
    throw new Error(error.message);
  }
};
