var btn = document.getElementById('getNot');
var date = new Date();
date.setMinutes(date.getMinutes() - 2);
const ISOFormat = date.toISOString();
async function getNotification() {
  var token = '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';
  fetch(
    'https://api.github.com/repos/rj200113/Test-repo/issues?since=' + ISOFormat,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(
        'https://api.github.com/repos/rj200113/Test-repo/issues?since=' +
          ISOFormat
      );
      console.log(json);
    });

  // result.forEach((element) => {
  //   const para = document.createElement('p');
  //   para.innerHTML = element.actor.avatar_url;
  //   document.body.appendChild(para);
  // });
  // console.log(result);
}

setInterval(getNotification, 120000);

// btn.addEventListener('click', getNotification);
