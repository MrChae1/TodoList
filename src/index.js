import './style/style.scss';
import {subComponent} from './print';

function component(){
    const mainContainer = document.createElement('main');
    mainContainer.classList.add('mainCon');
    const subContainer = subComponent();
    mainContainer.append(subContainer.forHeader(), subContainer.forNav(), subContainer.forAside(), subContainer.forFooter(), subContainer.forModals());
    return mainContainer;
}

document.body.appendChild(component());