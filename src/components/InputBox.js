import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext'

function InputBox() {
  const { value, setValue, setItems, items } = useContext(TodoContext)
  
  function handleChange({target}) {
    setValue(target.value)
  }

  function handleClick() {
    if(value !== ''){
      setItems([...items, {
        id: items.length + 1,
        text: value,
        completed: false,
      }])
      setValue('')
    }else {
      return alert('Por favor, digite uma tarefa válida.')
    } 
  }

  return (
    <>
      <input onChange={ handleChange } value={value} type="text" placeholder="Add New"/>
      <button onClick={ handleClick } type="button">Add</button>
    </>
  );
}

export default InputBox;