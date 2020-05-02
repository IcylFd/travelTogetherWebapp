/*
 * @Date: 2020-05-02 14:50:24
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-02 14:50:55
 */
/**
 * 将json转为form参数
 * @param {object} params
 * @return {string}
 */
const queryParams = params => {
  let _resultArr = [];
  for(let key in params) {
    let value = params[key];
    if(value.constructor === Array) {
      value.forEach(_value => {
        _resultArr.push(`${encodeURIComponent(key)}[]=${encodeURIComponent(_value)}`)
      })
    } else {
      _resultArr.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
  }
  return _resultArr.length ? `?${_resultArr.join('&')}` : ''
}

export {
  queryParams
}
