import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component that attaches onMouseEnter and onMouseLeave listeners to the child component.
 * If the mouse hovers over this component for more than 300ms, then it will casue the browser
 * to download and cache the inage provided in props.imageUrl.
 * 
 * @props  {object}
 * @return {component}
 */
const Preloader = (props) => {
  let timeoutId;

  const loadImage = (imageUrl) => {
    const image = new Image();
    image.src = imageUrl;
  };

  const enterHandler = () => {
    timeoutId = setTimeout(() => loadImage(props.imageUrl), 300);
  };

  const leaveHandler = () => {
    clearTimeout(timeoutId);
  };

  return React.cloneElement(props.children, {
    onMouseEnter: enterHandler,
    onMouseLeave: leaveHandler,
  });
};

Preloader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default Preloader;
