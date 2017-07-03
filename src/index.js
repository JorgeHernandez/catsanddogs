import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import $ from "jquery";
import _ from 'lodash';

import Loader from 'react-loader';

import PictureList   from './components/picture_list'; 
import PictureDetail from './components/picture_detail';

import AnimalSelector from './components/animal_selector';
import ViewMoreButton from './components/viewMore_btn';

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
			loaded: false
		};
		this.renderHome = this.renderHome.bind(this);
		this.renderDetail = this.renderDetail.bind(this);
		this.viewMore = this.viewMore.bind(this);
	}
	componentDidMount(){
		this.giphySearch(encodeURI('cat dog'));
	}
	viewMore(){
		this.setState({paginate: this.state.paginate+itemsPerPage}, 
			()=>this.giphySearch(this.state.animal));
	}
	giphySearch(term){
		const url = `${ROOT_URL}&q=${term}&limit=${itemsPerPage}&offset=${this.state.paginate}`;
		if(term !== this.state.animal){
			this.setState({pictures:{},paginate:0});
		}
		this.setState({animal: term,loaded:false});
		var xhr = $.get(url);
		xhr.done((res)=>{ 
			//console.log("success got data", res.data); 
			if(this.state.pictures.data){
				var newPictures = {};
				newPictures = this.state.pictures;
				newPictures.data = newPictures.data.concat(res.data);
			}else{
				var newPictures = res;
			}

			this.setState({
				pictures: newPictures,
				selectedPicture: res[0],
				loaded: true
			});
		});
	}
	renderHome(){
		const giphySearch = _.debounce((term)=>{this.giphySearch(term)},300);

		return(
			<div>
				<AnimalSelector onSearchTermChange={giphySearch} />
				<Loader loaded={this.state.loaded} >
					<PictureList 
						onPictureSelect={selectedPicture => this.setState({selectedPicture})} 
						pictures={this.state.pictures} />
				</Loader>
				<ViewMoreButton onViewMore={this.viewMore} />
			</div>
			);
	}
	renderDetail(){
		return(<PictureDetail picture={ this.state.selectedPicture } />);
	}
	onPictureSelect(selectedPicture){
		this.setState({selectedPicture});
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
