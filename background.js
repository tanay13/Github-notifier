async function getNotification() {
  var token = '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';
  var date = new Date();
  date.setMinutes(date.getMinutes() - 1000);
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
      console.log(url);
      json.forEach((element) => {
        console.log(element.html_url);
        console.log(element.title);
      });
      //   console.log(json);
    });
}

getNotification();

// setInterval(getNotification, 60000);
