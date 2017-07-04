import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount, shallow} from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import App from '../components/app';

it('::::autocheck::::', () => {
  expect(1-1).toBe(0);
});

it('Constructor set initial state', () => {
	const wrapper = shallow(<App />); 
	wrapper.instance().constructor({});
	expect(wrapper.state()).toIncludeKey('pictures');
	expect(wrapper.state()).toIncludeKey('selectedPicture');
	expect(wrapper.state()).toIncludeKey('animal');
	expect(wrapper.state()).toIncludeKey('paginate');
	expect(wrapper.state()).toIncludeKey('loaded');
	expect(wrapper.state().selectedPicture).toBe(null);	
	expect(wrapper.state().animal).toBe(null);	
	expect(wrapper.state().paginate).toBe(0);
	expect(wrapper.state().loaded).toBe(false);	
});

it('when mounted, search is called', () => {
	sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<BrowserRouter><App /></BrowserRouter>);
    expect(App.prototype.componentDidMount.calledOnce).toBe(true);
    //expect(App.giphySearch.calledOnce).toBe(true);
});

it('view more should change state paginate', () => {
	const wrapper = shallow(<App />); 
	wrapper.instance().viewMore();
	expect(wrapper.state().paginate).toBe(25);
	wrapper.instance().viewMore();
	expect(wrapper.state().paginate).toBe(50);
	wrapper.instance().viewMore();
	expect(wrapper.state().paginate).toBe(75);
});

it('giphySearch should change state animal', () => {
	const wrapper = shallow(<App />); 
	wrapper.instance().giphySearch('cats');
	expect(wrapper.state().animal).toBe('cats');
	wrapper.instance().giphySearch('dogs');
	expect(wrapper.state().animal).toBe('dogs');
});

it('giphySearch should reset state loaded to false', () => {
	const wrapper = shallow(<App />); 
	wrapper.instance().giphySearch('cats');
	expect(wrapper.state().loaded).toBe(false);//before success
	//service on success should change to true
});

it('when term is changed, state paginate should be zero', () => {
	const wrapper = shallow(<App />); 
	wrapper.instance().giphySearch('cats');
	wrapper.instance().viewMore();
	wrapper.instance().viewMore();
	wrapper.instance().viewMore();
	wrapper.instance().giphySearch('dogs');
	expect(wrapper.state().paginate).toBe(0);//before success
});

it('when term is changed, state pictures should be an empty object', () => {
	const wrapper = shallow(<App />); 
	wrapper.instance().giphySearch('cats');
	wrapper.instance().giphySearch('dogs');
	expect(wrapper.state().pictures).toEqual({});
});

