import 'bootstrap';

import $ from 'jquery';

import './css/app.css';

import { GameState, setGameState } from './game-state';

import ModalDialog from './components/modal-dialog/modal-dialog';

import ChoosePlayerName from './screens/login/choosePlayerName';


import Monster from './screens/battle/battle'

import Body from './components/body/player';

//initialisation Start App
const gameState = new GameState();
window.gameState = gameState; //antipattern
setGameState(gameState);









ModalDialog.draw();
//ChoosePlayerName.draw();
ChoosePlayerName.getPlayerName();
$(document).on('hidden.bs.modal', '#ModalCenter', function () {
  Monster.draw();});



