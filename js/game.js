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

    const arr = [];

    return function startGame() {
    // for (let i = 0; i)

      const userNum = prompt(`Введите число от 1 до ${check.player}`);
      console.log(`Число игрок ${userNum}`);

      if (userNum === null) {
        if (confirm('Хотите завершить?')) {
          return;
        }
      } else if (userNum === '') {
        alert('Строка пустая');
        startGame();
      } else if (userNum === 0) {
        alert('Символов не достаточно');
      }

      const newUserNum = parseInt(userNum);
      console.log(newUserNum);

      if (Number.isNaN(newUserNum)) {
        arr.push(newUserNum);
        startGame();
      }

      console.log(newUserNum)

      if (newUserNum === NaN) {
        return;
      }

      const randNum = getRandomIntInclusive(2, 3);
      console.log(`Число рандом: ${randNum}`);

      if (newUserNum % randNum) {
        check.computer += newUserNum;
        check.player -= newUserNum;
      } else {
        check.player += newUserNum;
        check.computer -= newUserNum;
      }

      console.log(`Игрок: ${check.player} Компьютер: ${check.computer}`);

      if (check.player === 0) {
        alert('Вы проиграли');
        if (confirm('Хотите повторить?')) {
          check.player = 5;
          check.computer = 5;
          startGame();
        } else {
          return;
        }
      }

      if (check.computer === 0) {
        alert('Вы победили');
        if (confirm('Хотите повторить?')) {
          check.player = 5;
          check.computer = 5;
          startGame();
        } else {
          return;
        }
      }  

      startGame();

    }
  }

  window.MARB = game;

})();
