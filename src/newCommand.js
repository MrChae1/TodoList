import './style/style.scss';

//removeClass
export const removeClass = (navBtn) => {
    navBtn.forEach(key => key.classList.remove('special-btn'));
}

/**
 * Change the style of navigation buttons based on the clicked element's class.
 * @param {Event} event - The click event.
 * @param {HTMLElement[]} navBtn - An array of navigation buttons.
 */
export const changeNav = (event, navBtn) => {
    // Define class-to-button mappings
    const classToButton = {
        'Home-btn': 0,
        'Task-btn': 1,
        'Notes-btn': 2,
        'C-tasks': 0,
        'C-notes': 1,
        'low': 0,
        'medium': 1,
        'high': 2,
        'desc-low': 0,
        'desc-medium': 1,
        'desc-high': 2,
    };

    // Get the clicked element's class
    const clickedClass = event.target.className;

    // Check if the class exists in the mapping
    if (classToButton.hasOwnProperty(clickedClass)) {
        const buttonIndex = classToButton[clickedClass];
        // Add the 'special-btn' class to the corresponding button
        navBtn[buttonIndex].classList.add('special-btn');
    } else {
        // Handle the default case, e.g., adding 'special-btn' to HomeButton
        navBtn[0].classList.add('special-btn');
    }
}


//Show specific Section depends on the button clicked in nav
export const showSection = (navBtn, allSection, plusIcon) => {
    allSection.forEach(key => key.style.display = 'none');
    plusIcon.style.display = 'block';
    if(navBtn[0].classList.contains('special-btn')){
        allSection[0].style.display = 'block'; //forHome Section 
        plusIcon.style.display = 'none';
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