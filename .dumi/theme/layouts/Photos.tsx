import React, { memo, useMemo, useState } from 'react';
import '../style/photos.less';
import { isOuterLink, getUrl } from '../utils/index';
import Image from '../components/Image';
import Carousel, { Modal, ModalGateway } from 'react-images';

const name = 'lqh.jpeg';
const Photos = ({ meta }) => {
  // 开启预览窗口
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  // 获取图片数据
  const keys = useMemo(() => Object.keys(meta?.photos || {}), [meta]);

  const images = useMemo(
    () =>
      keys?.map((item) => ({
        source: getUrl(meta?.photos[item]),
      })),
    [keys],
  );
  const renderImg = useMemo(() => {
    return keys.map((key, index) => {
      let url = meta?.photos[key];
      return (
        <div
          key={index}
          className="photo-card"
          onClick={() => {
            setModalIsOpen(true);
            setIndex(index);
          }}
        >
          <Image
            className="img-wrap"
            src={!isOuterLink(url) ? require(`../../../assets/${url}`) : url}
          />
          <div className="photo-description">
            <h2>{key}</h2>
          </div>
        </div>
      );
    });
  }, [keys]);

  return (
    <div className="photo-wrapper">
      {/* 图片预览 */}
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={() => setModalIsOpen(false)}>
            <Carousel currentIndex={index} views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
      {/* 渲染图片 */}
      {renderImg}
    </div>
  );
};

export default memo(Photos);
