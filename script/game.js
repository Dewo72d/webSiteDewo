document.getElementById("answer").setAttribute("readonly", "readonly");
let answerRandom;

function getRandomInt() {
  do {
     let tray = Number(document.getElementById("tray").value);
    if (tray == 0) {
      tray = 1
    };

    let Min = Number(document.getElementById("min").value);
    let Max = Number(document.getElementById("max").value);


    if (isNaN(Min) || isNaN(Max)) {
      alert("Выввели не число, повторите попытку")
    } else if (Min > Max || Max < Min) {
      alert("Вы ввели числа не в том порядке")
    } else {
      let random = Min + Math.random() * (Max + 1 - Min);
      answerRandom = Math.floor(random);

      do {
        let check = Number(prompt(`Угадайте число от ${Min} до ${Max}`));
        if (check > answerRandom || check < answerRandom) {
          tray--
          alert(`Вы не угадали\nКоличество попыток = ${tray}`)
          if (tray == 0) {
            alert(`Верный ответ - ${answerRandom}`)
          };
        } else if (check == answerRandom) {
          alert(`Верно!!! ${answerRandom} `);
          break;
        }
      } while (tray > 0)
    }

    // Запись в "Верный ответ"
    function writeRandom() {
      val = document.getElementById("answer");
      //val.value = answerRandom;
      let tabOfResult = {
        min:  Min,
        max:  Max,
        tray: tray,
        AnswerRandom: answerRandom,  
      }
      
     b =  Object.entries(tabOfResult);
     let go = document.getElementById("area").value = b



      console.log(tabOfResult)
    }; 
    writeRandom();
    


    //-----------------------

  } while (isNaN(Min) || isNaN(Max) || Min > Max || Max < Min);
}

