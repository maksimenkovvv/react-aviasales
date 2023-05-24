import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Alert, Spin } from 'antd';

import { fetchTicketsAction } from '../../store/action/actionCreator';
import './ticketItem.scss';
import TicketCard from '../ticketCard/ticketCard';
import MoreTicket from '../moreTicket/moreTicket';

function TicketItem() {
  const [ticketCount, setTicketCount] = useState(5);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const tickets = useSelector((state) => state.tickets);
  const checkedList = useSelector((state) => state.tickets.checkedList);
  const sortBy = useSelector((state) => state.tickets.sortBy);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchTicketsAction({}, sortBy)).then(() => setLoading(false));
  }, [dispatch, sortBy]);

  const filterTickets = (tickets, checkedList, sortedBy) => {
    const isAllChecked = checkedList.includes('all');
    const filtered = tickets.filter((ticket) => {
      const stops = ticket.segments.reduce((acc, { stops }) => acc + stops.length, 0);
      return isAllChecked || checkedList.includes(stops.toString());
    });

    switch (sortedBy) {
      case 'cheap':
        return filtered.sort((a, b) => a.price - b.price);
      case 'fast':
        return filtered.sort((a, b) => {
          const aDuration = a.segments.reduce((sum, segment) => sum + segment.duration, 0);
          const bDuration = b.segments.reduce((sum, segment) => sum + segment.duration, 0);
          return aDuration - bDuration;
        });
      case 'optimal':
        return filtered.sort((a, b) => {
          const aDuration = a.segments.reduce((sum, segment) => sum + segment.duration, 0);
          const bDuration = b.segments.reduce((sum, segment) => sum + segment.duration, 0);
          const aPrice = a.price;
          const bPrice = b.price;
          return aDuration + aPrice - (bDuration + bPrice);
        });
      default:
        return filtered;
    }
  };

  const filteredTickets = filterTickets(tickets.tickets, checkedList, sortBy);
  const alert = (
    <Alert
      message="Ничего не найдено"
      description={'Рейсов, подходящих под заданные фильтры, не найдено'}
      type="info"
      showIcon
    />
  );
  const antIcon = <LoadingOutlined style={{ fontSize: 36, color: '#2196F3' }} spin className="spinIcon" />;
  const loader = (
    <div className="loader-box">
      <Spin indicator={antIcon} />
    </div>
  );
  const isLoading = loading && filteredTickets.length === 0;

  const ticketCards = filteredTickets
    .slice(0, ticketCount)
    .map(({ price, carrier, segments }, index) => (
      <TicketCard key={index} price={price} carrier={carrier} segments={segments} />
    ));

  return (
    <>
      <div>{isLoading ? loader : ticketCards.length ? ticketCards : alert}</div>
      {!loading && ticketCards.length < filteredTickets.length && (
        <MoreTicket onClick={() => setTicketCount((prevCount) => prevCount + 5)} />
      )}
    </>
  );
}

export default TicketItem;
