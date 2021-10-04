export const formatTime = (timestamp) => {
  var date = new Date(timestamp), //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-',
    M =
      (date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1) + '-',
    D = date.getDate() + ' ',
    h = date.getHours() + ':',
    m = date.getMinutes() + ':',
    s = date.getSeconds();
  return Y + M + D + h + m + s;
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
