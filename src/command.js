import { localNull, notNull } from './appendCommand';
import './style/style.scss';

let tasksArray = [];
let notesArray = [];
const nullLocal = localNull();
const notesNull = notNull();

function addNew(title, desc, date, prio, index, checked){
    this.title = title,
    this.desc = desc,
    this.index = index
    this.date = date,
    this.prio = prio,  
    this.checked = checked
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
export const exitBtn = (child) => {
    child.remove();
}


export const verifyValue = (anyData, modalBtn, selected, modalTag, Section) => {
    const getData = anyData.map(key => key.value);
    const allHaveValue = getData.every(value => value !== '' && value !== null);
    if(allHaveValue){
        import('./appendCommand').then(module => {
            if(modalBtn[0].classList.contains('special-btn')){
                if(nullLocal !== 0){
                    tasksArray = nullLocal;
                }
                getData.push(selected.value, tasksArray.length, false);
                const newTasks = new addNew(...getData);
                tasksArray.push(newTasks);
                module.updateLocal(tasksArray, 1);
                appendTasks(tasksArray[tasksArray.length-1], Section);
            }
            else{
                if(notesNull !== 0){
                     notesArray = notesNull;
                }
                getData.push('none', 'none', notesArray.length, 'none');
                const newNotes = new addNew(...getData);
                notesArray.push(newNotes);
                module.updateLocal(notesArray, 2)
                appendTasks(notesArray[notesArray.length-1], Section);
            }
        });
        
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
export const appendTasks = (array, section) => {
    if(section.classList.contains('tasksSection')){
            const mainDiv = document.createElement('div');
            mainDiv.classList.add('tasks-div');
            mainDiv.setAttribute("data-index", array.index);
            const subDiv = document.createElement('div');
            subDiv.classList.add('tasks');
            changePrio(array.prio, mainDiv);
            subDiv.innerHTML = `
                <input type="checkbox" name="myCheckbox" id="myCheckbox" value="checkboxValue" >
                <label>${array.title}</label>
                <button>Details</button>
                <p>${array.date}</p>
                <svg class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>
            `;

            
            const allSubBtn = Array.from(subDiv.querySelectorAll('*'));
            //Checkbox button
            boxChange(allSubBtn[0],allSubBtn[1], mainDiv, subDiv, array.checked, array.index);
            allSubBtn[0].addEventListener('change', function(e){
                if(e.target.checked){
                    array.checked = true;
                    boxChange(allSubBtn[0], allSubBtn[1], mainDiv, subDiv, array.checked, array.index);
                }
                else{
                    array.checked = false;
                    boxChange(allSubBtn[0], allSubBtn[1], mainDiv, subDiv, array.checked, array.index);
                }
                
            });

            //Details button
            allSubBtn[2].addEventListener('click', () => {
                import('./tasksCommand').then(module => {
                    module.ShowDetails(allSubBtn, array, mainDiv, tasksArray);
                });
            });

            //Delete Button
            allSubBtn[4].addEventListener('click', () =>{
                removeTasks(array.index,  tasksArray, section);
            });

            mainDiv.append(subDiv);
            section.append(mainDiv);
    }
    else{
            const mainDiv = document.createElement('div');
                mainDiv.classList.add('Notes-div');
                mainDiv.innerHTML = `
                    <header>
                        <h2>${array.title}</h2>
                        <h4 class="notes-del">X</h4>
                    </header>
                    <div class="notes-parag">
                        <p>${array.desc}</p>
                    </div>
                    `;
                const notesExit = mainDiv.querySelector('h4');
                const NotesPara = mainDiv.querySelector('.notes-parag');
                const Execute = (element, fn) => {
                    element.addEventListener('click', () => {
                        import('./notesCommand').then((module) => fn(module));
                    });
                };
                Execute(notesExit,(module) => {
                    module.NotesDelete(mainDiv, notesArray, array.index);

                });
                
                Execute(NotesPara, (module) =>{
                    module.EditNotes(notesArray, array, mainDiv);
                });
                
                section.append(mainDiv);
    }
}

export const changePrio = (prioColor, Main) => {
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

export const boxChange = (checkBox, label,tasksDiv, subDiv, updateCheck, currentIndex,) => {
    const getTasks = localStorage.getItem('tasks');
    const parseItem = JSON.parse(getTasks);
        if(updateCheck === true){
            label.style.cssText = 'text-decoration-line: line-through; text-decoration-thickness: 3px; text-decoration-style: solid'; //This is label
            tasksDiv.style.boxShadow = 'none';
            subDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            parseItem[currentIndex].checked = true;
            checkBox.checked = true;
        }
        else{
            label.style.textDecoration = 'none'; //This is label
            tasksDiv.style.boxShadow = '2px 2px 5px 2px rgba(0, 0, 0, 0.5)';
            subDiv.style.backgroundColor = '#fff'; 
            parseItem[currentIndex].checked = false;
            checkBox.checked = false;
        }
    tasksArray = parseItem; 
    import('./appendCommand').then(module => {
        module.updateLocal(tasksArray, 1);
    });
    
}

const removeTasks = (index, array, section) => {
    array.splice(index, 1);
    const elementsToRemove = document.querySelector(`[data-index="${index}"]`);
    exitBtn(elementsToRemove);
    const newSection = Array.from(section.querySelectorAll('.tasks-div'));
    for(let i = 0; i < array.length; i++){
        newSection[i].setAttribute('data-index', i);
        array[i].index = i;
    }
    import('./appendCommand').then(module => {
        module.updateLocal(array, 1);
    });
}



