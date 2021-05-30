var container = document.getElementById('ordered-list');

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
      list.classList.add('list-group-item');
      list.classList.add('d-flex');
      list.classList.add('justify-content-between');
      list.classList.add('align-items-start');
      const link = document.createElement('a');
      const heading = document.createElement('div');
      const subheading = document.createElement('div');
      subheading.classList.add('fw-bold');
      heading.classList.add('ms-2');
      heading.classList.add('me-auto');
      heading.innerText = detail.title;
      heading.appendChild(subheading);

      link.innerHTML = 'detail.title';

      link.href = detail.url;
      link.innerText = 'Click here';
      subheading.appendChild(link);
      list.appendChild(heading);
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
