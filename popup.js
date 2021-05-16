var btn = document.getElementById('getNot');
var date = new Date();
date.setMinutes(date.getMinutes() - 2);
var year = date.getFullYear().toString();
var month = date.getMonth().toString();
var day = date.getDate().toString();
var hour = date.getHours().toString();
var minute = date.getMinutes();
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

async function getNotification() {
  const response = await fetch(
    'https://api.github.com/users/tanay13/received_events/public?per_page=5&page=1'
  );
  const result = await response.json();

  result.forEach((element) => {
    const para = document.createElement('p');
    para.innerHTML = element.actor.avatar_url;
    document.body.appendChild(para);
  });
  console.log(result);
}

btn.addEventListener('click', getNotification);
