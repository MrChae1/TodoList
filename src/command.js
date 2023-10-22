import './style/style.scss';

let tasksArray = [];
let notesArray = [];


function addNew(title, desc, date, prio, index){
    this.title = title,
    this.desc = desc,
    this.index = index
    this.date = date,
    this.prio = prio  
}

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


export const verifyValue = (anyData, modalBtn, selected, modalTag, Section) => {
    const getData = anyData.map(key => key.value);
    const allHaveValue = getData.every(value => value !== '' && value !== null);
    if(allHaveValue){
        if(modalBtn[0].classList.contains('special-btn')){
            getData.push(selected.value, tasksArray.length);
            const newTasks = new addNew(...getData);
            tasksArray.push(newTasks);
            Section.textContent = ``;
            appendTasks(tasksArray, Section);
        }
        else{
            getData.push(notesArray.length);
            const newNotes = new addNotes(...getData);
            notesArray.push(newNotes);
        }
        exitBtn(modalTag);
        
    }
    else{
        invalidModal();
    }
}

const invalidModal = () => {
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-container');
    const ErrorTag = document.createElement('div');
    ErrorTag.classList.add('errorPopUp');
    ErrorTag.innerHTML = `
        <header>
            <h2>Something Missing</h2>
            <h4 class="inerror">X</h4>
        </header>
        <div class="errorMessage">
            <p>Please provide needed data....</p>
        </div> 
    `;

    const ErrorExit = ErrorTag.querySelector('h4');
    ErrorExit.addEventListener('click', () => {
        exitBtn(errorContainer);
    });
    errorContainer.appendChild(ErrorTag);
    document.body.appendChild(errorContainer);
}

const appendTasks = (array, section) => {
    if(section.classList.contains('tasksSection')){
        for(const arrayTasks of array){
            const mainDiv = document.createElement('div');
            mainDiv.classList.add('tasks-div');
            mainDiv.setAttribute("data-index", arrayTasks.index);
            const subDiv = document.createElement('div');
            subDiv.classList.add('tasks');
            changePrio(arrayTasks.prio, mainDiv);
            subDiv.innerHTML = `
                <input type="checkbox" name="myCheckbox" id="myCheckbox" value="checkboxValue" >
                <label for="myCheckbox">${arrayTasks.title}</label>
                <button>Details</button>
                <p>${arrayTasks.date}</p>
                <svg class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>
            `;
            const allSubBtn = Array.from(subDiv.querySelectorAll('*'));
            //Checkbox button
            allSubBtn[0].addEventListener('change', function(e){
                boxChange(e, allSubBtn[1]);
            });

            //Details button
            allSubBtn[2].addEventListener('click', () => {
                console.log('Hello');
                ShowDetails(subDiv, arrayTasks);
            });

            //Delete Button
            allSubBtn[4].addEventListener('click', () =>{
                removeTasks(arrayTasks.index, array, section);
            });

            mainDiv.append(subDiv);
            section.append(mainDiv);
        }
    }
}

const changePrio = (prioColor, Main) => {
    if(prioColor === 'low'){
        Main.style.backgroundColor = 'yellowgreen';
    }
    else if(prioColor === 'medium'){
        Main.style.backgroundColor = 'rgb(137, 137, 87)';
    }
    else if(prioColor === 'high'){
        Main.style.backgroundColor = 'rgb(44, 20, 195)';
    }
}

const boxChange = (e, label) => {
    if(e.target.checked){
        label.style.cssText = 'text-decoration-line: line-through; text-decoration-thickness: 3px; text-decoration-style: solid'; //This is label
    }
    else{
        label.style.textDecoration = 'none'; //This is label
    } 
}

const ShowDetails = (alltasks, array) => {
    const detailMain = document.createElement('div');
    detailMain.classList.add('detailMain');
    const detailSub = document.createElement('div');
    detailSub.classList.add('detailSub');
    detailSub.innerHTML = `
        <h4>X</h4>
        <div class="details-title">
            <label>Tasks: </label>
            <p>${array.title}</p>
            <input type="text" class="tasksTitle" value='${array.title}'>
        </div>
        <div class="details-desc">
            <label>Tasks Description:</label>
            <div class="desc-container">
                <p>${array.desc}</p>
                <textarea name="tasks-desc" id="tasks-text" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div class="details-date">
            <label>Tasks Due Date: </label>
            <p>${array.date}</p>
            <input type="date" id="desc-Date">
        </div>
        <div class="details-Prio">
            <label>Priority Level: </label>
            <p>${array.prio}</p>
            <div class="desc-prio">
                <button>Low</button>
                <button>Medium</button>
                <button>High</button>
            </div>
        </div>
        <div class="Desc-btn">
            <div class="desc-edit">
                <button>Edit Tasks</button>
            </div>
            <div class="Edit-btn">
                <button class="Save-edit">Save Tasks</button>
                <button class="Cancel-Edit">Cancel</button>
            </div>
        </div>
    `;
    const textArea = detailSub.querySelector('textarea');
    textArea.value = `${array.desc}`;
    const detailExit = detailSub.querySelector('h4');
    detailExit.addEventListener('click', () => {
        exitBtn(detailMain);
    });
    detailMain.appendChild(detailSub);
    document.body.appendChild(detailMain);
}

const removeTasks = (index, array, section) => {
    // let newIndex = 0;
    const newArray = [];
    array.splice(index, 1);
    const elementsToRemove = document.querySelector(`[data-index="${index}"]`);
    exitBtn(elementsToRemove);
    for(const newAdd of array){
        newAdd.index = newArray.length;
        const myArray = Object.values(newAdd);
        myArray.splice(2, 1);
        myArray.push(newAdd.index);
        const newerAdd = new addNew(...myArray);
        newArray.push(newerAdd);  
    }
    array = newArray;
    section.innerHTML = ``;
    appendTasks(tasksArray, section);
}


