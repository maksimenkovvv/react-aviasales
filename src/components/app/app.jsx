import React from 'react';

import './app.scss';
import Header from '../header/header';
import AsideFilter from '../asideFilter/asideFilter';
import MainFilter from '../mainFilter/mainFilter';
import TicketItem from '../ticketItem/ticketItem';

function App() {
  return (
    <section className="wrapper">
      <Header />
      <div className="container">
        <AsideFilter />
        <div className="avia-main">
          <MainFilter />
          <TicketItem />
        </div>
      </div>
    </section>
  );
}

export default App;
