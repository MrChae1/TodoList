import './style/style.scss';

//removeClass
export const removeClass = (navBtn) => {
    navBtn.forEach(key => key.classList.remove('special-btn'));
}

//Add class special nav
export const changeNav = (event, navBtn) => {
    if(event.target.className === 'Home-btn'){
        navBtn[0].classList.add('special-btn'); // HomeButton
        // showSection(navBtn[0]); 
    }
    else if(event.target.className === 'Task-btn'){
        navBtn[1].classList.add('special-btn'); // TasksButton
        // showSection(navBtn[1]);  
    }
    else if(event.target.className === 'Notes-btn'){
        navBtn[2].classList.add('special-btn'); // NotesButton
        // showSection(navBtn[2]); 
    }      
}

//Show specific Section depends on the button clicked in nav
export const showSection = (navBtn, aside) => {
    const allSection = Array.from(aside.querySelectorAll('section'));
    allSection.forEach(key => key.style.display = 'none');
    if(navBtn[0].classList.contains('special-btn')){
        allSection[0].style.display = 'block'; 
    }
    else if(navBtn[1].classList.contains('special-btn')){
        allSection[1].style.display = 'grid'; 
    }
    else if(navBtn[2].classList.contains('special-btn')){
        allSection[2].style.display = 'grid';
    }
}






    // return {changeNav}
// } 

// export function command(mainContainer){
    
//     function commandRun(){
//         const changeNav = (nav, allSection) => {
//             nav.addEventListener('click', function(event){
//                 if(nav.classList.contains('main-nav')){
//                     mainNav(event, nav, allSection);
//                 }
//             });
//         }
//         const mainNav = (e, nav, allSection) => {
//             const navBtn = Array.from(nav.querySelectorAll('button'));
//             navBtn.forEach(key => key.classList.remove('special-btn'));
//             allSection.forEach(key =>key.style.display = 'none');
//             if(e.target.className === 'Home-btn'){
//                 navBtn[0].classList.add('special-btn'); // HomeButton
//                 allSection[0].style.display = 'block'; // Show Home Section
//             }
//             else if(e.target.className === 'Task-btn'){
//                 navBtn[1].classList.add('special-btn'); // TasksButton
//                 allSection[1].style.display = 'grid'; // Show Task Section
//             }
//             else if(e.target.className === 'Notes-btn'){
//                 navBtn[2].classList.add('special-btn'); // NotesButton
//                 allSection[2].style.display = 'grid'; // Show Notes Section
//             }
//         }

//         //The Plus Icon is clicked
//         const showModals = () => {
//             // mainContainer.appendChild(subModals.forModals());
//         }

//         return{changeNav , showModals}
        
//     }
//     function commandClick(){
//         const runCom = commandRun();
//         const navTag = mainContainer.querySelector('nav');
//         const asideTag = mainContainer.querySelector('aside');
//         const allSection = Array.from(asideTag.querySelectorAll('section'));
//         const plusIcon = asideTag.querySelector('.asideSVG');
//         const changeSection = () => {
//             runCom.changeNav(navTag, allSection);
//         }
//         const AddNew = () =>{
//             plusIcon.addEventListener('click', () =>{
//                 runCom.showModals();
//             });
//         }

//         changeSection();
//         AddNew();
        
//     }
//     const runCommand = commandClick();
// }