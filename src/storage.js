import { Project } from "./addProject.js";
import List from "./List.js"

export function saveProjects(){
    localStorage.setItem("projects",JSON.stringify(Project));
}

export function loadProjects(){
    const data = JSON.parse(localStorage.getItem("projects"));

    if(data){
        //clear existing data
        for(let key in Project){
            delete Project[key];
        }

        //The todos are now plain objects, NOT instances of List class. so toggle will not work anymore
        for (let key in data) { //key iterates over the projects i.e "default" ,"gym" ,"work"
            Project[key] = data[key].map(todo => {
                const t = new List(
                todo.title,
                todo.description,
                todo.dueDate,
                todo.priority,
                todo.project
            );
            t.completed = todo.completed;
            return t;
            });
        }
    }
}