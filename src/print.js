import './style/style.scss';
// import { localNull } from './appendCommand';
export function forModals(mainCon){
    const modalTag = document.createElement('div');
    modalTag.classList.add('section-modals');
    modalTag.innerHTML = `
        <div class="modals">
            <header>
                <h2>CREATE NEW...</h2>
                <h4 class='forExit'>X</h4>
            </header>
            <nav class="nav-modal">
                <button class="C-tasks special-btn">TASKS</button>
                <button class="C-notes">NOTES</button>
            </nav>
            <div class="sub-modals">
                <div class="tasks-modals main-sub">
                    <div class="tasks-inputs">
                        <input type="text" placeholder="TITLE">
                        <textarea name="tasks-text" id="tasks-text" cols="30" rows="10" placeholder="Tell me something about this tasks?"></textarea>
                    </div>
                    <div class="tasks-dates">
                        <label for="tasksDates">Due Dates: </label>
                        <input type="date" id="tasksDates">
                    </div>
                    <div class="tasks-Prioprity">
                        <h3>Priority:</h3>
                        <div class="prio-btn">
                            <button class="low special-btn" value="low">LOW</button>
                            <button class="medium" value="medium">MEDIUM</button>
                            <button class="high" value="high">HIGH</button>
                        </div>     
                    </div> 
                </div>
                <div class="notes-modals main-sub">
                    <div class="notes-inputs">
                        <input type="text" placeholder="TITLE">
                        <textarea name="notes-text" id="notes-text" cols="30" rows="10" placeholder="Tell me something about this notes?"></textarea>
                    </div>
                </div>
                <div class="modals-btn">
                    <button class="modals-add">ADD NEW</button>
                </div>
            </div>
        </div>
        `;

        


    

    mainCon.appendChild(modalTag);
}


        // const aside = mainCon.querySelector('aside');
        // const allSection = Array.from(aside.querySelectorAll('section'));
        // const modalHeader = modalTag.querySelector('header');
        // const modalNav = modalTag.querySelector('nav');
        // const MNavbtn = Array.from(modalNav.querySelectorAll('button'));
        // const mainSubmodals = Array.from(modalTag.querySelectorAll('.main-sub'));
        // const exitBtn = modalHeader.querySelector('h4');
        // const addBtn = modalTag.querySelector('.modals-add');
        // const tasksModals = modalTag.querySelector('.tasks-modals');
        // const allTasksData = Array.from(tasksModals.querySelectorAll('*'));
        // const tasksInputs = [allTasksData[1], allTasksData[2], allTasksData[5]];
        // const notesModals = modalTag.querySelector('.notes-modals');
        // const allNotesData = Array.from(notesModals.querySelectorAll('*'));
        // const notesInputs = [allNotesData[1], allNotesData[2]];
        // const prioBtn = Array.from(allTasksData[8].querySelectorAll('button'));
        // // Import the 'command' module once at the beginning of your script
        // import('./command')
        // .then((module) => {
        // modalNav.addEventListener('click', (event) => {
        //     module.removeClass(MNavbtn);
        //     module.changeNav(event, MNavbtn);
        //     module.ShowDiv(MNavbtn, mainSubmodals);
        // });

        // exitBtn.addEventListener('click', () => {
        //     module.exitBtn(modalTag);
        // });

        // allTasksData[8].addEventListener('click', function(event){
        //     module.removeClass(prioBtn);
        //     module.changeNav(event, prioBtn);
        // });

        // addBtn.addEventListener('click', () =>{
        //     if(MNavbtn[0].classList.contains('special-btn')){
        //         const selectedPrio = allTasksData[8].querySelector('.special-btn');
        //         module.verifyValue(tasksInputs, MNavbtn, selectedPrio, modalTag, allSection[1]);

        //     }
        //     else if(MNavbtn[1].classList.contains('special-btn')){
        //         module.verifyValue(notesInputs, MNavbtn, null, modalTag, allSection[2]);
                
        //     }
        // });

        // })
        // .catch((error) => {
        // console.error('Error while importing module: ', error);
        // });
