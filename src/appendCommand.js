import './style/style.scss';

let tasksArray = [];
let notesArray = [];

export const tasksLocalStorage = (tasksSection) => {

    if(localNull() !== 0){
        for(const localTasks of localNull()){
            import('./command').then(module => {
                module.appendTasks(localTasks, tasksSection);
            });
        }
    }
}

export const notesLocalStorage = (notesSection) => {
    if(notNull() !== 0){
        for(const localNotes of notNull()){
            import('./command').then(module => {
                module.appendTasks(localNotes, notesSection);
            });
        }
    }
}

export const localNull = () => {
    const localItems = JSON.parse(localStorage.getItem('tasks'));
    if(localItems != null){
        return localItems;
    }
    else{
        return 0;
    }
}

export const notNull = () => {
    const localItems = JSON.parse(localStorage.getItem('notes'));
    if(localItems != null){
        return localItems;
    }
    else{
        return 0;
    }
}

export const updateLocal = (thisArray, wArr) => {
    const appendThis = JSON.stringify(thisArray);
    if(wArr === 1){
        localStorage.setItem('tasks', appendThis);
    }
    else{
        localStorage.setItem('notes', appendThis); 
    }
}
