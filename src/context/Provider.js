import React, { useState } from 'react';
import TodoContext from './TodoContext';

function Provider({ children }) {
  const [value, setValue] = useState('');
  const [title] = useState('Things to do');
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(items.length);
  const [checked, setChecked] = useState([]);

  const context = { value, setValue, items, setItems, title, count, setCount, checked, setChecked };
  return (
    <TodoContext.Provider value ={context}>
      {children}
    </TodoContext.Provider>
  );
}

export default Provider;