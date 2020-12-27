import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')


const projectsList = document.querySelector('.project--js');

fetch("https://api.github.com/users/Dawid-Klos/repos?sort=created&direction=desc")
  .then(resp => resp.json())
  .then(resp => {
   for (let repo of resp) {
    const {name, description, html_url, homepage} = repo;
    const repositoryList = document.querySelector('.project--js');
    const myTemplate = `
    <ul class="project">
    <li class="name">
    <span class="name__left project--left">project</span>:<span class="name__content project--right"><strong>${name}</strong></span>
     </li>

    <li class="description">
    <span class="description__left project--left">description</span>:<span class="description__content project--right">${description}</span> 
    </li>

    <li class="demo">
    <span class="demo__left project--left">demo</span>:<span class="demo__content project--right">\<<a class="project--link" href="${homepage}" target="_blank" rel="noopener" alt="This is link to ${name} repository from my GitHub list">see here</a>\></span>
    </li>

    <li class="source">
    <span class="source__left project--left">github</span>:<span class="source__content project--right">\<<a class="project--link" href="${html_url}" target="_blank" rel="noopener" alt="This is a soruce code of ${name} project.">source-code</a>\></span>
    </li>
    </ul>
    `;
    
      repositoryList.innerHTML += myTemplate;

  }
})
  .catch(error => {
  console.log('error');
})