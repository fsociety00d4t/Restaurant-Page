
const createFooter = () => {
    const footerDiv = document.createElement('div');
    const footer = document.createElement('p');
    footerDiv.classList.add('footer');
    footer.classList.add('footer-text');

    footer.innerHTML='Copyright © 2023';

    footerDiv.appendChild(footer);

    content.appendChild(footerDiv);

}

export default createFooter;

