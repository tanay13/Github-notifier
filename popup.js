var btn = document.getElementById('getNot');
async function getNotification() {
  const response = await fetch(
    'https://api.github.com/users/tanay13/received_events/public?per_page=5&page=1'
  );
  const result = await response.json();

  result.forEach((element) => {
    const para = document.createElement('p');
    para.innerHTML = element.actor.avatar_url;
    document.body.appendChild(para);
  });
  console.log(result);
}

btn.addEventListener('click', getNotification);
