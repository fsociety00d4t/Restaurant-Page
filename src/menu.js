const createMenu = () => {
    const content = document.getElementById('content');

    const MainMenuDiv = document.createElement('div');
    MainMenuDiv.classList.add('main-menu');
    const left = document.createElement('div');
    left.classList.add('.left');
    const right = document.createElement('div');
    right.classList.add('.right');

    const leftOneDiv = document.createElement('div');
    const leftOnetxt = document.createElement('p');
    const leftOneImg = document.createElement('img');
    leftOnetxt.innerHTML = 'Avocado Toast';   
    leftOneImg.src = '../imgs/avocado-toast.jpg';

    leftOneDiv.appendChild(leftOnetxt);
    leftOneDiv.appendChild(leftOneImg);
    left.appendChild(leftOneDiv);
   

    const leftTwoDiv = document.createElement('div');
    const leftTwoTxt = document.createElement('p');
    const leftTwoImg = document.createElement('img');
    leftTwoTxt.innerHTML = 'Avocado Roll';   
    leftTwoImg.src = '../imgs/avocado-roll.jpg';

    leftTwoDiv.appendChild(leftTwoTxt);
    leftTwoDiv.appendChild(leftTwoImg);
    left.appendChild(leftTwoDiv);

    const leftThreeDiv = document.createElement('div');
    const leftThreeTxt = document.createElement('p');
    const leftThreeImg = document.createElement('img');
    leftThreeTxt.innerHTML = 'Avocado Shrimps Salad';   
    leftThreeImg.src = '../imgs/avocado-salad.jpg';

    leftThreeDiv.appendChild(leftThreeTxt);
    leftThreeDiv.appendChild(leftThreeImg);
    left.appendChild(leftThreeDiv);
    


    const rightOneDiv = document.createElement('div');
    const rightOneTxt = document.createElement('p');
    const rightOneImg = document.createElement('img');
    rightOneTxt.innerHTML = 'Guacamole';   
    rightOneImg.src = '../imgs/guacamole.jpg';

    rightOneDiv.appendChild(rightOneTxt);
    rightOneDiv.appendChild(rightOneImg);
    right.appendChild(rightOneDiv);

    const rightTwoDiv = document.createElement('div');
    const rightTwoTxt = document.createElement('p');
    const rightTwoImg = document.createElement('img');
    rightTwoTxt.innerHTML = 'Avocado Ice Cream';   
    rightTwoImg.src = '../imgs/Avocado-Ice-Cream.jpg';

    rightTwoDiv.appendChild(rightTwoTxt);
    rightTwoDiv.appendChild(rightTwoImg);
    right.appendChild(rightTwoDiv);

    const rightThreeDiv = document.createElement('div');
    const rightThreeTxt = document.createElement('p');
    const rightThreeImg = document.createElement('img');
    rightThreeTxt.innerHTML = 'avocado smoothie';   
    rightThreeImg.src = '../imgs/avocado-smoothie.jpg';

    rightThreeDiv.appendChild(rightThreeTxt);
    rightThreeDiv.appendChild(rightThreeImg);
    right.appendChild(rightThreeDiv);


    

    MainMenuDiv.appendChild(left);
    MainMenuDiv.appendChild(right);
    content.appendChild(MainMenuDiv);
    
}


export default createMenu;