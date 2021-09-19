import React, { useState } from 'react';

const Image: React.FC<{ src: string; className?: string; style?: any }> = ({
  src,
  className,
  style,
}) => {
  const [hasError, setHasError] = useState(false);
  const handleError = (e) => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <img
        src={require('../img/404error.png')}
        className={className}
        style={style}
        alt=""
      />
    );
  }
  return (
    <img
      src={src}
      alt=""
      onError={handleError}
      className={className}
      style={style}
    />
  );
};

export default Image;
