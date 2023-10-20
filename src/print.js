import './style/style.scss';

export function forModals(mainCon){
    const modalTag = document.createElement('div');
    modalTag.classList.add('section-modals');
    modalTag.innerHTML = `
        <div class="modals">
            <header>
                <h2>CREATE NEW...</h2>
                <h4>X</h4>
            </header>
            <nav class="nav-modal">
                <button class="C-tasks special-Nav">TASKS</button>
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
                            <button class="low selected-prio" value="low">LOW</button>
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
            <div class="errorPopUp">
                <header>
                    <h2>Something Missing</h2>
                    <h4 class="inerror">X</h4>
                </header>
                <div class="errorMessage">
                    <p>Please provide needed data....</p>
                </div> 
            </div>
        </div>
        `;
        // Import the 'command' module once at the beginning of your script
        import('./command')
        .then((module) => {
        const modalHeader = modalTag.querySelector('header');
        const modalNav = modalTag.querySelector('nav');
        const MNavbtn = Array.from(modalNav.querySelectorAll('button'));
        const mainSubmodals = Array.from(modalTag.querySelectorAll('.main-sub'));
        const exitBtn = modalHeader.querySelector('h4');

        modalNav.addEventListener('click', (event) => {
            module.removeClass(MNavbtn);
            module.changeNav(event, MNavbtn);
            module.ShowDiv(MNavbtn, mainSubmodals);
        });

        exitBtn.addEventListener('click', () => {
            module.exitBtn(modalTag);
        });
        })
        .catch((error) => {
        console.error('Error while importing module: ', error);
        });

    

    mainCon.appendChild(modalTag);
}