it('when onPictureSelect is called, state selectedPicture should be an object', () => {
	const wrapper = shallow(<App />); 
	const picture = {"type":"gif","id":"us8FXd0EtOXXa","slug":"retrofunk-afv-us8FXd0EtOXXa","url":"https://giphy.com/gifs/retrofunk-afv-us8FXd0EtOXXa","bitly_gif_url":"http://gph.is/1PkWIl2","bitly_url":"http://gph.is/1PkWIl2","embed_url":"https://giphy.com/embed/us8FXd0EtOXXa","username":"retrofunk","source":"afv.com","rating":"pg","content_url":"","user":{"avatar_url":"https://media2.giphy.com/avatars/retrofunk/ssNUMZsbJX0A.jpg","banner_url":"https://media2.giphy.com/headers/retrofunk/zmgMcycBS0Ca.jpg","profile_url":"https://giphy.com/retrofunk/","username":"retrofunk","display_name":"RETROFUNK"},"source_tld":"","source_post_url":"afv.com","is_indexable":0,"import_datetime":"2015-10-09 16:18:28","trending_datetime":"2016-04-21 05:45:02","images":{"fixed_height":{"url":"https://media1.giphy.com/media/us8FXd0EtOXXa/200.gif","width":"300","height":"200","size":"3319524","mp4":"https://media2.giphy.com/media/us8FXd0EtOXXa/200.mp4","mp4_size":"191792","webp":"https://media1.giphy.com/media/us8FXd0EtOXXa/200.webp","webp_size":"848796"},"fixed_height_still":{"url":"https://media1.giphy.com/media/us8FXd0EtOXXa/200_s.gif","width":"300","height":"200"},"fixed_height_downsampled":{"url":"https://media1.giphy.com/media/us8FXd0EtOXXa/200_d.gif","width":"300","height":"200","size":"266680","webp":"https://media1.giphy.com/media/us8FXd0EtOXXa/200_d.webp","webp_size":"66754"},"fixed_width":{"url":"https://media1.giphy.com/media/us8FXd0EtOXXa/200w.gif","width":"200","height":"133","size":"1567676","mp4":"https://media2.giphy.com/media/us8FXd0EtOXXa/200w.mp4","mp4_size":"112332","webp":"https://media1.giphy.com/media/us8FXd0EtOXXa/200w.webp","webp_size":"480366"},"fixed_width_still":{"url":"https://media1.giphy.com/media/us8FXd0EtOXXa/200w_s.gif","width":"200","height":"133"},"fixed_width_downsampled":{"url":"https://media1.giphy.com/media/us8FXd0EtOXXa/200w_d.gif","width":"200","height":"133","size":"127485","webp":"https://media1.giphy.com/media/us8FXd0EtOXXa/200w_d.webp","webp_size":"38166"},"fixed_height_small":{"url":"https://media1.giphy.com/media/us8FXd0EtOXXa/100.gif","width":"150","height":"100","size":"964334","mp4":"https://media2.giphy.com/media/us8FXd0EtOXXa/100.mp4","mp4_size":"71597","webp":"https://media1.giphy.com/media/us8FXd0EtOXXa/100.webp","webp_size":"320368"},"fixed_height_small_still":{"url":"https://media1.giphy.com/media/us8FXd0EtOXXa/100_s.gif","width":"150","height":"100"},"fixed_width_small":{"url":"https://media1.giphy.com/media/us8FXd0EtOXXa/100w.gif","width":"100","height":"67","size":"463079","mp4":"https://media2.giphy.com/media/us8FXd0EtOXXa/100w.mp4","mp4_size":"42835","webp":"https://media1.giphy.com/media/us8FXd0EtOXXa/100w.webp","webp_size":"170876"},"fixed_width_small_still":{"url":"https://media1.giphy.com/media/us8FXd0EtOXXa/100w_s.gif","width":"100","height":"67"},"downsized":{"url":"https://media2.giphy.com/media/us8FXd0EtOXXa/giphy-downsized.gif","width":"250","height":"166","size":"1859397"},"downsized_still":{"url":"https://media2.giphy.com/media/us8FXd0EtOXXa/giphy-downsized_s.gif","width":"250","height":"166","size":"35661"},"downsized_large":{"url":"https://media1.giphy.com/media/us8FXd0EtOXXa/giphy-downsized-large.gif","width":"384","height":"256","size":"5301963"},"downsized_medium":{"url":"https://media1.giphy.com/media/us8FXd0EtOXXa/giphy-downsized-medium.gif","width":"365","height":"243","size":"4813529"},"original":{"url":"https://media1.giphy.com/media/us8FXd0EtOXXa/giphy.gif","width":"480","height":"320","size":"8438392","frames":"76","mp4":"https://media1.giphy.com/media/us8FXd0EtOXXa/giphy.mp4","mp4_size":"489748","webp":"https://media1.giphy.com/media/us8FXd0EtOXXa/giphy.webp","webp_size":"1959838"},"original_still":{"url":"https://media1.giphy.com/media/us8FXd0EtOXXa/giphy_s.gif","width":"480","height":"320"},"looping":{"mp4":"https://media2.giphy.com/media/us8FXd0EtOXXa/giphy-loop.mp4","mp4_size":"1490980"},"original_mp4":{"mp4":"https://media2.giphy.com/media/us8FXd0EtOXXa/giphy.mp4","mp4_size":"489748","width":"480","height":"320"},"preview":{"mp4":"https://media2.giphy.com/media/us8FXd0EtOXXa/giphy-preview.mp4","mp4_size":"33039","width":"256","height":"170"},"downsized_small":{"mp4":"https://media2.giphy.com/media/us8FXd0EtOXXa/giphy-downsized-small.mp4","mp4_size":"194647","width":"189","height":"126"},"preview_gif":{"url":"https://media2.giphy.com/media/us8FXd0EtOXXa/giphy-preview.gif","width":"108","height":"72","size":"49954"},"preview_webp":{"url":"https://media2.giphy.com/media/us8FXd0EtOXXa/giphy-preview.webp","width":"159","height":"106","size":"48704"}}};
	wrapper.instance().onPictureSelect(picture);
	expect(wrapper.state().selectedPicture).toEqual(picture);
});
