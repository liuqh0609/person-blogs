import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        color: '#aaa',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: 10,
      }}
    >
      保持热爱，奔赴山海 - &nbsp;
      <a href="https://github.com/liuqh0609">
        <img
          style={{ width: 20, marginRight: 10, verticalAlign: 'middle' }}
          src="http://qiniu.liuqh.cn/github.png"
        />
      </a>
      <a href="https://juejin.cn/user/3993025017037309/posts">
        <img
          style={{ width: 20, verticalAlign: 'middle' }}
          src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6bdafd801c878b10edb5fed5d00969e9.svg"
        />
      </a>
      <div style={{ width: '100%', textAlign: 'center', marginTop: 10 }}>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          豫ICP备2021027697号
        </a>
      </div>
    </div>
  );
};

export default Footer;
