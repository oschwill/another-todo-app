import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';

let dateAttributes = null;

export default function ToDoForm({ setToDos }) {
  const [priority, setPriority] = useState(1);
  const [goalDate, setGoalDate] = useState(null);

  useEffect(() => {
    const date = new Date();
    const defaultGoalDate = date.setDate(date.getDate() + 1);
    setGoalDate(new Date(defaultGoalDate));

    dateAttributes = { min: date.toISOString().split('T')[0] };
  }, []);

  function addToDo(e) {
    if (e.key === 'Enter' && e.target.value.length > 3) {
      const task = taskBuilder(e.target.value);
      setToDos((prev) => {
        return [...prev, task];
      });
      e.target.value = '';
    }
  }

  function changePriority(e) {
    setPriority(Number(e.target.value));
  }

  function changeGoalDate(e) {
    if (e.target.value === '' || e.target.value === null) {
      return;
    }
    setGoalDate(new Date(e.target.value));
  }

  function taskBuilder(inputTask) {
    return {
      task: inputTask,
      done: false,
      priority,
      goalDate,
    };
  }

  return (
    <section className="flex justify-center items-center py-20">
      <input
        type="date"
        {...dateAttributes}
        onChange={changeGoalDate}
        onKeyDown={(e) => e.preventDefault()}
      />
      <input
        onKeyDown={addToDo}
        className="border-b-2 outline-none px-5 py-4  text-3xl"
        type="text"
        name="task"
        id=""
      />
      <select name="priority" id="priority" onChange={changePriority}>
        <option value="1">High</option>
        <option value="2">Low</option>
      </select>
    </section>
  );
}

ToDoForm.propTypes = {
  setToDos: PropTypes.func,
};
