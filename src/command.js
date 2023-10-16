import './style/style.scss';

export function command(mainCon){
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
              });
            if(navBtn.classList.contains('Home-btn')){
                navBtn.classList.add('special-btn');
                allSection[0].style.display = allSection[0].style.display === 'none' ? 'grid' : 'none';        
            }
            else if(navBtn.classList.contains('Task-btn')){
                navBtn.classList.add('special-btn');
                allSection[1].style.display = allSection[1].style.display === 'none' ? 'grid' : 'none'; 
            }
            else if(navBtn.classList.contains('Notes-btn')){
                navBtn.classList.add('special-btn');
                allSection[2].style.display = allSection[2].style.display === 'none' ? 'grid' : 'none';         
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

        const modalsNav = (e, mnBtn, modalsArray) => {  
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

        const priobtn = (prioBtn) => {
            const prio = Array.from(prioBtn.querySelectorAll('button'));
            prioBtn.addEventListener('click', function(e){
                prio.forEach(key => key.classList.remove('selected-prio'));
                if(e.target.className === 'low'){
                    prio[0].classList.add('selected-prio');
                }
                else if(e.target.className === 'medium'){
                    prio[1].classList.add('selected-prio');
                }
                else if(e.target.className === 'high'){
                    prio[2].classList.add('selected-prio');
                }
            });
        }
        const verifyModals = (mNav, mArray, mainMod) => {
            const TasksInputs = Array.from(mArray[0].querySelectorAll('*'));
            const NotesInputs = Array.from(mArray[1].querySelectorAll('*'));
            const forTasksValue = [TasksInputs[1], TasksInputs[2], TasksInputs[5]];
            const AllTasksValue = forTasksValue.map(key => key.value);
            const allHaveValue = AllTasksValue.every(value => value !== '' && value !== null);
            if(mNav[0].classList.contains('C-tasks') && mNav[0].classList.contains('special-btn')){
                allHaveValue ? console.log('noice') : addingError(mainMod); 
                    
            }
            else if (mNav[1].classList.contains('C-notes') && mNav[1].classList.contains('special-btn')) {
                // verifyValue();
            }   
        }

        const addingError = (main) => {
            const errorModal = main.querySelector('.errorPopUp');
            const errorexit = errorModal.querySelector('h4');
            errorModal.style.display = 'block';
            errorexit.addEventListener('click', () =>{
                errorModal.style.display ='none';
            });

        }

        


        return{navClick, displayModals, modalsNav, verifyModals, priobtn}
    }

    function commandClick(){
        const runCom = commandRun()
        const modalsTag = mainCon.querySelector('.section-modals');
        const navTag = mainCon.querySelector('nav');
        const modalNav = modalsTag.querySelector('nav');
        const mnBtn = Array.from(modalNav.querySelectorAll('button'));
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
                runCom.modalsNav(event, mnBtn, modalsArray);
                
            });            
        }

        function getData(){
           const prioCon = tasksModals.querySelector('.prio-btn');
           runCom.priobtn(prioCon);
        }

        function addData(){
            const addBtn = modalsTag.querySelector('.modals-add');
            addBtn.addEventListener('click', () => {
                runCom.verifyModals(mnBtn, modalsArray, modalsTag);
                
            });
        }

        NavClicked();
        plusFunction();
        modalNavClicked();
        getData();
        addData();
    }

    const com = commandClick(); 
}
