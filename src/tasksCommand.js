export const ShowDetails = (alltasks, array, mainDiv, mainArray) => {
    const detailMain = document.createElement('div');
    detailMain.classList.add('detailMain');
    const detailSub = document.createElement('div');
    detailSub.classList.add('detailSub');
    detailSub.innerHTML = `
        <h4>X</h4>
        <div class="details-title">
            <label>Tasks: </label>
            <p>${array.title}</p>
            <input type="text" class="tasksTitle" value='${array.title}'>
        </div>
        <div class="details-desc">
            <label>Tasks Description:</label>
            <div class="desc-container">
                <p>${array.desc}</p>
                <textarea name="tasks-desc" id="tasks-text" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div class="details-date">
            <label>Tasks Due Date: </label>
            <p>${array.date}</p>
            <input type="date" id="desc-Date" value="${array.date}">
        </div>
        <div class="details-Prio">
            <label>Priority Level: </label>
            <p>${array.prio}</p>
            <div class="desc-prio">
                <button class="desc-low special-btn" value="low">Low</button>
                <button class="desc-medium" value="medium">Medium</button>
                <button class="desc-high" value="high">High</button>
            </div>
        </div>
        <div class="Desc-btn">
            <div class="desc-edit">
                <button class="Dell">Edit Tasks</button>
            </div>
            <div class="Edit-btn">
                <button class="Save-edit">Save Tasks</button>
                <button class="Cancel-Edit">Cancel</button>
            </div> 
        </div>
    `;

    const allDetails = Array.from(detailSub.querySelectorAll('*'));
    const textArea = detailSub.querySelector('textarea');
    textArea.value = `${array.desc}`;
    const detailExit = detailSub.querySelector('h4');
    const editDell = detailSub.querySelector('.Dell');
    const newPrioBtn = Array.from(allDetails[17].querySelectorAll('button'));

    editDell.addEventListener('click', () => {
        import('./detailCommand')
        .then((module) => {
            module.ChangeDetails(allDetails, editDell);
        });
    });

    //save Edit
    allDetails[25].addEventListener('click',() => {
        import('./detailCommand')
        .then((module) => {
            module.ChangeTheTasks(alltasks, array, mainDiv, allDetails, mainArray, detailMain);
        });
    });

    const importAndExecute = (element, fn) => {
        element.addEventListener('click', () => {
            import('./command').then((module) => fn(module));
        });
    };
    
    // Click events
    importAndExecute(allDetails[17], (module) => {
        module.removeClass(newPrioBtn);
        module.changeNav(event, newPrioBtn);
    });
    
    importAndExecute(allDetails[26], (module) => {
        module.exitBtn(detailMain);
    });
    
    importAndExecute(detailExit, (module) => {
        module.exitBtn(detailMain);
    });
    detailMain.appendChild(detailSub);
    document.body.appendChild(detailMain);
}



