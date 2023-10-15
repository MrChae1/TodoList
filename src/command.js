import './style/style.scss';

export function command(){
    function commandRun(){
        const navClick = (event, nav) =>{
            const btn = Array.from(nav.querySelectorAll('button'));
                if(event.target.className === 'Home-btn'){
                    navVerify(btn[0], btn);
                }
                else if(event.target.className === 'Task-btn'){
                    navVerify(btn[1], btn);
                }
                else if(event.target.className === 'Notes-btn'){
                    navVerify(btn[2], btn);                
                }
        }
        const navVerify = (navBtn, allbtn) =>{
            const allSection = Array.from(document.querySelectorAll('section'));
            allSection.forEach(key => key.style.display = 'none');
            allbtn.forEach((key) => {
                key.classList.remove('special-btn');
                key.disabled = false;
              });
            if(navBtn.classList.contains('Home-btn')){
                navBtn.classList.add('special-btn');
                navBtn.disabled = true;
                allSection[0].style.display = allSection[0].style.display === 'none' ? 'grid' : 'none';        
            }
            else if(navBtn.classList.contains('Task-btn')){
                navBtn.classList.add('special-btn');
                allSection[1].style.display = allSection[1].style.display === 'none' ? 'grid' : 'none'; 
                navBtn.disabled = true;            
            }
            else if(navBtn.classList.contains('Notes-btn')){
                navBtn.classList.add('special-btn');
                allSection[2].style.display = allSection[2].style.display === 'none' ? 'grid' : 'none';
                navBtn.disabled = true;           
            }
        }

        const displayModals = (mainModals, modalsArr) => {
            mainModals.style.display = 'flex';
            const headerTag = mainModals.querySelector('header');
            const exitBtn = headerTag.querySelector('h4');
            exitBtn.addEventListener('click', () => {
                mainModals.style.display = 'none';
                modalsArr[0].style.display = 'grid';
                modalsArr[1].style.display = 'none';
            });
        }

        const modalsNav = (e, mNav, modalsArray) => {
            const mnBtn = Array.from(mNav.querySelectorAll('button'));  
            if(e.target.className === 'C-tasks'){
                modalNavChange(mnBtn,mnBtn[0], modalsArray);
            }
            else if(e.target.className === 'C-notes'){
                modalNavChange(mnBtn,mnBtn[1],modalsArray);
            }
        }
        const modalNavChange = (mnBtn, spec, modalsArray) => {
            mnBtn.forEach(key => key.classList.remove('special-btn'));
            modalsArray.forEach(key => key.style.display = 'none'); 
            if(spec.classList.contains('C-tasks')){
                spec.classList.add('special-btn');
                modalsArray[0].style.display = 'grid';
            }
            else if(spec.classList.contains('C-notes')){
                spec.classList.add('special-btn');
                modalsArray[1].style.display = 'flex';
            }
        }
        const getData = (navBtn, modalsArray) => {
            const tasksinput = modalsArray[0].querySelectorAll('input');
            const taskstext = modalsArray[0].querySelector('#tasks-text');
            const btnPrio = modalsArray[0].querySelector('.prio-btn');
            const selectedBtn = Array.from(btnPrio.querySelectorAll('button'));
            btnPrio.addEventListener('click', function(event){
                selectedBtn.forEach(key => key.classList.remove('selected-prio'));
                if(event.target.className === 'low'){
                    selectedBtn[0].classList.add('selected-prio');
                }
                else if(event.target.className === 'medium'){
                    selectedBtn[1].classList.add('selected-prio');
                }
                else if(event.target.className === 'high'){
                    selectedBtn[2].classList.add('selected-prio');
                }

            });
        }

        const addData = (navBtn) => {
            if(navBtn[0].classList.contains('special-btn')){
                console.log(tasksinput);
            }
            else if(navBtn[1].classList.contains('special-btn')){
                console.log('nice');
            }

        }

        return {navClick, displayModals, modalsNav, getData}

    }


    function commandClick(mainCon){
        const runCom = commandRun()
        const modalsTag = mainCon.querySelector('.section-modals');
        const navTag = mainCon.querySelector('nav');
        const modalNav = modalsTag.querySelector('nav');
        const tasksModals = modalsTag.querySelector('.tasks-modals');
        const notesModals = modalsTag.querySelector('.notes-modals');
        const modalsArray = [tasksModals, notesModals];
        function NavClicked(){
            navTag.addEventListener('click', function(event){
                runCom.navClick(event, navTag);
            });
        }
        function plusFunction(){
            const asideTag = mainCon.querySelector('aside');
            const plusbtn = asideTag.querySelector('.asideSVG');
            plusbtn.addEventListener('click', () => {
                runCom.displayModals(modalsTag, modalsArray);
            });
        }

        function modalNavClicked(){
            modalNav.addEventListener('click', function(event) {
                runCom.modalsNav(event, modalNav, modalsArray);
                
            });            
        }

        function addClicked(){
            const navBtn = Array.from(modalNav.querySelectorAll('button'));
            const Addbtn = modalsTag.querySelector('.modals-add');
            Addbtn.addEventListener('click', () =>{
                runCom.getData(navBtn, modalsArray);
            })
        }
        
        addClicked();
        modalNavClicked();
        plusFunction();
        NavClicked();
        
    }

    return {commandClick}
    
}



















