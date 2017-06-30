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
const ROOT_URL = `http://api.giphy.com/v1/gifs/search?&api_key=${API_KEY}`;
const itemsPerPage = 25;

class App extends Component{
	constructor(props){
		super(props);
		this.state = { 
			pictures: {},
			selectedPicture: null,
			animal: null,
			paginate: 0, 
			obj: {key1: "value1", key2: "value2"}
		};
		this.renderHome = this.renderHome.bind(this);
		this.renderDetail = this.renderDetail.bind(this);
		this.viewMore = this.viewMore.bind(this);
	}
	componentDidMount(){
		this.giphySearch(encodeURI('cat dog'));
	}
	viewMore(){
		console.log('view more '+this.state.paginate+' '+this.state.animal);
		this.setState({paginate: this.state.paginate+itemsPerPage}, 
			()=>this.giphySearch(this.state.animal));
	}
	giphySearch(term){
		console.log(term);
		this.setState({animal: term});
		const url = `${ROOT_URL}&q=${term}&limit=${itemsPerPage}&offset=${this.state.paginate}`;
		var xhr = $.get(url);
		xhr.done((res)=>{ 
			//console.log("success got data", data.data); 
			if(this.state.pictures.data){
				var newPictures = {};
				newPictures = this.state.pictures;
				newPictures.data = newPictures.data.concat(res.data);
			}else{
				var newPictures = res;
			}

			this.setState({
				pictures: newPictures,
				selectedPicture: res[0]
			});
		});
	}
	renderHome(){
		const giphySearch = _.debounce((term)=>{this.giphySearch(term)},300);

		return(
			<div>
				<AnimalSelector onSearchTermChange={giphySearch} />
				<button onClick={this.viewMore}>View more</button>
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
