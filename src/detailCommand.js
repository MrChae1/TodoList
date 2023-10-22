  
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

{/* <div class="Edit-btn">
<button class="Save-edit">Save Tasks</button>
<button class="Cancel-Edit">Cancel</button>
</div>  */}


// allDetails[3].style.display = allDetails[3].style.display === 'block' ? 'none' : 'block';
// allDetails[4].style.display = allDetails[4].style.display === 'none' ? 'block' : 'none';
// allDetails[8].style.display = allDetails[8].style.display === 'block' ? 'none' : 'block';
// allDetails[9].style.display = allDetails[9].style.display === 'none' ? 'block' : 'none';
// allDetails[12].style.display = allDetails[12].style.display === 'block' ? 'none' : 'block';
// allDetails[13].style.display = allDetails[13].style.display === 'none' ? 'block' : 'none';
// allDetails[16].style.display = allDetails[16].style.display === 'block' ? 'none' : 'block';
// allDetails[17].style.display = allDetails[17].style.display === 'none' ? 'flex' : 'none';
// allDetails[22].style.display = allDetails[22].style.display === 'block' ? 'none' : 'block';
// window.getComputedStyle(editDell).getPropertyValue('display') == "none" ? editDell.style.display = "block" : editDell.style.display = "none";





