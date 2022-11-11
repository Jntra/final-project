//Question bank
var questionBank= [
	{
		question : '. Masa remaja merupakan masa pubertas, bagaimana kondisi organ reproduksi pada masa tersebut ?',
		option : ['Mulai proses pematangan fungsi','Endometrium siap menerima nidasi','Ovulasi terjadi teratur setiap siklus','Ampula tuda siap menjadi tempat nidasi'],
		answer : 'Mulai proses pematangan fungsi'
	}
  ]
  
  var question= document.getElementById('question');
  var quizContainer= document.getElementById('quiz-container');
  var option0= document.getElementById('option0');
  var next= document.querySelector('.next');
  var span= document.querySelectorAll('span');
  var i=0;
  var score= 0;
  
  //function to display questions
  function displayQuestion(){
	for(var a=0;a<span.length;a++){
		span[a].style.background='none';
	}
	question.innerHTML= ''+(i+1)+' '+questionBank[i].question;
	option0.innerHTML= questionBank[i].option[0];
	option1.innerHTML= questionBank[i].option[1];
	option2.innerHTML= questionBank[i].option[2];
	option3.innerHTML= questionBank[i].option[3];
	stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
  }
  
  //function to calculate scores
  function calcScore(e){
	if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
	{
		score= score+1;
		document.getElementById(e.id).style.background= 'pink';
	}
	else{
		document.getElementById(e.id).style.background= 'pink';
	}
  }
  
  //function to display next question
  function nextQuestion(){
	if(i<questionBank.length-1)
	{
		i=i+1;
		displayQuestion();
	}
	else{
		points.innerHTML= score+ '/'+ questionBank.length;
		quizContainer.style.display= 'none';
		scoreboard.style.display= 'block'
	}
  }
  
  //click events to next button
  next.addEventListener('click',nextQuestion);
  
  
  displayQuestion();