import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';

import ToDoItem from './ToDoItem';
import SortOrder from './SortOrder';

export default function ToDoList({ items, setToDos }) {
  const [sortedItem, setSortedItem] = useState([]);
  const [sortType, setSortType] = useState('all');

  useEffect(() => {
    sortItemsFunc(sortType);
  }, [items]);

  const sortItemsFunc = (sortType) => {
    setSortType(sortType);
    switch (sortType) {
      case 'all':
        setSortedItem(items);
        break;
      case 'done':
        setSortedItem(items.filter((item) => item.done));
        break;
      case 'undone':
        setSortedItem(items.filter((item) => !item.done));
        break;
      case 'high':
        setSortedItem(items.filter((item) => item.priority === 1));
        break;
      case 'low':
        setSortedItem(items.filter((item) => item.priority === 2));
        break;

      default:
        break;
    }
  };

  return (
    <>
      <section className="flex flex-col items-center w-full gap-5 ">
        {sortedItem &&
          sortedItem?.map((item, key) => (
            <ToDoItem todo={item} key={key + item.task} setToDos={setToDos} />
          ))}
        {sortedItem.length < 1 && <p>No Items Available</p>}
      </section>
      {items && items.length > 0 && <SortOrder sortType={sortType} sortItems={sortItemsFunc} />}
    </>
  );
}

ToDoList.propTypes = {
  items: PropTypes.array,
  setToDos: PropTypes.func,
};
