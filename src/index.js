//key for GIPHY API
const API_KEY = '34f1b6a7a8f34603a25e6016b4b15b1f';
const ROOT_URL = `http://api.giphy.com/v1/gifs/search?q=cat%20dog&api_key=${API_KEY}&limit=25`;


import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import $ from "jquery";

import PictureList   from './components/picture_list'; 
import PictureDetail from './components/picture_detail';

class App extends Component{
	constructor(props){
		super(props);
		this.state = { 
			pictures: [],
			selectedPicture: null
		};
		this.giphySearch('cat%20dog');
	}
	giphySearch(term){
		var xhr = $.get(ROOT_URL);
		xhr.done(function(data){ 
			console.log("success got data", data); 
		});
	}
	render(){
		return (<div><h1>Cats and a few Dogs</h1><PictureList /></div>);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
