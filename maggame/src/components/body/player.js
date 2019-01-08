import $ from 'jquery';

//import template from './nav.template';
//import './nav.css';

class Body {
  //static draw() {
   // const contentEl = document.querySelector('body');
   // contentEl.insertAdjacentHTML('afterbegin', template);
 // }

  static update(gameState) {
    $('body').text(gameState.playerName);
  }
}

export default Body;
