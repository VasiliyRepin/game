import $ from 'jquery';


import template from './choosePlayerName.template';

class ChoosePlayerName {
  static draw() {
    const contentEl = document.getElementById('modal-content');
    contentEl.innerHTML = template;
  }

//Receive the data after close modal-dialog
  static getPlayerName() {
    ChoosePlayerName.draw();
   // return new Promise((resolve) => {
      $(document).on('hidden.bs.modal', '#ModalCenter', function () {
        const playerName = $('#choosePlayerName .js-player-name').val();
        console.log('Player:', playerName);
        window.gameState.playerName = playerName;
          var contentE = document.querySelector('body');
        contentE.innerHTML = gameState.playerName;

        //return playerName;
      });

    //

   // resolve(playerName);
      //ChoosePlayerName.empty();
   // });
  }

//Cleaning of PlayerName
  static empty() {
    $('#choosePlayerName').empty();
  }

  constructor() {
    this.localPlayerName = '';
  }



}
//Open the modal after loading
$(window).on('load',function(){
 $('#ModalCenter').modal('show');
});

//$('#choosePlayerName .js-form').on('submit', (e) => {
 // e.preventDefault();





export default ChoosePlayerName;
