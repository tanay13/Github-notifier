var container = document.getElementById('container');

chrome.storage.sync.get(['repo'], (repo) => {
  console.log(repo.repo);
  if (!repo.repo)
    document.getElementById('name').innerHTML = 'rj200113/Test-repo';
  else document.getElementById('name').innerHTML = repo.repo;
});

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
      container.appendChild(list);
    }
  });
}

getNotification();

// setInterval(getNotification, 2000);

// window.addEventListener('storage', getNotification);

var btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  chrome.storage.sync.remove(['key'], function () {
    // Your code
    // This is an asyn function
    localStorage.clear();
    container.innerHTML = '';
    console.log('deleted');
  });
});
