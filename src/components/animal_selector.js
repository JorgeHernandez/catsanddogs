import React, { Component } from 'react';

class AnimalSelector extends Component {
	constructor(props){
		super(props);
		this.state = {animal: ''};
	}
	render(){
		return (
			<div className="center-on-page">
	  			<input type="radio" name="animal" value="cats" id="cats" checked={this.state.animal === 'cats'} onChange={event => this.onInputChange(event.target.value)} /> 
	  			<label for="cats">Cats</label>  
	  			<input type="radio" name="animal" value="dogs" id="dogs" checked={this.state.animal === 'dogs'} onChange={event => this.onInputChange(event.target.value)} /> 
	  			<label for="dogs">Dogs</label>
			</div>
	  );		
	}
	onInputChange(animal){
		console.clear();
		console.log(animal);
		this.setState({animal});
		this.props.onSearchTermChange(animal);
	}	
};

export default AnimalSelector