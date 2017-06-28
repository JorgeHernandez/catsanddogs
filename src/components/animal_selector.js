import React, { Component } from 'react';

class AnimalSelector extends Component {
	constructor(props){
		super(props);
		this.state = {animal: ''};
	}
	render(){
		return (
			<div>
	  			<input type="radio" name="animal" value="cats" onChange={event => this.onInputChange(event.target.value)} /> Cats 
	  			<input type="radio" name="animal" value="dogs" onChange={event => this.onInputChange(event.target.value)} /> Dogs
			</div>
	  );		
	}
	onInputChange(animal){
		console.clear();
		console.log(animal);
		this.setState({animal});
		//this.props.onSearchTermChange(animal);
	}	
};

export default AnimalSelector