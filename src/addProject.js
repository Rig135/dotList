import { saveProjects } from "./storage.js";
export const Project = {
    default: [],
    gym: [],
    work: [],
    random: []
};

export  function CreateProjects(name) {
    let currentProject;
    //if Project Exists -> traverse Projects and check if project exists -> if exists => alert(project already there)
    if (Project[name]) {
        console.log("Project already exists");
        return;
    }

    //if Project doesnt exist -> create Project
    Project[name] = [];
    saveProjects();
    currentProject = name;

    return currentProject;
}
