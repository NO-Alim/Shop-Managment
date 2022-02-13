import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import classes from '../sass/List.module.scss';
const fetchData = [
  {
    name: 'apple',
    date: '10-02-2022',
    time: '08:00pm',
    price: 23,
    id: 1,
    type: 'income',
  },
  {
    name: 'orange',
    date: '10-02-2022',
    time: '09:00pm',
    price: 21,
    id: 2,
    type: 'expense',
  },
  {
    name: 'banana',
    date: '10-02-2022',
    time: '10:00pm',
    price: 11,
    id: 3,
    type: 'income',
  },
  {
    name: 'banana',
    date: '10-02-2022',
    time: '10:00pm',
    price: 11,
    id: 3,
    type: 'expense',
  },
];

const List = () => {
  const [data, setData] = useState(fetchData);
  return (
    <div className={classes.list}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.name}>Product</th>
            <th className={classes.date}>Added Date</th>
            <th className={classes.time}>Time</th>
            <th className={classes.price}>Price</th>
            <th className={classes.info}>More</th>
          </tr>
        </thead>
        {data.map((item, ind) => {
          return (
            <tbody key={ind}>
              <tr>
                <td className={classes.name}>
                  <span>
                    <input type="checkbox" />{' '}
                  </span>{' '}
                  {item.name}
                </td>
                <td className={classes.date}>{item.date}</td>
                <td className={classes.time}>{item.time}</td>
                <td className={classes.price}>${item.price}</td>
                <td className={classes.info}>
                  <span>
                    <i>
                      <FaEdit />
                    </i>
                  </span>
                  <span>
                    <i>
                      <RiDeleteBin6Line />
                    </i>
                  </span>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default List;
