import './style/style.scss';


function component(){ 
    const mainContainer = document.createElement('main');
    mainContainer.classList.add('mainCon');
    const headerTag = document.createElement('header');
    headerTag.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>hand-pointing-right</title><path d="M21,9A1,1 0 0,1 22,10A1,1 0 0,1 21,11H16.53L16.4,12.21L14.2,17.15C14,17.65 13.47,18 12.86,18H8.5C7.7,18 7,17.27 7,16.5V10C7,9.61 7.16,9.26 7.43,9L11.63,4.1L12.4,4.84C12.6,5.03 12.72,5.29 12.72,5.58L12.69,5.8L11,9H21M2,18V10H5V18H2Z" /></svg>
        <h1>TodoThis</h1>
    `;
    
    const navTag = document.createElement('nav');
    navTag.innerHTML = `
        <button class="Home-btn special-btn">HOME</button>
        <button class="Task-btn">TASKS</button>
        <button class="Notes-btn">NOTES</button>
    `;
    const navBtn = Array.from(navTag.querySelectorAll('button'));
    navTag.addEventListener('click', function(event){
        import('./command').then(module => {
            module.removeClass(navBtn);
            module.changeNav(event, navBtn);
            module.showSection(navBtn, asideTag);
        })
        .catch(error => {
            console.error('Error while importing module: ', error);
        });
    });

    const asideTag = document.createElement('aside');
    asideTag.innerHTML = `
        <main> 
            <section>
                <p>Hi</p>   
            </section>
            <section>
                <p>He</p>  
            </section>
            <section> 
                <p>Ho</p>  
            </section>
            <svg class="asideSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>   
        </main>
    `;

    const footerTag = document.createElement('footer');
    footerTag.innerHTML = `
        <p>&copy; 2023 TodoThis. All rights reserved.</p>
    `;

    const modalTag = document.createElement('div');
    modalTag.classList.add('section-modals');
    modalTag.innerHTML = `
        <div class="modals">
            <header>
                <h2>CREATE NEW...</h2>
                <h4>X</h4>
            </header>
            <nav class="nav-modal">
                <button class="C-tasks special-btn">TASKS</button>
                <button class="C-notes">NOTES</button>
            </nav>
            <div class="sub-modals">
                <div class="tasks-modals">
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
                <div class="notes-modals">
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



    mainContainer.append(headerTag, navTag, asideTag, footerTag);
    
    return mainContainer;
}




document.body.appendChild(component());
    