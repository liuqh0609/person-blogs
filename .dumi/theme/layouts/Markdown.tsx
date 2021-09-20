import React, { useState } from 'react';
import '../style/md/cyanosis.less';
import '../style/md/arknights.less';
import '../style/markdown.less';
import QRcode from 'qrcode.react';

const main = ({ children, theme, meta }) => {
  const [showCode, setShowCode] = useState(false);
  const [path, setPath] = useState('');
  const [showMobile, setShowMobile] = useState(false);
  // 滚动至顶部
  const backTop = () => {
    window.scrollTo({ top: 0 });
  };
  // 展示二维码
  const showQRCode = () => {
    setShowCode(true);
    setPath(window.location.href);
  };
  const showQRCodeM = () => {
    setShowCode(!showCode);
    setPath(window.location.href);
  };
  // 手机端点击显示隐藏按钮
  const handleMobilClick = () => {
    setShowMobile(!showMobile);
  };
  // 分享至qq
  const handleShareQq = () => {
    window.open(
      `https://connect.qq.com/widget/shareqq/index.html?url=${window.location.href}&title=${meta?.title}&pics=https://img1.baidu.com/it/u=1589330889,2223759416&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500&site=刘庆华`,
    );
  };

  return (
    <div>
      <div className={`markdown-${theme}-body`}>{children}</div>
      <div className="right_button_wrapper">
        <div className="button" onClick={backTop}>
          <img
            className="badge"
            src={require('../img/top.png')}
            style={{ width: 50, height: 50, top: -2 }}
          />
        </div>

        <p
          style={{
            width: 40,
            marginBottom: 10,
            color: '#999',
            textAlign: 'center',
          }}
        >
          分享
        </p>
        <div className="button" onClick={handleShareQq}>
          <img className="badge" src={require('../img/QQ.png')} alt="" />
        </div>
        <div
          className="button"
          onMouseOver={showQRCode}
          onMouseLeave={() => setShowCode(false)}
        >
          <img className="badge" src={require('../img/wx.png')} alt="" />
          {showCode ? (
            <QRcode
              style={{ position: 'absolute', top: 60, left: -30 }}
              value={path}
            />
          ) : null}
        </div>
      </div>

      {/* 手机端 */}
      <div
        className="mobile_button_wrap"
        style={{
          transform: `scale(${showMobile ? 0.5 : 1})`,
          transition: 'all 2s ease',
        }}
        onClick={handleMobilClick}
      ></div>
      {showMobile ? (
        <div className="mobile_wrapper">
          <div className="button" onClick={backTop}>
            <img
              className="badge"
              src={require('../img/top.png')}
              style={{ width: 50, height: 50, top: -2 }}
            />
          </div>
          <div className="button" onClick={handleShareQq}>
            <img className="badge" src={require('../img/QQ.png')} alt="" />
          </div>
          <div className="button" onClick={showQRCodeM}>
            <img className="badge" src={require('../img/wx.png')} alt="" />
            {showCode ? (
              <QRcode
                style={{ position: 'absolute', top: -80, right: 60 }}
                value={path}
              />
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default React.memo(main);
