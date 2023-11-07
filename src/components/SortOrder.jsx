import PropTypes from 'prop-types';

const SortOrder = ({ sortType, sortItems }) => {
  return (
    <div className="flex justify-center gap-6 mt-8">
      <p
        className={` w-28 p-1 pl-2 pr-2 text-center text-white font-bold cursor-pointer hover:bg-slate-400 ${
          sortType === 'all' ? 'bg-slate-400' : 'bg-gray-600'
        } `}
        onClick={() => sortItems('all')}
      >
        all
      </p>
      <p
        className={` w-28 p-1 pl-2 pr-2 text-center text-white font-bold cursor-pointer hover:bg-slate-400 ${
          sortType === 'done' ? 'bg-slate-400' : 'bg-gray-600'
        } `}
        onClick={() => sortItems('done')}
      >
        done
      </p>
      <p
        className={` w-28 p-1 pl-2 pr-2 text-center text-white font-bold cursor-pointer hover:bg-slate-400 ${
          sortType === 'undone' ? 'bg-slate-400' : 'bg-gray-600'
        } `}
        onClick={() => sortItems('undone')}
      >
        undone
      </p>
      <p
        className={`w-28 p-1 pl-2 pr-2 text-center text-white font-bold cursor-pointer hover:bg-slate-400 ${
          sortType === 'high' ? 'bg-slate-400' : 'bg-gray-600'
        } `}
        onClick={() => sortItems('high')}
      >
        highest Prio
      </p>
      <p
        className={`w-28 p-1 pl-2 pr-2 text-center text-white font-bold cursor-pointer hover:bg-slate-400 ${
          sortType === 'low' ? 'bg-slate-400' : 'bg-gray-600'
        } `}
        onClick={() => sortItems('low')}
      >
        lowest Prio
      </p>
      <p
        className={`w-28 p-1 pl-2 pr-2 text-center text-white font-bold cursor-pointer hover:bg-slate-400 ${
          sortType === 'dead-asc' ? 'bg-slate-400' : 'bg-gray-600'
        } `}
        onClick={() => sortItems('dead-asc')}
      >
        deadline asc
      </p>
      <p
        className={`w-34 p-1 pl-2 pr-2 text-center text-white font-bold cursor-pointer hover:bg-slate-400 ${
          sortType === 'dead-desc' ? 'bg-slate-400' : 'bg-gray-600'
        } `}
        onClick={() => sortItems('dead-desc')}
      >
        deadline desc
      </p>
    </div>
  );
};

SortOrder.propTypes = {
  sortType: PropTypes.string,
  sortItems: PropTypes.func,
};

export default SortOrder;
