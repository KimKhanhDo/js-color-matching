import { GAME_STATUS, PAIRS_COUNT } from './constants.js';
import { getColorElementList, getColorList } from './selectors.js';
import { getRandomColorPairs } from './utils.js';

// Global variables
let selections = [];
let gameState = GAME_STATUS.PLAYING;
// TODOs
// 1. Generating colors using https://github.com/davidmerfield/randomColor
// 2. Attach item click for all li elements
// 3. Check win logic
// 4. Add timer
// 5. Handle replay click

function initColors() {
  // random 8 pairs
  const colorList = getRandomColorPairs(PAIRS_COUNT);

  //   bind to li > div.overlay
  const liList = getColorElementList();
  liList.forEach((liElement, index) => {
    const overlayElement = liElement.querySelector('.overlay');
    if (overlayElement) overlayElement.style.backgroundColor = colorList[index];
  });
}

function attachEventForColorList() {
  const ulElement = getColorList();
  if (!ulElement) return;

  // Event delegation: listening for clicks on the parent <ul> element
  ulElement.addEventListener('click', (event) => {
    // handle LI only
    if (event.target.tagName !== 'LI') return;

    handleColorClick(event.target);
  });
}

function handleColorClick(liElement) {
  if (!liElement) return;

  liElement.classList.add('active');
  //   console.log(liElement);
}

// main
(() => {
  initColors();

  attachEventForColorList();
})();
