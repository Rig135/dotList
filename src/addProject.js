export const Project = {
    default : []
}

export default function CreateProjects(name){
    let currentProject;
    //if Project Exists -> traverse Projects and check if project exists -> if exists => alert(project already there)
    if(Project[name]){
        console.log("Project already exists");
        return;
    }

    //if Project doesnt exist -> create Project
    Project[name] = [];
    currentProject = name;

    return currentProject;
}

