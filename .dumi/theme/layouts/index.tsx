import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import Swiper from '../components/Swiper';
import HomeList from '../components/ArticleCard';
import Markdown from './Markdown';
import About from './About';
import Photos from './Photos';
import '../style/index.less';
import { context } from 'dumi/theme';

export default ({ children, location, ...props }) => {
  const ctx = useContext(context);

  const { theme } = ctx.config;

  return (
    <div className="layout_wrapper">
      {/* 导航栏 */}
      <Navigation routes={theme?.routes || []} logo={theme?.logo} />
      {location?.pathname === '/' && (
        <div>
          <Swiper url={theme?.banner} />
          {/* 列表 */}
          <div style={{ paddingTop: 20 }}>
            <HomeList source={ctx.routes} />
          </div>
        </div>
      )}
      {/* 文章详情页 */}
      {jumpPage(location.pathname, children, theme.markdownTheme, ctx.meta)}
    </div>
  );
};
const jumpPage = (path, children, theme, meta) => {
  const prefix = path?.split('/')?.[1];
  const map = {
    文章: <Markdown children={children} theme={theme} />,
    关于我: <About children={children} />,
    相册: <Photos meta={meta} />,
  };
  return map[prefix];
};
