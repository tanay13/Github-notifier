async function getNotification() {
  var token = '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';
  var date = new Date();
  date.setMinutes(date.getMinutes() - 10000);
  const ISOFormat = date.toISOString();
  var url =
    'https://api.github.com/repos/rj200113/Test-repo/issues?page=1&per_page=5';
  fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      var myobj = [];
      json.forEach((element) => {
        // var detail = {
        //   title: element.title,
        //   url: element.html_url,
        // };
        myobj.push({
          title: element.title,
          url: element.html_url,
        });
      });
      chrome.storage.sync.set({ key: myobj }, () => {
        console.log('saved');
      });
    });
}

getNotification();

// setInterval(getNotification, 12000);
