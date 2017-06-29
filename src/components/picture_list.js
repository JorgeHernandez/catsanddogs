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
	/*
	return (
		<ul>
			{pictureItems}
		</ul>
	);
	*/
	return (
        <Masonry
            className={'catsanddogs'} // default ''
            elementType={'ul'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
            {pictureItems}
        </Masonry>
    );
};

export default PictureList;