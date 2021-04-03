import React, {useContext} from 'react';
import TodoContext from '../context/TodoContext';

function TodoItem({ data }) {
const {checked, setChecked} = useContext(TodoContext);
function handleChange({target}) {
  if (checked.indexOf(target.value) === -1) {
    setChecked([...checked, target.value])
  } else if(checked.includes(target.value)) {
    setChecked(checked.filter((element)=> element !== target.value))
  }
}

  return (
    <li key={data.id} className="ui-state-default">
      <div className="checkbox">
        <label htmlFor="">
          <input onChange={({target}) => handleChange({target})} type="checkbox" value={data.text} />
          {data.text}
        </label>
      </div>
    </li>
  );
}

export default TodoItem;
