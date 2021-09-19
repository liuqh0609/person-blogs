import React from 'react';
import '../style/md/cyanosis.less';
import '../style/md/arknights.less';

const main = ({ children, theme }) => {
  return <div className={`markdown-${theme}-body`}>{children}</div>;
};

export default main;
