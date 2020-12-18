import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')


const projectsList = document.querySelector('.project--js');

fetch("https://api.github.com/users/Dawid-Klos/repos?sort=created&direction=asc")
  .then(resp => resp.json())
  .then(resp => {
   for (let repo of resp) {
    const {name, description, html_url} = repo;
    const repositoryList = document.querySelector('.project--js');
    const myTemplate = `
    <ul class="project">
    <li class="project__name"><span class="project__name--left">project</span> : <span class="project__content--right"><strong>${name}</strong></span> </li>
    <li class="project__description"><span class="project__name--left">description</span> : <span class="project__content--right">${description}</span> </li>
    <li class="project__demo"><span class="project__name--left">demo</span> : <span class="project__content--right"><a href="${html_url}" title="This is link to ${name} repository from my GitHub list">see here</a></span></li>
    <li class="project__source"><span class="project__name--left">github</span> : <span class="project__content--right"><a href="https://github.com/Dawid-Klos/${name}" alt="This is a soruce code of ${name} project.">source-code</a></span></li>
    </ul>
    `;
     repositoryList.innerHTML += myTemplate;
  }
})
  .catch(error => {
  console.log('error');
})