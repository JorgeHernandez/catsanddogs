import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import AnimalSelector from '../components/animal_selector';

it('::::autocheck::::', () => {
  	expect(1-1).toBe(0);
});

it('renders a snapshot', () => {
  	const tree = renderer.create(<AnimalSelector onSearchTermChange={()=>{} } />).toJSON();
  	expect(tree).toMatchSnapshot();
});

it('renders an AnimalSelector component', () => {
  const component = shallow(<AnimalSelector />);
  expect(component).toHaveLength(1);
});

it('initial state animal should be empty', () => {
  const wrapper = shallow(<AnimalSelector onSearchTermChange={()=>{} }/>); 
  expect(wrapper.state().animal).toBe("");
});

it('cats option changes state animal to cats', () => {
	const wrapper = shallow(<AnimalSelector onSearchTermChange={()=>{} }/>); 
	wrapper.instance().onInputChange('cats');
	expect(wrapper.state().animal).toBe('cats');
});

it('dogs option changes state animal to dogs', () => {
	const wrapper = shallow(<AnimalSelector onSearchTermChange={()=>{} }/>); 
	wrapper.instance().onInputChange('dogs');
	expect(wrapper.state().animal).toBe('dogs');
});

it('cats option changes state animal to cats', () => {
    const wrapper = shallow(<AnimalSelector onSearchTermChange={()=>{} }/>); 
    wrapper.instance().onInputChange('cats');
    expect(wrapper.state().animal).toBe('cats');
});
