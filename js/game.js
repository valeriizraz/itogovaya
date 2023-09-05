'use strict';

(function() {

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function game() {
    const check = {
      player: 5,
      computer: 5,
    }

    return function startGame() {

      const userNum = prompt(`Введите число от 1 до ${check.player}`);
      console.log(`Число игрок ${userNum}`);

      if (userNum === null) {
        if (confirm('Хотите завершить?')) {
          if (check.player === check.computer) {
            alert(`Ничья со счетом: player ${check.player} computer ${check.computer}`);
            return;
          }
          if (check.player > check.computer) {
            alert(`Вы выиграли со счетом: player ${check.player} computer ${check.computer}`);
            return;
          }
          if (check.player < check.computer) {
            alert(`Вы проиграли со счетом: player ${check.player} computer ${check.computer}`);
            return;
          }
        }
      }

      const randNum = getRandomIntInclusive(2, 3);
      console.log(`Число рандом: ${randNum}`);

      const newUserNum = parseInt(userNum);

      if (!Number.isNaN(newUserNum) && typeof newUserNum === 'number' && newUserNum % randNum) {
        check.computer += newUserNum;
        check.player -= newUserNum;
        if (check.player === 0) {
          alert('Вы проиграли');
          if (confirm('Хотите повторить?')) {
            check.player = 5;
            check.computer = 5;
          } else {
            return;
          }
        }
      } else if (!Number.isNaN(newUserNum) && typeof newUserNum === 'number' && !(newUserNum % randNum)) {
        check.player += newUserNum;
        check.computer -= newUserNum;
        if (check.computer === 0) {
          alert('Вы победили');
          if (confirm('Хотите повторить?')) {
            check.player = 5;
            check.computer = 5;
          } else {
            return;
          }
        }  
      } 

      

      return startGame();
    }
  }
  window.MARB = game;

})();
