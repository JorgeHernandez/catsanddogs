import React from 'react';
import PictureListItem from './picture_list_item';
import Masonry from 'react-masonry-component';

const PictureList = ( props ) => {

	const data = props.pictures.data || [];

	const masonryOptions = {
    	transitionDuration: 0
	};

	const pictureItems = data.map( (picture)=>{
		return (
			<PictureListItem 
				onPictureSelect={props.onPictureSelect}
				key={picture.id} 
				picture={picture} />
			);
	});
	return (
        <Masonry
            elementType={'ul'} 
            options={masonryOptions} 
            disableImagesLoaded={false} 
            updateOnEachImageLoad={false} 
        >
            {pictureItems}
        </Masonry>
    );
};

export default PictureList;