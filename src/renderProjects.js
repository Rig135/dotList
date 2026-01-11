import { Project } from "./addProject.js";

export default function renderProjects() {
    const container = document.querySelector('#projects');
    container.innerHTML = "";

    const ProjectSelect = document.querySelector('#projectSelect');
    ProjectSelect.innerHTML = "";

    for (let projectName of Object.keys(Project)) {
        const para = document.createElement('p');
        para.innerText = projectName;
        container.appendChild(para);

        //Adding Select Options as well
        const option = document.createElement('option');
        option.innerText = projectName;
        ProjectSelect.appendChild(option);
    }

}