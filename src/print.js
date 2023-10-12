import './style/style.scss';
import { commandRun } from './command';

export function subComponent(){
    const com = commandRun();
    const forHeader = () => {
        const headerTag = document.createElement('header');
        headerTag.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>hand-pointing-right</title><path d="M21,9A1,1 0 0,1 22,10A1,1 0 0,1 21,11H16.53L16.4,12.21L14.2,17.15C14,17.65 13.47,18 12.86,18H8.5C7.7,18 7,17.27 7,16.5V10C7,9.61 7.16,9.26 7.43,9L11.63,4.1L12.4,4.84C12.6,5.03 12.72,5.29 12.72,5.58L12.69,5.8L11,9H21M2,18V10H5V18H2Z" /></svg>
            <h1>TodoThis</h1>
        `;
        return headerTag;
    }

    const forNav = () => {
        const navTag = document.createElement('nav');
        navTag.innerHTML = `
            <button class="Home-btn special-btn">HOME</button>
            <button class="Task-btn">TASKS</button>
            <button class="Notes-btn">NOTES</button>
        `;
        
        com.navClick(navTag);

        return navTag;
    }

    const forAside = () => {
        const asideTag = document.createElement('aside');
        asideTag.innerHTML = `
            <main> 
                <section>
                    
                </section>
                <section>
                    <div class="tasks-div">
                        <div class="tasks">
                            <input type="checkbox" name="myCheckbox" id="myCheckbox" value="checkboxValue">
                            <label for="myCheckbox">Checkbox Label</label>
                            <button>Details</button>
                            <p>Dec 12th</p>
                            <svg class="edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>playlist-edit</title><path d="M3 6V8H14V6H3M3 10V12H14V10H3M20 10.1C19.9 10.1 19.7 10.2 19.6 10.3L18.6 11.3L20.7 13.4L21.7 12.4C21.9 12.2 21.9 11.8 21.7 11.6L20.4 10.3C20.3 10.2 20.2 10.1 20 10.1M18.1 11.9L12 17.9V20H14.1L20.2 13.9L18.1 11.9M3 14V16H10V14H3Z" /></svg>
                            <svg class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>
                        </div>
                    </div>
                </section>
                <section>
                    
                </section>
                <svg class="asideSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                
            </main>
        `;

        return asideTag;
    }

    const forFooter = () => {
        const footerTag = document.createElement('footer');
        footerTag.innerHTML = `
            <p>&copy; 2023 TodoThis. All rights reserved.</p>
        `;
        return footerTag;
    }

    return {forHeader, forNav, forAside, forFooter}
}

