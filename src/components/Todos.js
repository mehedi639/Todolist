import React, { Component } from 'react';
import TodoItem from './TodoItem';
// import {PropTypes} from 'prop-types'



class Todos extends Component {
  render() {
    
    return this.props.todos.map((todo, id) => (
      <TodoItem todo={todo} key={id} deltodo={this.props.deltodo} checked={this.props.checkbox} markCompleted={this.props.markCompleted}/> 
      
    ));
  }
}
// Todos.propTypes={
//   todos:PropTypes.array.isRequired
// }

export default Todos;
