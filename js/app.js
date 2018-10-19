// const apiKey = '6f4fa5447bb24a2687edecc4c1df43b4';
// const defaultSource = 'the-washington-post';
// const sourceSelector = document.querySelector('#sources');
// const newsArticles = document.querySelector('main');
const taskList = document.querySelector('.task-list');


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'Service Worker registration failed'));
}


window.addEventListener('load', e => {
  //sourceSelector.addEventListener('change', evt => updateNews(evt.target.value));
  //updateNewsSources().then(() => {
  //  sourceSelector.value = defaultSource;
    updateTasks();
  //});
});

//window.addEventListener('online', () => updateNews(sourceSelector.value));

// async function updateNewsSources() {
//   //const response = await fetch(``);
//   //const json = await response.json();
//   sourceSelector.innerHTML =
//     json.sources
//       .map(source => `<option value="${source.id}">${source.name}</option>`)
//       .join('\n');
// }

function updateTasks() {
  taskList.innerHTML = '';
  //const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&sortBy=top&apiKey=${apiKey}`);
  //const json = await response.json();
  taskList.innerHTML =
    allTasks.map(createTask).join('\n');
}

/*
async function updateTasks() {
  newsArticles.innerHTML = '';
  const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&sortBy=top&apiKey=${apiKey}`);
  const json = await response.json();
  newsArticles.innerHTML =
    json.articles.map(createArticle).join('\n');
}
*/



// async function updateNews(source = defaultSource) {
//   newsArticles.innerHTML = '';
//   const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&sortBy=top&apiKey=${apiKey}`);
//   const json = await response.json();
//   newsArticles.innerHTML =
//     json.articles.map(createArticle).join('\n');
// }

function createTask(task) {
  return `
      <li class="task">${task.name}</li>
  `;
}
