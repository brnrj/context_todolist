import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext'

function InputBox() {
  const { value, setValue, setItems, items } = useContext(TodoContext)
  
  function handleChange({target}) {
    setValue(target.value)
  }

  return (
    <>
      <input onChange={ handleChange } value={value} type="text" className="form-control add-todo" placeholder="Add New"/>
      <button onClick={ () => {
        setItems([...items, {
        id: items.length + 1,
        text: value,
        completed: false,
      }])
      setValue('')
      } } type="button">Add</button>
    </>
  );
}

export default InputBox;