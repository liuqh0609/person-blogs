import React from 'react';
import { width } from 'window-size';

const Swiper = ({ url }) => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: 318,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img
        style={{ width: '100%', margin: '0 auto' }}
        src="http://qiniu.liuqh.cn/banner1.jpg"
      />
    </div>
  );
};
export default Swiper;
