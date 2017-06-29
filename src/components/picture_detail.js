import React from 'react';

const PictureDetail = (props) => {
	const url = props.picture.images.original.url;
	return (
		<div>
			<img src={url} />
		</div>
	);
};

export default PictureDetail;