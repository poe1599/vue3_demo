import dayjs from 'dayjs'

// 提供畫面資料修飾

/**
 * 修飾日期
 * @param {String} date
 * @param {String} formatText
 * @returns {String}
 */
const modDate = (date, formatText = 'YYYY/MM/DD') => {
  return dayjs(date).format(formatText)
}

export default { modDate }
