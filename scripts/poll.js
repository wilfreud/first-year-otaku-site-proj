let poll = {
    question:"Quel animé a le personnage le pus détesté ?",
    answers:["Naruto (Danzo)", "S.N.K (Gabi)", "One PIece (Akainu)", "Tokyo Revengers (Kisaki)"],
    pollCount:20,
    answersWeight:[3, 6, 9, 2],
    selectedAnswer:-1
};

let pollQuery = {
    question:document.querySelector(".poll .question"),
    answers:document.querySelector(".poll .answers")
  };
  
  pollQuery.question.innerText = poll.question;
  pollQuery.answers.innerHTML = poll.answers.map(function(answer,i){
    return (
      `
        <div class="answer" onclick="markAnswer('${i}')">
          ${answer}
          <span class="percentage-bar"></span>
          <span class="percentage-value"></span>
        </div>
      `
    );
  }).join("");
  
  function markAnswer(i){
    poll.selectedAnswer = +i;
    try {
      document.querySelector(".poll .answers .answer.selected").classList.remove("selected");
    } catch(msg){}
    document.querySelectorAll(".poll .answers .answer")[+i].classList.add("selected");
    showResults();
  }
  
  function showResults(){
    let answers = document.querySelectorAll(".poll .answers .answer");
    for(let i=0;i<answers.length;i++){
      let percentage = 0;
      if(i == poll.selectedAnswer){
        percentage = Math.round(
          (poll.answersWeight[i]+1) * 100 / (poll.pollCount+1)
        );
      } else {
        percentage = Math.round(
          (poll.answersWeight[i]) * 100 / (poll.pollCount+1)
        );
      }
      
      answers[i].querySelector(".percentage-bar").style.width = percentage + "%";
      answers[i].querySelector(".percentage-value").innerText = percentage + "%";
    }
  }
endpop();
function endpop(){
      let end = document.querySelector(".answers");
      end.addEventListener("click", () => {
          let show = document.getElementById("thanks");
          show.classList.add("active");
          let hide = document.getElementById("ppoll");
          hide.classList.add("inactive");
      })
  }
