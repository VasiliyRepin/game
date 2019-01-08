import template from './battle.template';
//import './battle.css';

class Monster {
  static draw(){
    const contentEl = document.querySelector('body');
    contentEl.innerHTML = template;
  }
}

export default Monster;
