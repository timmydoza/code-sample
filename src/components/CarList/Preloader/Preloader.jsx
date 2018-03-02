import React from 'react';

const Preloader = (props) => {
  let timeoutId;

  const loadImage = (imageUrl) => {
    const image = new Image();
    image.src = imageUrl;
  };

  const enterHandler = () => {
    timeoutId = setTimeout(() => loadImage(props.image_url), 300);
  };

  const leaveHandler = () => {
    clearTimeout(timeoutId);
  };

  return React.cloneElement(props.children, {
    onMouseEnter: enterHandler,
    onMouseLeave: leaveHandler,
  });
};

export default Preloader;
