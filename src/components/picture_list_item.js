import React from 'react';

const PictureListItem = (props) => {
	console.log(props.picture);
	return (
		<li>
			<div>
				<img src={props.picture.images.downsized_medium.url} />
			</div>
		</li>
	);
};

export default PictureListItem;