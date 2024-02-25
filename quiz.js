function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;

	var pomodoroEffect = 0;
    var mindMaps = 0;
    var mozart = 0;
    var feynam = 0;


	if (question1 == "yes") {
		mozart++;
}
	if (question2 == "yea") {
		pomodoroEffect++;
}	
	if (question3 == "visual") {
		mindMaps++;
	} else if(question3 == "audio"){
        mozart++;
    }else{
        feynam++;
    }

    if(question4 == "pics"){
        mindMaps++;
    } else if(question4 == "words"){
        feynam++;
    }else{
        mindMaps++;
    }

    if(question5 == "write"){
        pomodoroEffect++;
    } else if(question5 == "spell"){
        mozart++;
    }else{
        mindMaps++;
    }

    if(question6 == "look"){
        mindMaps++;
    } else if(question6 == "talk"){
        feynam++;
    }else{
        pomodoroEffect++;
    }

    if(question7 == "emily"){
        mindMaps++;
    }else if(question7 == "reb"){
        feynam++;
    }else{
        mozart++;
    }

    if(question8 == "noRead"){
        feynam++;
    }else if(question8 == "distract"){
        pomodoroEffect++;
    }else{
        mindMaps++;
    }

    if(question9 == "reread"){
        pomodoroEffect++;
    }else if(question9 == "ask"){
        feynam++;
        mozart++;
    }else{
        mindMaps++;
    }
    
    if(question10 == "yes"){
        mindMaps++;
    }else{
        mozart++;
    }
	
	var pictures = ["images/mozart.jpg", "images/mind.jpg", "images/pomodoro.jpg", "images/feynam.jpg"];
	var messages = [
    "The Mozart effect is a theory that listening to Mozart, or any classical music for that matter, improves focus. Music can help students perform better in high pressure situations and help relieve stress. It’s important to remember that this theory may not work for everyone, as some students perform better without music.", 
    "Mind mapping is a useful technique that shows how different facts are related and enhances creative problem solving. It is a radical diagram that starts with the mainidea in the center and grows outwards with branching sub sections. Mind mapping helps our brains store important information more easily.", 
    "The pomodoro technique is a time management method based on 25 minute stretches of focused work broken by 5 minute breaks. The goal of this technique is to keep yourself motivated and cut down on distractions. ", 
    "The Feynman technique suggests choosing a concept or topic and teaching it to yourself or someone else. This technique encourages you to break down complex ideas using simple language. Teaching helps you engage deeply with the study material and identify holes in your understanding of the concept. "];
	var score;

	if (mozart > feynam && mozart > mindMaps && mozart > pomodoroEffect) {
		score = 0;
	}else if (mindMaps > mozart && mindMaps > feynam && mindMaps > pomodoroEffect) {
		score = 1;
	} else if (pomodoroEffect > feynam && pomodoroEffect > mindMaps && pomodoroEffect > mozart){
		score = 2;
	} else if (feynam > mozart && feynam > mindMaps && feynam > pomodoroEffect) {
		score = 3;
	} else {
        score = 1;
    }

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("picture").src = pictures[score];
	}