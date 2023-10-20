import './style/style.scss';

//removeClass
export const removeClass = (navBtn) => {
    navBtn.forEach(key => key.classList.remove('special-btn'));
    navBtn.forEach(key => key.classList.remove('special-Nav'));
}

//Add class special nav
export const changeNav = (event, navBtn) => {
    if(event.target.className === 'Home-btn'){
        navBtn[0].classList.add('special-btn'); // HomeButton 
    }
    else if(event.target.className === 'Task-btn'){
        navBtn[1].classList.add('special-btn'); // TasksButton
    }
    else if(event.target.className === 'Notes-btn'){
        navBtn[2].classList.add('special-btn'); // NotesButton
    }
    else if(event.target.className === 'C-tasks'){
        navBtn[0].classList.add('special-btn');
    }
    else if(event.target.className === 'C-notes'){
        navBtn[1].classList.add('special-btn');
    }
    else {
        navBtn[0].classList.add('special-btn'); // HomeButton
    }      
}

//Show specific Section depends on the button clicked in nav
export const showSection = (navBtn, allSection) => {
    allSection.forEach(key => key.style.display = 'none');
    if(navBtn[0].classList.contains('special-btn')){
        allSection[0].style.display = 'block'; //forHome Section 
    }
    else if(navBtn[1].classList.contains('special-btn')){
        allSection[1].style.display = 'grid';//forTasks Section 
    }
    else if(navBtn[2].classList.contains('special-btn')){
        allSection[2].style.display = 'grid'; //forNotes Section
    }
}

export const ShowDiv = (modalNav, mainDiv) => {
    mainDiv.forEach(key => key.style.display = 'none');
    if(modalNav[0].classList.contains('special-btn')){
        mainDiv[0].style.display = 'grid'; //forHome Section 
    }
    else if(modalNav[1].classList.contains('special-btn')){
        mainDiv[1].style.display = 'flex';//forTasks Section 
    }
}
export const exitBtn = (child) => {
    child.remove();
}

