import React from 'react';

const RoundedImage = ({ size, imgPath, name }) => {
    return (
        <img
            className="rounded-circle"
            width={size}
            height={size}
            src={imgPath}
            alt={name}
        />
    );
};

export default RoundedImage;