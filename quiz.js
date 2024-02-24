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

    if(question5 == write){
        pomodoroEffect++;
    } else if(question5 == spell){
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
	
	var pictures = ["mozart.jpg", "mind.jpg", "pomodoro.jpg", "feynam.jpg"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (mozart > feynam && mozart > mindMaps && mozart > pomodoroEffect) {
		score = 0;
	}

	if (mindMaps > mozart && mindMaps > feynam && mindMaps > pomodoroEffect) {
		score = 1;
	}

	if (pomodoroEffect > feynam && pomodoroEffect > mindMaps && pomodoroEffect > mozart){
		score = 2;
	}

    if (feynam > mozart && feynam > mindMaps && feynam > pomodoroEffect) {
		score = 3;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("picture").src = pictures[score];
	}