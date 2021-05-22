function getNotification() {
  chrome.storage.sync.get('key', (result) => {
    const arr = result.key;

    arr.forEach((element) => {
      var detail = {
        title: element.title,
        url: element.url,
      };

      localStorage.setItem(element.title, JSON.stringify(detail));
    });

    for (var i = 0; i < localStorage.length; i++) {
      var detail = JSON.parse(localStorage.getItem(localStorage.key(i)));
      const list = document.createElement('li');
      const link = document.createElement('a');
      link.href = detail.url;
      link.innerHTML = detail.title;
      list.appendChild(link);
      document.body.appendChild(list);
    }
  });
}

getNotification();

// setInterval(getNotification, 2000);

// window.addEventListener('storage', getNotification);
