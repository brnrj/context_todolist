import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Provider from '../src/context/Provider';

function App() {
  return (
    <Provider> 
      <div className="container">
        <div className="row">
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
