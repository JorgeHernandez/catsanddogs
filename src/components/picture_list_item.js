import React from 'react';
import { Link } from 'react-router-dom';

const PictureListItem = (props) => {
	const picture = props.picture;
	const imageUrl = props.picture.images.fixed_width.url
	console.log(props.picture);
	const onPictureSelect = props.onPictureSelect;
	return (
		<Link to="/detail" onClick={ ()=>onPictureSelect(picture) }>
			<img src={imageUrl} />
		</Link>
	);
};

export default PictureListItem;