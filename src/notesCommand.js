import { updateLocal } from './appendCommand';

export const NotesDelete = (main, NotesArray, notesIndex) => {
    import('./command').then(module => {
        module.exitBtn(main)
    });
    NotesArray.splice(notesIndex, 1);
    for(let i = 0; i < NotesArray.length; i++){
        NotesArray[i].index = i;
    }
    updateLocal(NotesArray, 2);
}

export const EditNotes = (NotesArray, NotesObj, NotesD) => {
    const allNotesContent = Array.from(NotesD.querySelectorAll('*'));
    const editDiv = document.createElement('div');
    editDiv.classList.add('editDiv');
    editDiv.innerHTML = `
        <div class="EditContainer">
            <h4>X</h4>
            <input type='text' value='${NotesObj.title}'class='NotesHeader'>
            <textarea  cols="30" rows="10" value='${NotesObj.desc}' class='notesEditdesc'></textarea>
        </div>
    `;
    const inputEdit = editDiv.querySelector('input'); 
    const textA = editDiv.querySelector('textarea');
    const editExit = editDiv.querySelector('h4');
    textA.value = NotesObj.desc;
    editExit.addEventListener('click', () => {
        const parseItems = JSON.parse(localStorage.getItem('notes'));
        NotesArray = parseItems;
        NotesArray[NotesObj.index].title = inputEdit.value;
        NotesArray[NotesObj.index].desc = textA.value;
        allNotesContent[1].textContent = inputEdit.value;
        allNotesContent[4].textContent = textA.value;

        import('./command').then(module => {
            module.exitBtn(editDiv);
        });
        updateLocal(NotesArray, 2);
    });
    document.body.appendChild(editDiv);
}
