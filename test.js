var date = new Date();
date.setMinutes(date.getMinutes() - 2);
var year = date.getFullYear().toString();
var month = date.getMonth().toString();
var day = date.getDate().toString();
var hour = date.getHours().toString();
var minute = date.getMinutes().toString();
var seconds = date.getSeconds().toString();
var milisec = date.getMilliseconds();
var ISOFormat =
  year +
  '-' +
  month +
  '-' +
  day +
  'T' +
  hour +
  ':' +
  minute +
  ':' +
  seconds +
  '.' +
  milisec +
  'Z';

console.log(ISOFormat);
