import React, {useContext} from 'react';
import TodoContext from '../context/TodoContext';

function TodoItem({data}) {
const {checked, setChecked, items, setItems} = useContext(TodoContext);
const { text, id } = data

function handleChange({target}) {
  if (checked.indexOf(target.value) === -1) {
    setChecked([...checked, target.value])
  } else if(checked.includes(target.value)) {
    setChecked(checked.filter((element)=> element !== target.value))
  }
}

function handleDone(id) {
  const newList = items.filter((item) => item.id !== id)
  setItems(newList)
}

  return (
    <li key={id} className="ui-state-default">
      <div className="checkbox">
        <label className={checked.includes(text) ? 'label done' : 'label undone'} htmlFor="input">
          <input id="input" onChange={({target}) => handleChange({target})} type="checkbox" value={text} />
          <p>{text}</p>
        </label>
        <button onClick={() => handleDone(id)} type="button">Done</button>
      </div>
    </li>
  );
}

export default TodoItem;
