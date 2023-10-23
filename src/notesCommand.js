export const NotesDelete = (main, NotesArray, notesIndex) => {
    import('./command').then(module => {
        module.exitBtn(main)
    });
    NotesArray.splice(notesIndex, 1);
    console.log(NotesArray);
} 