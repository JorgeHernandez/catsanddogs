import React from 'react';

const PictureListItem = (props) => {
	console.log(props.picture);
	return (
		<li>
			<a href="#">
				<img src={props.picture.images.fixed_width.url} />
			</a>
		</li>
	);
};

export default PictureListItem;