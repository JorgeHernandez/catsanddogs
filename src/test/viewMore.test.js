import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount, shallow} from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ViewMoreButton from '../components/viewMore_btn';

it('::::autocheck::::', () => {
  expect(1-1).toBe(0);
});

it('view more should call search', () => {
	const spy = expect.createSpy();
	const wrapper = shallow(<ViewMoreButton onViewMore={spy} />); 
    const btn = wrapper.find('#viewMore-btn');
    btn.simulate('click');
	expect(spy).toHaveBeenCalled();
});