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
    <li> project: <strong>${name}</strong> </li>
    <li>description: ${description} <br /> </li>
    <li>demo: <a href="${html_url}" title="This is link to ${name}    repository from my GitHub list">see here</a></li>
    <li>github: <a href="https://github.com/Dawid-Klos/${name}" alt="This is a soruce code of ${name} project.">source-code</a></li>
    </ul>
    `;
     repositoryList.innerHTML += myTemplate;
  }
})
  .catch(error => {
  console.log('error');
})