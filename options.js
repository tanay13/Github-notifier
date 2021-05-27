var repo = document.getElementById('repolink');
var save = document.getElementById('repo');

// chrome.storage.sync.get('repo', (repo) => {
//   val = repo.repo;
// });

save.addEventListener('click', () => {
  var val = repo.value;
  console.log(val);
  chrome.storage.sync.set({ repo: val });
  chrome.storage.sync.get(['repo'], (repo) => {
    console.log(repo.repo);
  });
});
