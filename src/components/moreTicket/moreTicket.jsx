import React from 'react';

import './moreTicket.scss';

function MoreTicket({ onClick }) {
  return (
    <div className="avia-ticketBtn">
      <button type="btn" className="moreTicket-btn" onClick={onClick}>
        Показать ещё 5 билетов
      </button>
    </div>
  );
}

export default MoreTicket;
