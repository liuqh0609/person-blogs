import React, { useState } from 'react';
import { Link } from 'dumi/theme';
import classNames from 'classnames';
import '../style/navigation.less';
import { isOuterLink } from '../utils/index';

const Navigation = ({ routes, logo }) => {
  const [selected, setSelected] = useState(0);

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
              actived: selected === index,
              'layout-header-link': true,
            })}
            onClick={() => setSelected(index)}
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
