import React from 'react';

const Swiper = ({ url }) => {
  return (
    <div style={{ minHeight: 318 }}>
      <img
        src={require('../img/banner.jpg')}
        alt=""
        style={{ width: '100%' }}
      />
    </div>
  );
};
export default Swiper;
