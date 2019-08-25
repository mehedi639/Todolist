import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import shortid from 'shortid'
import Axios from 'axios';
class App extends Component {
  state = {
    todos: [
    ]
  };

componentDidMount(){
Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=40')
.then(res=>this.setState({todos:res.data}))
}

checkbox=e=>{
  for(const each of this.state.todos){
    if(each.id===e.target.value){
      each.checked=e.target.checked
    }
  }
  this.setState({todos:this.state.todos})
}

  markCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //delete todo
  deltodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
    console.log(id);
  };
  addTodo = title => {
    this.setState({ todos: [...this.state.todos, title] });
  };

  render() {
    return (
      <div>
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos
          todos={this.state.todos}
          deltodo={this.deltodo}
          markCompleted={this.markCompleted}
          checkbox={this.checkbox}
        />
      </div>
    );
  }
}
export default App;
