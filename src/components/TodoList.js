import React, {useContext} from 'react';
import TodoItem from '../components/TodoItem';
import Header from '../components/Header';
import Footer from './Footer';
import TodoContext from '../context/TodoContext';

function TodoList() {
const {title, items} = useContext(TodoContext)
  const count = items.length;
  return (
    <div className="todolist">
      <Header title={title} />
      <ul className="list-unstyled">
        {items.map((item, index) =>(
          <TodoItem key={index} data={item} />
        ))}
      </ul>
      <Footer count={count} />
    </div>
  );
}

export default TodoList;
