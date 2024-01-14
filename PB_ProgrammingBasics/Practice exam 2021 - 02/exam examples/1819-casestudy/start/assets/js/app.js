const questions=[
    {
        number: 1,
        Question: "01101000 01100101 01101100 01101100 01101111",
        Answer: "Hello"
    },
    {
        number: 2,
        Question: "01010111 01100101 01101100 01101011 01101111 01101101",
        Answer: "Welkom"
    },
    {
        number: 3,
        Question: "01010100 01101111 01110100 00100000 01111010 01101001 01100101 01101110 01110011",
        Answer: "Tot ziens"
    },
    {
        number: 4,
        Question: "01000111 01110010 01101111 01100101 01110100 01101010 01100101 01110011",
        Answer: "Groetjes"
    },
]

window.addEventListener('load', init);
const inputButton=document.getElementById("submit");
const questionShowed=document.getElementById("questionText");
const message=document.getElementById("answerText");
const span=document.getElementById("answerGiven");
const container=document.getElementById("container");
const form=document.getElementById("answerForm");


function init() {
    console.log('DOM is loaded');
    inputButton.addEventListener("click",checkAnswer);
    const newQButton=document.createElement("button");
    newQButton.type="button";
    newQButton.innerText="Generate new question";
    container.append(newQButton);
    newQButton.addEventListener("click",newQuestion);
    
}

function checkAnswer(event){
let input=document.getElementById("inputAnswer").value;
const displayedQuestion=questions.filter(function (q){
    return q.Question===questionShowed.innerText;
});
if(displayedQuestion[0].Answer===input){
    correctAnswer(input);
} 
else{
    wrongAnswer(input);
}
}


function correctAnswer(input){
    container.classList.add("bg-green");
    container.classList.remove("bg-red");
    message.innerHTML=`Your answer <span class="bg-green">${input}</span> is fully correct`;}

function wrongAnswer(input){
    container.classList.add("bg-red");
    container.classList.remove("bg-green");
    message.innerHTML=`Unfortunately <span class="bg-red">${input}</span> is not correct, try again`;   
}


function newQuestion(event){
    const otherQuestions=questions.filter(function (q){
        return q.Question!==questionShowed.innerText;
    });
   let i=Math.floor(Math.random() * (otherQuestions.length )) + 0;
    console.log(i);
   questionShowed.innerText=otherQuestions[i].Question;
}
