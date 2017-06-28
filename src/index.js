import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import $ from "jquery";
import _ from 'lodash';

import PictureList   from './components/picture_list'; 
import PictureDetail from './components/picture_detail';

import AnimalSelector from './components/animal_selector';

//key for GIPHY API
const API_KEY = '34f1b6a7a8f34603a25e6016b4b15b1f';
//const ROOT_URL = `http://api.giphy.com/v1/gifs/search?q=cat%20dog&api_key=${API_KEY}&limit=25`;
const itemsPerPage = 25;

class App extends Component{
	constructor(props){
		super(props);
		this.state = { 
			pictures: [],
			selectedPicture: null
		};
	}
	componentDidMount(){
		this.giphySearch(encodeURI('cat dog'));
	}
	giphySearch(term){
		var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${API_KEY}&limit=${itemsPerPage}`);
		xhr.done((data)=>{ 
			console.log("success got data", data); 
			this.setState({
				pictures: data,
				selectedPicture: data[0]
			});
		});
	}
	render(){
		const giphySearch = _.debounce((term)=>{this.giphySearch(term)},300);

		return (<div>
			<h1>Cats and a few Dogs</h1>
			<AnimalSelector onSearchTermChange={giphySearch} />
			<PictureList 
				onPictureSelect={selectedPicture => this.setState({selectedPicture})} 
				pictures={this.state.pictures} />
		</div>);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
