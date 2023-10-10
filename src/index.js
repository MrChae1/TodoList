import './style/style.scss';
function component(){
    const hOne = document.createElement('h1');
    hOne.textContent = 'Hello Start Here';
    return hOne;
}

document.body.appendChild(component());