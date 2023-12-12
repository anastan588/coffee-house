const blocks = document.querySelectorAll('.menu_items_block');
const loadmoreButton = document.querySelector('.buttom_load_more');
const switchButtons = document.querySelectorAll('.menu_button_item');
let data = './../data/products.json';
const response = await fetch(data);
const products = await response.json();
console.log(products);
console.log(loadmoreButton);
let dataForPopUp;

function loadBlocksInformation() {
  console.log(blocks);
  for (let i = 0; i < blocks.length; i++) {
    let dataToComplitBlock;
    if (blocks[i].classList.contains('block_coffee')) {
      dataToComplitBlock = products[0]['coffee'];
    }
    if (blocks[i].classList.contains('block_tea')) {
      dataToComplitBlock = products[1]['tea'];
    }
    if (blocks[i].classList.contains('block_dessert')) {
      dataToComplitBlock = products[2]['dessert'];
    }
    for (let j = 0; j < blocks[i].children.length; j++) {
      blocks[i].children[j].children[1].children[0].children[0].innerHTML =
        dataToComplitBlock[j].name;
      blocks[i].children[j].children[1].children[0].children[1].innerHTML =
        dataToComplitBlock[j].description;
      blocks[i].children[
        j
      ].children[1].children[1].innerHTML = `$${dataToComplitBlock[j].price}`;
    }
  }
}

let activeBlock;
function resizeVariable() {
  for (let key of switchButtons) {
    console.log(key);
    if (
      key.classList.contains('active_button') &&
      key.children[1].innerHTML.toLocaleLowerCase() === 'coffee'
    ) {
      activeBlock = blocks[0];
      for (let k = 4; k < activeBlock.children.length - 2; k++) {
        activeBlock.children[k].classList.add('display_none_mobile');
      }
      for (let k = 6; k < activeBlock.children.length; k++) {
        activeBlock.children[k].classList.add('display_none_tablet');
      }
    }
    if (
      key.classList.contains('active_button') &&
      key.children[1].innerHTML.toLocaleLowerCase() === 'tea'
    ) {
      activeBlock = blocks[1];
    }
    if (
      key.classList.contains('active_button') &&
      key.children[1].innerHTML.toLocaleLowerCase() === 'dessert'
    ) {
      activeBlock = blocks[2];
      for (let k = 4; k < activeBlock.children.length - 2; k++) {
        activeBlock.children[k].classList.add('display_none_mobile');
      }
      for (let k = 6; k < activeBlock.children.length; k++) {
        activeBlock.children[k].classList.add('display_none_tablet');
      }
    }

    loadmoreButton.classList.remove('display_none_load_more_button');
    loadmoreButton.classList.remove('buttom_load_more_click');
  }
  console.log(activeBlock);
}

loadBlocksInformation();
resizeVariable();

function changeBlocks(event) {
  console.log(event);

  const targetButton = event.currentTarget;
  console.log(targetButton);
  console.log(!targetButton.classList.contains('menu_button_item'));
  if (!targetButton.classList.contains('menu_button_item')) {
    return;
  }
  for (let i = 0; i < switchButtons.length; i++) {
    console.log(switchButtons[i]);
    switchButtons[i].classList.remove('active_button');
  }
  for (let j = 0; j < blocks.length; j++) {
    blocks[j].classList.add('display_none_menu');
  }
  for (let i = 0; i < switchButtons.length; i++) {
    if (
      switchButtons[i].children[1].innerHTML.toLocaleLowerCase() ===
      targetButton.children[1].innerHTML.toLocaleLowerCase()
    ) {
      console.log(blocks[i]);
      switchButtons[i].classList.add('active_button');
      blocks[i].classList.remove('display_none_menu');
      for (let k = 4; k < blocks[i].children.length - 2; k++) {
        blocks[i].children[k].classList.add('display_none_mobile');
      }
      for (let k = 6; k < blocks[i].children.length; k++) {
        blocks[i].children[k].classList.add('display_none_tablet');
      }
      console.log(switchButtons[i].children[1].innerHTML.toLocaleLowerCase());
      if (targetButton.children[1].innerHTML.toLocaleLowerCase() === 'tea') {
        console.log(loadmoreButton);
        loadmoreButton.classList.add('display_none_load_more_button');
      } else {
        loadmoreButton.classList.remove('display_none_load_more_button');
      }
    }
  }
}

function loadMoreCards(event) {
  console.log(event);

  const targetButton = event.currentTarget;
  console.log(targetButton);
  targetButton.classList.add('buttom_load_more_click');
  for (let i = 0; i < switchButtons.length; i++) {
    console.log(switchButtons[i]);
    if (switchButtons[i].classList.contains('active_button')) {
      if (
        switchButtons[i].children[1].innerHTML.toLocaleLowerCase() === 'coffee'
      ) {
        console.log(
          switchButtons[i].children[1].innerHTML.toLocaleLowerCase() ===
            'coffee'
        );
        console.log(blocks[0].children.length);
        for (let k = 0; k < blocks[0].children.length; k++) {
          console.log(blocks[0].children[k]);
          blocks[0].children[k].classList.remove('display_none_mobile');
          blocks[0].children[k].classList.remove('display_none_tablet');
        }
        for (let k = 4; k < blocks[2].children.length - 2; k++) {
          blocks[2].children[k].classList.add('display_none_mobile');
        }
        for (let k = 6; k < blocks[2].children.length; k++) {
          blocks[2].children[k].classList.add('display_none_tablet');
        }
      }
      if (
        switchButtons[i].children[1].innerHTML.toLocaleLowerCase() === 'dessert'
      ) {
        console.log(
          switchButtons[i].children[1].innerHTML.toLocaleLowerCase() ===
            'dessert'
        );
        console.log(blocks[2].children.length);
        for (let n = 0; n < blocks[2].children.length; n++) {
          console.log(blocks[2].children[n]);
          console.log(
            blocks[2].children[n].classList.contains('display_none_mobile')
          );
          blocks[2].children[n].classList.remove('display_none_mobile');
          blocks[2].children[n].classList.remove('display_none_tablet');
        }
        for (let k = 4; k < blocks[0].children.length - 2; k++) {
          blocks[0].children[k].classList.add('display_none_mobile');
        }
        for (let k = 6; k < blocks[0].children.length; k++) {
          blocks[0].children[k].classList.add('display_none_tablet');
        }
      }
    }
  }
  setTimeout(
    () => loadmoreButton.classList.add('display_none_load_more_button'),
    1000
  );
}

window.addEventListener('resize', resizeVariable);
switchButtons.forEach((element) => {
  element.addEventListener('click', (event) => changeBlocks(event));
});
loadmoreButton.addEventListener('click', (event) => loadMoreCards(event));
