import React from 'react';
import { width } from 'window-size';

const Swiper = ({ url }) => {
  return (
    <div style={{ minHeight: 318, margin: '0 auto' }}>
      <img
        style={{ width: '100%', maxHeight: 500 }}
        src={require('../img/banner.gif')}
      />
    </div>
  );
};
export default Swiper;
