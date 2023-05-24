import React from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import './ticketCard.scss';

function TicketCard({ price, segments, carrier }) {
  const logos = <img src={`//pics.avs.io/99/36/${carrier}.png`} alt={carrier} />;

  const segmentItems = segments.map((segment, index) => {
    const city = `${segment.origin} - ${segment.destination}`;
    const duration = `${Math.floor(segment.duration / 60)}ч ${segment.duration % 60}м`;
    const stops = `${segment.stops.length} пересадок`;
    const departureTime = dayjs(segment.date).format('HH:mm');
    const arrivalTime = dayjs(segment.date).add(segment.duration, 'minutes').format('HH:mm');

    return (
      <div className="ticket-segment" key={index}>
        <div>
          <div className="box-text box-size">{city}</div>
          <div className="box-size2 box-text2">
            {departureTime} – {arrivalTime}
          </div>
        </div>
        <div>
          <div className="box-text box-size">В пути</div>
          <div className="box-size2 box-text2">{duration}</div>
        </div>
        <div>
          <div className="box-text box-size">{stops}</div>
          <div className="box-size2 box-text2">{segment.stops.join(', ')}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="avia-ticket">
      <div className="ticket-header">
        <div className="ticket-price">{price} Р</div>
        <div className="ticket-logo">{logos}</div>
      </div>
      {segmentItems}
    </div>
  );
}

export default connect()(TicketCard);
