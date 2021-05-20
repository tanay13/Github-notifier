function getNotification() {
  // for (items in chrome.storage) {
  //   // chrome.storage.sync.get(['titel', 'url'], (result) => {
  //   //   console.log(result.title + ' ' + result.url);
  //   //   const list = document.createElement('li');
  //   //   const link = document.createElement('a');
  //   //   link.href = result.url;
  //   //   link.innerHTML = result.title;
  //   //   list.appendChild(link);
  //   //   document.body.appendChild(list);
  //   // });
  //   console.log(items);
  // }
  chrome.storage.sync.get('key', (result) => {
    const arr = result.key;

    arr.forEach((element) => {
      console.log(element.title);
      const list = document.createElement('li');
      const link = document.createElement('a');
      link.href = element.url;
      link.innerHTML = element.title;
      list.appendChild(link);
      document.body.appendChild(list);
    });
  });
}

setInterval(getNotification, 4000);
