import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';
import { About } from "./MyComponents/About"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  let todoData;
  if (localStorage.getItem("todos") == null) {
    todoData = [];
  }
  else {
    todoData = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title, desc) => {

    let sno = 0;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos.length + 1;
    }


    const myTodo = {
      sno: sno,
      title: title,
      description: desc,
    }
    console.log(myTodo)
    setTodos([...todos, myTodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const onDelete = (todo) => {
    console.log("deleted ", todo);

    setTodos(todos.filter((event) => {
      return event !== todo;
    }));

  }


  const [todos, setTodos] = useState(todoData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <>
      <Router>

        <Header title="my todo app" searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }} >

          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>



        <Footer />
      </Router>
    </>
  );
}

export default App;
