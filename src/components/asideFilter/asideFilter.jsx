import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCheckedList } from '../../store/action/actionCreator';

import './asideFilter.scss';

function AsideFilter() {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const dispatch = useDispatch();

  const checkedList = useSelector((state) => state.tickets.checkedList);

  const handleStopsChange = (event) => {
    const { value } = event.target;
    let newCheckedList;

    if (value === 'all') {
      if (!isCheckedAll) {
        newCheckedList = ['all', '0', '1', '2', '3'];
        setIsCheckedAll(true);
      } else {
        newCheckedList = [];
        setIsCheckedAll(false);
      }
    } else {
      const index = checkedList.indexOf(value);
      if (index === -1) {
        newCheckedList = [...checkedList, value];
        if (newCheckedList.length === 4) {
          newCheckedList = ['all', ...newCheckedList];
          setIsCheckedAll(true);
        }
      } else {
        newCheckedList = checkedList.filter((val) => val !== value);
        if (newCheckedList.includes('all')) {
          newCheckedList = newCheckedList.filter((item) => item !== 'all');
          setIsCheckedAll(false);
        }
      }
    }

    dispatch(setCheckedList(newCheckedList));
  };
  return (
    <aside className="avia-aside">
      <div className="avia-leftFilter">
        <div className="leftFilter-name">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
        <form>
          <ul className="leftFilter-list">
            <li className="leftFilter-item">
              <label htmlFor="filter-1">
                <input
                  type="checkbox"
                  id="filter-1"
                  value="all"
                  className="leftFilter-box"
                  onChange={handleStopsChange}
                  checked={isCheckedAll}
                />
                <span className="lefFilter-box__square"></span>
                Все
              </label>
            </li>
            <li className="leftFilter-item">
              <label htmlFor="filter-2">
                <input
                  type="checkbox"
                  id="filter-2"
                  value="0"
                  className="leftFilter-box"
                  onChange={handleStopsChange}
                  checked={checkedList.includes('0')}
                  disabled={isCheckedAll ? false : checkedList.length === 4 && !checkedList.includes('0')}
                />
                <span className="lefFilter-box__square"></span>
                Без пересадок
              </label>
            </li>
            <li className="leftFilter-item">
              <label htmlFor="filter-3">
                <input
                  type="checkbox"
                  id="filter-3"
                  value="1"
                  className="leftFilter-box"
                  onChange={handleStopsChange}
                  checked={checkedList.includes('1')}
                  disabled={isCheckedAll ? false : checkedList.length === 4 && !checkedList.includes('1')}
                />
                <span className="lefFilter-box__square"></span>1 пересадка
              </label>
            </li>
            <li className="leftFilter-item">
              <label htmlFor="filter-4">
                <input
                  type="checkbox"
                  id="filter-4"
                  value="2"
                  className="leftFilter-box"
                  onChange={handleStopsChange}
                  checked={checkedList.includes('2')}
                  disabled={isCheckedAll ? false : checkedList.length === 4 && !checkedList.includes('2')}
                />
                <span className="lefFilter-box__square"></span>2 пересадки
              </label>
            </li>
            <li className="leftFilter-item">
              <label htmlFor="filter-5">
                <input
                  type="checkbox"
                  id="filter-5"
                  value="3"
                  className="leftFilter-box"
                  onChange={handleStopsChange}
                  checked={checkedList.includes('3')}
                  disabled={isCheckedAll ? false : checkedList.length === 4 && !checkedList.includes('3')}
                />
                <span className="lefFilter-box__square"></span>3 пересадки
              </label>
            </li>
          </ul>
        </form>
      </div>
    </aside>
  );
}

export default AsideFilter;
