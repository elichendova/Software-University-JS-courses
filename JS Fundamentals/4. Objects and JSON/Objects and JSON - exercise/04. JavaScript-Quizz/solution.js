function solve() {
  let answers = [];
  let key = [2, 4, 2];
  let questionCounter = 0;
  let correctAnswersCounter = 0;
  let btns = document.querySelectorAll(".quiz-answer");
  let resultScreen = document.querySelector("#results");


  for (let j = 0; j < btns.length; j++) {
    btns[j].addEventListener("click", () => {
      let section = document.getElementsByTagName("section")[questionCounter];
      let nextSection = document.getElementsByTagName("section")[questionCounter + 1];

      section.style.display = "none";
      if (questionCounter < 2) {
        nextSection.style.display = "block";
      }
      questionCounter++;
      answers.push(+btns[j].getAttribute("data-quizIndex"));

      /*After all answers are answered, show result screen*/
      if (questionCounter === 3) {
        resultScreen.style.display = "block";
        let heading = document.querySelector(".results-inner h1");

        /*Check number of correct answers*/
        for (let i = 0; i < questionCounter; i++) {
          if (answers[i] === key[i]) {
            correctAnswersCounter++;
          }
        }

        /*Display result*/
        if (correctAnswersCounter === questionCounter) {
          heading.innerHTML = "You are recognized as top JavaScript fan!";
        } else {
          heading.innerHTML = `You have ${correctAnswersCounter} right answers`;
        }
      }
    });
  }
}
