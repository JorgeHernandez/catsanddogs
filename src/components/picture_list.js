import React from 'react';
import PictureListItem from './picture_list_item';

const PictureList = ( props ) => {

	const data = props.pictures.data || [];

	const pictureItems = data.map( (picture)=>{
		return (
			<PictureListItem 
				onPictureSelect={props.onPictureSelect}
				key={picture.id} 
				picture={picture} />
			);
	});
	return (
		<ul>
			{pictureItems}
		</ul>
	);
};

export default PictureList;