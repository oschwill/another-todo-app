import { faTriangleExclamation, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { calculateAge } from '../functions/dayCalculator';

export default function ToDoItem({ todo, setToDos }) {
  const [done, setDone] = useState(todo.done);
  function changeDone() {
    todo.done = !todo.done;
    setDone(todo.done);
  }

  function deleteTodo() {
    setToDos((prev) => {
      return prev.filter((item) => item.task !== todo.task);
    });
  }

  function returnDaysLeft() {
    const { years, months, days } = calculateAge(new Date(), todo.goalDate);
    return (
      <span className="ml-auto pl-4 pr-4 text-red-800 font-bold text-sm bg-slate-200 text-center flex items-center ">
        {days}d {months}m {years}y
      </span>
    );
  }

  return (
    <section
      onClick={changeDone}
      className={
        ' w-8/12 p-2 min-h-2/12 bg-purple-400 text-white font-mono text-2xl flex cursor-pointer hover:bg-purple-600 ' +
        (todo.done ? 'line-through' : '')
      }
    >
      <p className="text-center inline">{todo.task}</p>
      {done && (
        <button onClick={deleteTodo} className="bg-red-500 color-white rounded-lg inline-block ">
          X
        </button>
      )}
      {returnDaysLeft()}
      <span className="ml-auto pr-4">
        {todo.priority === 1 ? (
          <FontAwesomeIcon icon={faTriangleExclamation} />
        ) : (
          <FontAwesomeIcon icon={faTemperatureLow} />
        )}
      </span>
    </section>
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.object,
  setToDos: PropTypes.func,
};
