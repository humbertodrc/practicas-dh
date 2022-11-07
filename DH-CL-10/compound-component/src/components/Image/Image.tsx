import React from 'react';
export interface ImageInterface {
	source: string;
}

const Image : React.FC<ImageInterface> = ({source}) => {
	return (
		<div className="image-item">
			<img src={source} alt="Wallpaper de Rick and Morty" />
		</div>
	);
};

export default Image;
