import React, { Component } from 'react';

const ViewMoreButton = (props) => {
	return (
		<a href="#" className="btnViewMore"  onClick={props.onViewMore}>View more</a>
	);
}

export default ViewMoreButton;