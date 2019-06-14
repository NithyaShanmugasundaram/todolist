import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import Task from './Task';
import './App.css';

class App extends Component {
	state = {
		
		inputValue:'',
		todos:[]
	}
	handleChange=(event)=>{
    	console.log(event.target.value);
    	this.setState({inputValue:event.target.value});
    }

    handleSubmit=(event)=> {
    	
    	event.preventDefault();
    	const newTodo = {
    		value:this.state.inputValue,
    		done:false
    	};
    	const month = this.state.todos;
    	month.push(newTodo);
    	this.setState ({todos:month,inputValue:''});
    	

    }
    handleClick = (i) => {
    	console.log('1',i);
    	const day=this.state.todos;
    	day[i].done=!day[i].done;
    	this.setState({todos:day})
    }

  
    render() {
    return (
      <div className="App">
    <Form
   inputValue={this.state.inputValue}
   handleChange={this.handleChange}
   handleSubmit={this.handleSubmit}
   
      />
      <List
      todos={this.state.todos}
      handleClick={this.handleClick}
      />
    
      </div>
    );
  }
}

export default App;
