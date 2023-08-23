const createContact = () => {
    console.log('WORKS');

    const content = document.getElementById('content');

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div');
    const contactHeader = document.createElement('h2');
    contactHeader.innerHTML = 'Adress:';
    const contactP = document.createElement('p');
    contactP.innerHTML = '738 Walnut Drive';
    const contactPhoneHeader = document.createElement('h2');
    contactPhoneHeader.innerHTML = 'Phone:';
    const contactPhoneP = document.createElement('p');
    contactPhoneP.innerHTML = '701-453-5643';
    const contactEmailHeader = document.createElement('h2');
    contactEmailHeader.innerHTML ='Email:';
    const contactEmailP = document.createElement('p');
    contactEmailP.innerHTML = 'avocadoLand@gmail.com';

    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(contactP);
    contactDiv.appendChild(contactPhoneHeader);
    contactDiv.appendChild(contactPhoneP);
    contactDiv.appendChild(contactEmailHeader);
    contactDiv.appendChild(contactEmailP);

    content.appendChild(contactDiv);


}

export default createContact;