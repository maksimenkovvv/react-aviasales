import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setSortBy } from '../../store/action/actionCreator';

import './mainFilter.scss';

function MainFilter() {
  const [selectedOption, setSelectedOption] = useState('cheap');
  const dispatch = useDispatch();

  function handleOptionChange(event) {
    const value = event.target.value;
    setSelectedOption(value);
    dispatch(setSortBy(value));
  }

  return (
    <div className="avia-filter">
      <ul className="mainFilter-list">
        <li className="mainFilter-item">
          <label className={`mainFilter-item__label ${selectedOption === 'cheap' ? 'selected left' : ''}`}>
            <input
              type="radio"
              className="mainFilter-box"
              value="cheap"
              checked={selectedOption === 'cheap'}
              onChange={handleOptionChange}
            />
            САМЫЙ ДЕШЁВЫЙ
          </label>
        </li>
        <li className="mainFilter-item">
          <label className={`mainFilter-item__label ${selectedOption === 'fast' ? 'selected' : ''}`}>
            <input
              type="radio"
              className="mainFilter-box"
              value="fast"
              checked={selectedOption === 'fast'}
              onChange={handleOptionChange}
            />
            САМЫЙ БЫСТРЫЙ
          </label>
        </li>
        <li className="mainFilter-item">
          <label className={`mainFilter-item__label ${selectedOption === 'optimal' ? 'selected right' : ''}`}>
            <input
              type="radio"
              className="mainFilter-box"
              value="optimal"
              checked={selectedOption === 'optimal'}
              onChange={handleOptionChange}
            />
            САМЫЙ ОПТИМАЛЬНЫЙ
          </label>
        </li>
      </ul>
    </div>
  );
}

export default MainFilter;
