import React, { Component } from 'react';
import Task from './Task';
class List extends Component{
   render(){
		return(
			<div className='List'>
			{this.props.todos.map((todo,i)=>{
				return( <Task key={i} 
					i={i}
					handleClick={this.props.handleClick}
					todo={todo}

					/>
				);
			})
			}
			</div>	
			




			);
	}
}
export default List;