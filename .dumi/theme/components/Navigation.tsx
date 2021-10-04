import React, { useEffect } from 'react';
import { Link } from 'dumi/theme';
import classNames from 'classnames';
import '../style/navigation.less';
import { isOuterLink } from '../utils/index';

const Navigation = ({ routes, logo }) => {
  useEffect(() => {
    sessionStorage.setItem('liuqh-blog', '热爱');
  }, []);

  const click = (title) => {
    sessionStorage.setItem('liuqh-blog', title);
  };
  return (
    <>
      {/* logo */}
      <div className="layout-header-logo">
        {isOuterLink(logo) ? (
          <img src={logo} alt="这是一个logo" />
        ) : (
          <img
            src={logo ? require(logo) : require('../img/logo.png')}
            alt="这是一个logo"
          />
        )}
      </div>

      {/* 头部导航 */}
      <div className="layout-header">
        {routes.map((route, index) => (
          <Link
            className={classNames({
              actived: route?.title === sessionStorage.getItem('liuqh-blog'),
              'layout-header-link': true,
            })}
            onClick={() => click(route?.title)}
            to={route.path}
            key={route.title}
          >
            {route?.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
