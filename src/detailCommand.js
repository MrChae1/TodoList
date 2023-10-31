  
export const ChangeDetails = (allDetails, editDell) => {
    const indicesToToggle = [3, 8, 12, 16, 22];
    const newIndex = [4, 9, 13];
    const forFlex = [17, 24];

    for (const index of indicesToToggle) {
        const initialDisplay = window.getComputedStyle(allDetails[index]).getPropertyValue('display');
        allDetails[index].style.display = initialDisplay === 'block' ? 'none' : 'block';
    }

    for (const indexNew of newIndex) {
        const initialDisplay = window.getComputedStyle(allDetails[indexNew]).getPropertyValue('display');
        allDetails[indexNew].style.display = initialDisplay === 'none' ? 'block' : 'none';
    }
    for (const flexIndex of forFlex) {
        const initialDisplay = window.getComputedStyle(allDetails[flexIndex]).getPropertyValue('display');
        allDetails[flexIndex].style.display = initialDisplay === 'none' ? 'flex' : 'none';
    }
    // Toggle the 'editDell' element
    editDell.style.display = window.getComputedStyle(editDell).getPropertyValue('display') === 'none' ? 'block' : 'none';
}

export const ChangeTheTasks = (alltasks, array, mainDiv, allDetails, mainArray, detail) => {
    const Selected = allDetails[17].querySelector('.special-btn');
    const parseItems = JSON.parse(localStorage.getItem('tasks'));
    mainArray = parseItems;
    mainArray[array.index].title = allDetails[4].value;
    mainArray[array.index].desc = allDetails[9].value;
    mainArray[array.index].date = allDetails[13].value;
    mainArray[array.index].prio = Selected.value;
    
    alltasks[1].textContent = `${mainArray[array.index].title}`;
    alltasks[3].textContent = `${mainArray[array.index].date}`;

    import('./appendCommand').then(module => {
        module.updateLocal(mainArray, 1);
    });
   
    import('./command')
        .then((module) => {
            module.changePrio(Selected.value, mainDiv);
            module.exitBtn(detail);
        });
}







