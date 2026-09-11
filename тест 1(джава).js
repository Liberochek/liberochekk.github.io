function checkAnswers(){


let a1 =
document.getElementById("answer1").value
.toLowerCase();


let a2 =
document.getElementById("answer2").value
.toLowerCase();


let a3 =
document.getElementById("answer3").value
.toLowerCase();



let score = 0;



if(a1.includes("глаз"))
score++;


if(a2.includes("улыб"))
score++;


if(a3.includes("люб"))
score++;



let result =
document.getElementById("result");



if(score === 3){

result.innerHTML =
"Ты всё правильно угадала 💖 Ты меня очень хорошо знаешь ❤️";

}

else {

result.innerHTML =
"Почти получилось 💕 Попробуй ещё раз";

}


}