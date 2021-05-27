async function getNotification() {
  var token = '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';
  var date = new Date();
  date.setMinutes(date.getMinutes() - 2);
  const ISOFormat = date.toISOString();
  var repoLink;
  var url;
  chrome.storage.sync.get(['repo'], (repo) => {
    repoLink = repo.repo;
    console.log(repoLink);
    var url =
      'https://api.github.com/repos/' + repoLink + '/issues?since=' + ISOFormat;
    fetch(url, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.length === 0) {
          console.log('empty');
          return;
        }
        var myobj = [];

        json.forEach((element) => {
          chrome.notifications.create(
            '',
            {
              type: 'basic',
              iconUrl: '2020-12-26.jpg',
              title: element.title,
              message: 'new issue opened!',
            },
            function () {
              console.log('Last error:', chrome.runtime.lastError);
            }
          );
          myobj.push({
            title: element.title,
            url: element.html_url,
          });
        });

        chrome.storage.sync.set({ key: myobj }, () => {
          console.log('saved');
        });
      });
  });
}

// getNotification();

// chrome.runtime.onInstalled.addListener(getNotification);

setInterval(getNotification, 60000);
