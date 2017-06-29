import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

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
			selectedPicture: null,
			animal: null
		};
		this.renderHome = this.renderHome.bind(this);
		this.renderDetail = this.renderDetail.bind(this);
	}
	componentDidMount(){
		this.giphySearch(encodeURI('cat dog'));
	}
	giphySearch(term){
		console.clear();
		console.log(term);
		var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${API_KEY}&limit=${itemsPerPage}`);
		xhr.done((data)=>{ 
			console.log("success got data", data); 
			this.setState({
				pictures: data,
				selectedPicture: data[0]
			});
		});
	}
	doSomething(){
		console.log('adsfdsfasdfasdfasfasfd');
		//selectedPicture => this.setState({selectedPicture})
		//link to
	}
	renderHome(){
		const giphySearch = _.debounce((term)=>{this.giphySearch(term)},300);

		return(
			<div>
				<AnimalSelector onSearchTermChange={giphySearch} />
				<PictureList 
					onPictureSelect={selectedPicture => this.setState({selectedPicture})} 
					pictures={this.state.pictures} />
			</div>
			);
	}
	renderDetail(){
		return(<PictureDetail picture={ this.state.selectedPicture } />);
	}
	onPictureSelect(selectedPicture){
		this.setState({selectedPicture});
		//enroutar a /detail
	}
	render(){
		return (<div>
			<h1 className="center-on-page">Cats and a few Dogs</h1>
		      <Route exact path='/' render={this.renderHome}/>
		      <Route path='/detail' render={this.renderDetail}/>
		</div>);
	}
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('.container'));
