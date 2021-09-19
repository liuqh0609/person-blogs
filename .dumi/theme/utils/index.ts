export const formatTime = (time) => {
  const date = new Date(time);
  return (
    date.toLocaleDateString() +
    ' ' +
    date.toLocaleTimeString('chinese', { hour12: false })
  );
};
/**
 * 判断是否为外部链接
 * @param url 链接
 * @returns boolean
 */
export const isOuterLink = (url) => {
  if (!url) return false;
  return url.match(/(http)|(https)/g) !== null;
};

export const getUrl = (url) => {
  if (isOuterLink(url)) {
    return url;
  }
  return require(`../../../assets/${url}`);
};
