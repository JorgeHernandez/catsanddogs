import React, { Component } from 'react';

const ViewMoreButton = (props) => {
	return (
		<a href="#" id="viewMore-btn" className="btn" onClick={props.onViewMore}>View more</a>
	);
}

export default ViewMoreButton;