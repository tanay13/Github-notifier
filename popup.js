function getNotification() {
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

getNotification();

setInterval(getNotification, 12000);
