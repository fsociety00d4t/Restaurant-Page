const createHeader = () => {

    const content = document.getElementById('content');


    const header = document.createElement('div');
    header.classList.add('header');
    const titleDiv = document.createElement ('div');
    titleDiv.classList.add('title');
    const title = document.createElement('h1');
    const headerMenu = document.createElement('div');
    headerMenu.classList.add('header-menu');
    const homeDiv = document.createElement('div');
    const MenuDiv = document.createElement('div');
    const ContractDiv = document.createElement('div');

    const home = document.createElement('button');
    home.classList.add('home');
    const menu = document.createElement('button');
    menu.classList.add('menu');
    const contract = document.createElement('button');
    contract.classList.add('contact');

    title.innerHTML = 'AvocadoLand';

    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contract.innerHTML = 'Contact';

    homeDiv.appendChild(home);
    homeDiv.appendChild(menu);
    homeDiv.appendChild(contract);

    headerMenu.appendChild(homeDiv);
    headerMenu.appendChild(MenuDiv);
    headerMenu.appendChild(MenuDiv);

    titleDiv.appendChild(title);
    header.appendChild(titleDiv);
    header.appendChild(homeDiv);

    content.appendChild(header);

} 

export default createHeader;

