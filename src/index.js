import './style/style.scss';
import { tasksLocalStorage } from './appendCommand';
import { updateDynamicDate } from './HomeSection';


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
            module.showSection(navBtn, allSection, plusIcon);
        })
        .catch(error => {
            console.error('Error while importing module: ', error);
        });
    });

    const asideTag = document.createElement('aside');
    asideTag.innerHTML = `
        <main> 
            <section>
                <header>${updateDynamicDate()}</header> 
            </section>
            <section class="tasksSection">
            </section>
            <section class="notesSection"> 
            </section>
            <svg class="asideSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>   
        </main>
    `;
    const allSection = Array.from(asideTag.querySelectorAll('section'));
    const plusIcon = asideTag.querySelector('.asideSVG');
    plusIcon.addEventListener('click', () =>{
        import('./print').then(module => {
           module.forModals(mainContainer); 
        })
    });

    const footerTag = document.createElement('footer');
    footerTag.innerHTML = `
        <p>&copy; 2023 TodoThis. All rights reserved.</p>
    `;

    if(localStorage){
        import('./appendCommand').then(module =>{
            module.tasksLocalStorage(allSection[1]);
            module.notesLocalStorage(allSection[2]);
        });
    }

    mainContainer.append(headerTag, navTag, asideTag, footerTag);
    
    return mainContainer;
}




document.body.appendChild(component());
    