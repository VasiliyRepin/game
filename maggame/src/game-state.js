//Global saving data of the Game
export class GameState {
  constructor() {
    this.playerName = '';
  }

  setPlayerName(name = '') {
    this.playerName = name;
  }
}

let gameState = null;

//Setter
export const setGameState = (state) => {
  gameState = state;
};

//Getter
export const getGameState = () => gameState;
