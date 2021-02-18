const quizDB =[
{
	question: "Q1: what is the full form of HTML?",
	a:"hello To My Land",
	b:"hey Text Mark up language",
	c:"HyeprText Markup language",
	d:"Hypertext Markup Language",
   ans:"ans4"
},
{
	question: "Q1: what is the full form of CSS?",
	a:"cascading style sheet",
	b:"cartoon style sheet",
	c:"cascading style sheets",
	d:"cascading super sheets",
   ans:"ans1"
},
{
	question: "Q1: what is the full form of HTTP?",
	a:"hypertext transfer product",
	b:"hypertext test protocol",
	c:"Hey transfer protocol",
	d:"Hyeprtext transfer Protocol",
   ans:"ans4"
},
{
	question: "Q1: what is the full form of JS?",
	a:"javascript", 
	b:"javasuper",
	c:"justscript",
	d:"jordon shoes",
   ans:"ans1"
}
];


const question = document.querySelector('.question');
const opetion1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');

let questionCount = 0;
let score =0;

const loadQuestion=()=>{
	const questionList=quizDB[questionCount]
	 question.innerText = questionList.question;

	 option1.innerText = questionList.a;
	 option2.innerText = questionList.b;
	 option3.innerText = questionList.c;
	 option4.innerText = questionList.d;
}


loadQuestion();

const getCheckAnswer =()=>{
	let answer;


answers.forEach((curAnsElem)=>{
	if(curAnsElem.checked){
		answer = curAnsElem.id;
	}

});
return answer;
};

const deselectAll =()=>{
answers.forEach((curAnsElem)=>curAnsElem.checked = false);

}


submit.addEventListener('click', ()=>{
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if(checkedAnswer==quizDB[questionCount].ans)
  {
  	score++;
  }

questionCount++;
deselectAll();

  if(questionCount< quizDB.length){
loadQuestion();
  }else
  {
  	showScore.innerHTML =`
     <h3> your scored is ${score}/${quizDB.length} </h3>
     <button class="btn" onclick="location.reload()">Play again</button>

  	`;
  	showScore.classList.remove('showArea');
  }
});