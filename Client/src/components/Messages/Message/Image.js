import React, { useState, useEffect } from 'react';

function Image(props) {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        const reader = new FileReader();
        reader.readAsDataURL(props.blob);
        reader.onloadend = () => {
            setImageSrc(reader.result);
        }
    }, [props.blob])

    return ( <img style={{ width: '200px', height: 'auto'}} src={imageSrc} alt={props.fileName} /> )
}

export default Image;