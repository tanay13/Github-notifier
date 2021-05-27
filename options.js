var repo = document.getElementById('repolink');
var save = document.getElementById('repo');
var val = repo.value;

chrome.storage.get('repo', (repo) => {
  val = repo.repo;
});

save.addEventListener('click', () => {
  chrome.storage.set({ repo: val }, () => {
    close();
  });
});
