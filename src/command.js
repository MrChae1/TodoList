import './style/style.scss';

export function commandRun(){
    const navClick = (nav) =>{
        const btn = Array.from(nav.querySelectorAll('button'));
        nav.addEventListener('click', function(event){
            if(event.target.className === 'Home-btn'){
                navVerify(btn[0], btn);
            }
            else if(event.target.className === 'Task-btn'){
                navVerify(btn[1], btn);
            }
            else if(event.target.className === 'Notes-btn'){
                navVerify(btn[2], btn);                
            }
        });
    }

    const navVerify = (navBtn, allbtn) =>{
        const addBtn = document.querySelector('.asideSVG');
        const allSection = Array.from(document.querySelectorAll('section'));
        allSection.forEach(key => key.style.display = 'none');
        allbtn.forEach(key => key.classList.remove('special-btn'));
        if(navBtn.classList.contains('Home-btn')){
            navBtn.classList.add('special-btn');
            allSection[0].style.display = allSection[0].style.display === 'none' ? 'grid' : 'none';
            addBtn.style.display = 'none';
        }
        else if(navBtn.classList.contains('Task-btn')){
            navBtn.classList.add('special-btn');
            allSection[1].style.display = allSection[1].style.display === 'none' ? 'grid' : 'none';
            console.log(addBtn);
            addBtn.style.display = 'block';
            
        }
        else if(navBtn.classList.contains('Notes-btn')){
            navBtn.classList.add('special-btn');
            allSection[2].style.display = allSection[2].style.display === 'none' ? 'grid' : 'none';
            addBtn.style.display = 'block';
            console.log(addBtn);
        }

    }

    return {navClick}
} 