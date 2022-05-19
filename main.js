const imgCount = 36;
const content = document.getElementById('content');
let cols = Number(getComputedStyle(document.documentElement).getPropertyValue('--cols'));

remakeGrid();

window.addEventListener('resize', () => {
  let currCols = cols;
  cols = Number(getComputedStyle(document.documentElement).getPropertyValue('--cols'));
  if (currCols != cols) remakeGrid();
  if (cols >= 2) {
    document.querySelector('.finder').classList.remove('small-input');
    // document.querySelector('#switch-page').style.marginRight = 'auto';
    document.querySelector('#switch-page').style.display = 'flex';
  }
});

function remakeGrid() {
  content.innerHTML = '';
  for (let i = 1; i <= cols; i++) {
    let cardImgContainer = document.createElement('div');
    cardImgContainer.classList.add('card-img-container');
    for (let j = i; j <= imgCount; j += cols) {
      cardImgContainer.appendChild(createCardImg(j));
    }
    content.appendChild(cardImgContainer);
  }
}

function createCardImg(n) {
  let cardImg = document.createElement('div');
  cardImg.className = 'card-image zoom';
  cardImg.setAttribute('id', 'img' + n);
  cardImg.innerHTML = 
  `
    <img src="./assets/img/img${n}.jpg" alt="img${n}"></img>
    <div class="card-image__hover">
      <button class="btn-red save-img pointer">Guardar</button>
      <button class="btn-white download-img pointer">
        <svg style="width:16px;height:16px" viewBox="0 0 24 24">
          <path 
            fill="currentColor" d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 2L6.46 7.46L7.88 8.88L11 5.75V15H13V5.75L16.13 8.88L17.55 7.45L12 2Z"
          />
        </svg>
      </button>
      <button class="btn-white option-img pointer">
        <svg style="width:16px;height:16px" viewBox="0 0 24 24">
          <path
            fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
          />
        </svg>
      </button>
    </div>
  `;
  return cardImg;
}

const buttons = [
  document.querySelector('#switch-page'),
  document.querySelector('#add-pin'),
  document.querySelector('#notifications'),
  document.querySelector('#message'),
  document.querySelector('#profile-img'),
  document.querySelector('#more-options')
];

document.querySelector('.finder').addEventListener('click', () => {
  if (cols < 2) {
    document.querySelector('.finder').classList.add('small-input');
    // document.querySelector('#switch-page').style.marginRight = '0';
    document.querySelector('#switch-page').style.display = 'none';
  }
});

document.querySelector('#add-pin-modal').addEventListener('click', () => {
  buttons[2].classList.add('active');
});

document.querySelector('#notifications-modal').addEventListener('click', () => {
  buttons[3].classList.add('active');
});

document.querySelector('#message-modal').addEventListener('click', () => {
  buttons[4].classList.add('active');
});

document.querySelector('#more-options-modal').addEventListener('click', () => {
  buttons[6].classList.add('active');
});

document.addEventListener('click', () => removeActive(), true);

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('active');
  });
});

function removeActive() {
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  document.querySelector('.finder').classList.remove('small-input');
  // document.querySelector('#switch-page').style.marginRight = 'auto';
  document.querySelector('#switch-page').style.display = 'flex';
}