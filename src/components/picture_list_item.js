import React from 'react';

const PictureListItem = (props) => {
	const picture = props.picture;
	const imageUrl = props.picture.images.fixed_width.url
	console.log(props.picture);
	const onPictureSelect = props.onPictureSelect;
	return (
		<li onClick={ ()=>onPictureSelect(picture) }>
			<img src={imageUrl} />
		</li>
	);
};

export default PictureListItem;