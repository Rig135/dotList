export default class List{

    constructor(title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.completed = false;
    }

    //class methods
    toggle(){
        this.completed = !this.completed;
    }
    
}