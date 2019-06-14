import React, { Component } from 'react';
import List from "./List";

class Form extends Component{
	
	render(){
		return(
			<div className="Form">
			<form onSubmit={this.props.handleSubmit}>
			  <input 
			      placeholder='Enter your input' 
			          onChange={this.props.handleChange}
			         
			          
			            />

			</form>
			</div>



			)
	}
}
export default Form;