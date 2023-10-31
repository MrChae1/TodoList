import './style/style.scss';

let tasksArray = [];
let notesArray = [];

export const tasksLocalStorage = (tasksSection) => {

}

export const notesLocalStorage = (notesSection) => {

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
