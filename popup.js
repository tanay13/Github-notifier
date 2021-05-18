var btn = document.getElementById('getNot');
var date = new Date();
date.setMinutes(date.getMinutes() - 2);
const ISOFormat = date.toISOString();
function getNotification() {
  for (items in localStorage) {
    var detail = JSON.parse(localStorage.getItem(items));
    console.log(detail);
    const list = document.createElement('li');
    const link = document.createElement('a');
    link.href = detail.url;
    link.innerHTML = detail.title;
    list.appendChild(link);
    document.body.appendChild(list);
  }

  // result.forEach((element) => {
  //   const para = document.createElement('p');
  //   para.innerHTML = element.actor.avatar_url;
  //   document.body.appendChild(para);
  // });
  // console.log(result);
}

getNotification();

// btn.addEventListener('click', getNotification);
