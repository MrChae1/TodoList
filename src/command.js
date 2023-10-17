import './style/style.scss';

export function command(mainCon){
    function commandRun(){
        let notesArray = [];
        let tasksArray = []; 
        class addNotes{
            constructor(title, desc){
                this.title = title,
                this.desc = desc
            }
        }
        class addTasks extends addNotes{
            constructor(title,desc, dates, prio, index){
                super(title, desc);
                this.dates = dates;
                this.prio = prio;
                this.index = index;
            }
        }
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
            removeModals(exitBtn, mainModals, modalsArr[0],modalsArr[1]);
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
        const verifyModals = (mNav, mArray, mainMod, secTwo) => {
            secTwo.textContent = ``;
            const whatArray = ['arrTasks', 'arrNotes']; 
            const TasksInputs = Array.from(mArray[0].querySelectorAll('*'));
            const NotesInputs = Array.from(mArray[1].querySelectorAll('*'));
            const selected = TasksInputs[8].querySelector('.selected-prio');
            const indexTas = tasksArray.length + 1;
            const indexNo = notesArray.length + 1;
            const forTasksValue = [TasksInputs[1], TasksInputs[2], TasksInputs[5], selected];
            if(mNav[0].classList.contains('C-tasks') && mNav[0].classList.contains('special-btn')){
                validateValue(forTasksValue, secTwo, mainMod, whatArray[0], indexTas);
            }
            else if (mNav[1].classList.contains('C-notes') && mNav[1].classList.contains('special-btn')) {
                
            }   
        }

        const validateValue = (TNVal, secTwo, mainMod, wArr, index) => {
            const AllValue = TNVal.map(key => key.value);
            const allHaveValue = AllValue.every(value => value !== '' && value !== null);
            if(allHaveValue){
                passValue(wArr, secTwo, mainMod, AllValue, index, TNVal);
            }
            else{
                addingError(mainMod);
            }
            
        }

        const passValue = (wArr, secTwo, mainMod, Val, index, TNVal) => {

                if(wArr === 'arrTasks'){
                    const newTasks = new addTasks(...Val, index);
                    tasksArray.push(newTasks);
                    addtoSection(tasksArray, secTwo, wArr);
                }
                else if(wArr === 'arrNotes'){

                }
                
                mainMod.style.display = 'none';
                TNVal.forEach(key => key.value = '');
        }

        const addtoSection = (newApp, secondSec, mainMod) => {
            
            for(const inTasks of newApp){
                const mainDiv = document.createElement('div');
                mainDiv.classList.add('tasks-div')
                const subDiv = document.createElement('div');
                subDiv.classList.add('tasks');
                changePrio(inTasks.prio, mainDiv);
                subDiv.innerHTML = `
                    <input type="checkbox" name="myCheckbox" id="myCheckbox" value="checkboxValue" data-index="${inTasks.index}">
                    <label for="myCheckbox">${inTasks.title}</label>
                    <button>Details</button>
                    <p>${inTasks.dates}</p>
                    <svg class="edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>playlist-edit</title><path d="M3 6V8H14V6H3M3 10V12H14V10H3M20 10.1C19.9 10.1 19.7 10.2 19.6 10.3L18.6 11.3L20.7 13.4L21.7 12.4C21.9 12.2 21.9 11.8 21.7 11.6L20.4 10.3C20.3 10.2 20.2 10.1 20 10.1M18.1 11.9L12 17.9V20H14.1L20.2 13.9L18.1 11.9M3 14V16H10V14H3Z" /></svg>
                    <svg class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>
                `;
                // delAndEdit(subDiv);
                mainDiv.append(subDiv);
                secondSec.append(mainDiv);
            
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
                Main.style.backgroundColor = 'red';
            }
        }

        const DelEditDetail = (SDiv) => {
            const sDivbtn = Array.from(SDiv.querySelectorAll('svg'));
            // for later 
        }
        

        const addingError = (main) => {
            const errorModal = main.querySelector('.errorPopUp');
            const errorexit = errorModal.querySelector('h4');
            errorModal.style.display = 'block';
            removeModals(errorexit, errorModal, null, null);
        }

        const removeModals = (X, y, z, q) => {
            X.addEventListener('click',() =>{
                if(X.classList.contains('inerror')){
                    y.style.display ='none';
                }
                else{
                    y.style.display = 'none';
                    z.style.display = 'grid';
                    q.style.display = 'none';
                }
            });
        }

        


        return{navClick, displayModals, modalsNav, verifyModals, priobtn}
    }

    function commandClick(){
        const runCom = commandRun()
        const modalsTag = mainCon.querySelector('.section-modals');
        const asideTag = mainCon.querySelector('aside');
        const allSec = Array.from(asideTag.querySelectorAll('section'));
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
                runCom.verifyModals(mnBtn, modalsArray, modalsTag, allSec[1]);
                
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
