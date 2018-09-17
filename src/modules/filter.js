// 过滤器指令
import Vue from 'vue'

// 年月日过滤器
Vue.filter('formatTime', function (value) {
  let date = new Date(value)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
})
// 时间日期前的"0"占位数字
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//商评时间
Vue.filter('formatMsgTime', function (timespan) {
// function formatMsgTime  (timespan){
    var data = new Date(timespan);
    var now = new Date();
    var year = data.getFullYear();
    var month = data.getMonth() + 1;
    month = month < 10 ? ('0' + month) : month;
    var day = data.getDate();
    day = day < 10 ? ('0' + day) : day;
    var hour = data.getHours();
    hour = hour < 10 ? ('0' + hour) : hour;
    var minute = data.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var timeSpanStr;
    var milliseconds = now - data;
    if (milliseconds < 1000 * 60 * 30) {
        timeSpanStr = '刚刚';
    } else if (1000 * 60 * 30 <= milliseconds && milliseconds < 1000 * 60 * 60) {
        timeSpanStr = Math.floor((milliseconds / (1000 * 60))) + '分钟前';
    } else if (1000 * 60 * 60 * 1 <= milliseconds && milliseconds < 1000 * 60 * 60 * 24) {
        timeSpanStr = Math.floor(milliseconds / (1000 * 60 * 60)) + '小时前';
    }else if (milliseconds >= 1000 * 60 * 60 * 24 ) {
        timeSpanStr =year+'-'+month +'-'+day ;
    }
    return timeSpanStr;
})
