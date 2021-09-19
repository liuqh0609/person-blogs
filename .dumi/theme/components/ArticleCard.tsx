import React, { useMemo, memo } from 'react';
import Title from './Tittle';
import '../style/article.less';
import { Link } from 'dumi/theme';
import { formatTime } from '../utils/index';
const HomeList = ({ source }) => {
  // 按照时间排序
  useMemo(
    () =>
      source.sort((a, b) => {
        return b.meta.updatedTime - a.meta.updatedTime;
      }),
    [source],
  );
  // 渲染标签
  const renderTag = (tags) => {
    if (tags.length === 0) {
      tags.push('没啥特征');
    }
    return tags?.map((tag, index) => (
      <div key={index} className="tag-item">
        <span className="tag-icon">#</span>
        {tag}
      </div>
    ));
  };
  return (
    <div>
      <Title title="最近更新" />
      {source?.map((item) => {
        if (item.path !== '/' && item.path.includes('文章')) {
          return (
            <div key={item.path} className="card-wrapper">
              <div className="tag-wrapper">
                {/* 标签 */}
                {renderTag(item?.meta?.tag?.split('、') || [])}
              </div>
              {/* 文章标题 */}
              <Link className="article-card-link" to={item.path}>
                <h2>{item.title}</h2>
                {/* 文章简介 */}
                <div className="article-card-describe">
                  {item?.meta?.describe}
                </div>
              </Link>
              {/* 最近编辑时间 */}
              <div>
                <p className="article-other-info">
                  <span className="info-time">
                    {formatTime(item?.meta?.updatedTime)}
                  </span>
                  {/* <span className="info-view"> <i class="el-icon-view"></i> {{ item.views }}</span> */}
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
export default memo(HomeList);
