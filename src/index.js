//key for GIPHY API
const API_KEY = '34f1b6a7a8f34603a25e6016b4b15b1f';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PictureList   from './components/picture_list'; 
import PictureDetail from './components/picture_detail';

class App extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (<div><h1>Cats and a few Dogs</h1><PictureList /></div>);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
