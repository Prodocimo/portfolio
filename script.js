const Projects = document.querySelector('.card-projects');
const ProjectsBtnOpen = document.querySelector('.projects-btn-open');
const ProjectsBtnClose = document.querySelector('.projects-btn-open.projects-btn-close');


ProjectsBtnOpen.onclick = function() {
        Projects.classList.toggle('card-projects-opened');
        ProjectsBtnOpen.classList.toggle('projects-btn-close')
    } 

    