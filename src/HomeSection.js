function getDynamicDate() {
    const currentDate = new Date();
  
    // Get the current date in the format "YYYY-MM-DD"
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
  }
  
  export function updateDynamicDate() {
    const dynamicDate = getDynamicDate();
    return dynamicDate;
  }
  
  // Update the dynamic date every 24 hours (in milliseconds)
  setInterval(updateDynamicDate, 24 * 60 * 60 * 1000);

  

  