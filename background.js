async function getNotification() {
  var token = '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';
  var date = new Date();
  date.setMinutes(date.getMinutes() - 1000000);
  const ISOFormat = date.toISOString();
  var url =
    'https://api.github.com/repos/rj200113/Test-repo/issues?page=1&per_page=5&since=' +
    ISOFormat;
  fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
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

// setInterval(getNotification, 2000);

// var details = {
//   title: 'element.titl',
//   url: ' element.html_url',
// };

// var details1 = {
//   title: 'dfsd',
//   url: 'dsvcds',
// };

// var myobj = [];

// myobj.push(details);
// myobj.push(details1);
// chrome.storage.sync.set({ key: { myobj } });
