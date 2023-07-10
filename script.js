let AllIMG = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
let random = Math.floor(Math.random() * AllIMG.length);
let randomImg = AllIMG[random];
let CreateImgElement = document.createElement('img');
CreateImgElement.src = 'img/' + randomImg;
document.body.appendChild(CreateImgElement);
