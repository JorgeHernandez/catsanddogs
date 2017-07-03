import React from 'react';
import { Link } from 'react-router-dom';

const PictureDetail = (props) => {
	const url = props.picture.images.original.url;
	return (
		<div>
			<img src={url} className="detailPict" />
			<Link to="/" className="btn" >Back</Link>
		</div>
	);
};

export default PictureDetail;