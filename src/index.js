import './style/style.scss';
import {subComponent} from './print';
import { command } from './command';


function component(){
    const subContainer = subComponent();
    const Com = command();
    const mainContainer = document.createElement('main');
    mainContainer.classList.add('mainCon');
    mainContainer.append(subContainer.forHeader(), subContainer.forNav(), subContainer.forAside(), subContainer.forFooter(), subContainer.forModals());
    Com.commandClick(mainContainer);
    return mainContainer;
}

document.body.appendChild(component());