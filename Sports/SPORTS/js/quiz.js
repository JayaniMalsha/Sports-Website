
function begin() {
    sec = 60;
    disappear.innerHTML = "";
    document.getElementById("s_button").style.display = "flex";

}
function timer() {
    sec = sec - 1;
    if (sec < 60) {
        time.innerHTML = sec;
    }

    if (sec < 1) {
        window.clearInterval(update);
        message1.innerHTML = "Time is up";
        var x = document.getElementById("submit_button");
        x.click();
    }
}
update = setInterval("timer()", 1000);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {


    function showQuestions(questions, quizContainer) {
        let output = [];
        let answers;


        for (let i = 0; i < questions.length; i++) {


            answers = [];


            for (letter in questions[i].answers) {


                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {
        
        let answerContainers = quizContainer.querySelectorAll('.answers');


        let userAnswer = '';
        let numCorrect = 0;


        for (let i = 0; i < questions.length; i++) {


            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;



            if (userAnswer === questions[i].correctAnswer) {

                numCorrect++;


                answerContainers[i].style.color = 'green';
            }

            else {

                answerContainers[i].style.color = 'red';
            }
        }


        resultsContainer2.innerHTML = 'Questions 10'+"<br>"+"<br>"+'Wrong Answers:'+(10-numCorrect)+"<br>"+"<br>"+'Your score is ' + numCorrect + "<br>"+"<br>";
 
        resultsContainer.innerHTML ='grade ' + numCorrect * 10+ '%';

        if (numCorrect * 10 < 20) {
            document.body.style.background = "brown"
            resultsContainer.style.color="brown"
        }
        else if (numCorrect * 10 < 80) {
            document.body.style.background = "rgb(236,201,166)"
            resultsContainer.style.color="rgb(236,201,166)"
        } else {
            document.body.style.background = "green"
            resultsContainer.style.color="green"
        }
    }

    showQuestions(questions, quizContainer);


    submitButton.onclick = function () {
        disappear2.innerHTML = "";

    

        showResults(questions, quizContainer, resultsContainer, timer);
        
    }
}

let myQuestions = [
    {
        question: "Question 1:- Who is often referred to as the King in professional basketball? ",
        answers: {
            a: "Kobe Bryant"      + "<br>",
            b: "LeBron James"     + "<br>",
            c: "Michael Jordan"   + "<br>",
            d: "Shaquille O'Neal" + "<br>",
        },
        correctAnswer: 'b'
    },

    {
        question: " Question 2:-Which sport is known as the 'gentleman's game'?",
        answers: {
            a: 'Rugby'  + "<br>",
            b: 'Cricket'+ "<br>",
            c: 'Tennis' + "<br>",
            d: 'Golf'   + "<br>",
        },
        correctAnswer: 'b'
    },

    {
        question: " Question 3:-In which country did the sport of soccer (football) originate?",
        answers: {
            a: 'Brazil' + "<br>",
            b: 'England'+ "<br>",
            c: 'Spain'  + "<br>",
            d: 'Germany'+ "<br>",
        },
        correctAnswer: 'b'
    },

    {
        question: " Question 4:-What is the maximum number of players allowed on a soccer (football) team during a match?",
        answers: {
            a: '9'  + "<br>",
            b: '10' + "<br>",
            c: '11' + "<br>",
            d: '12' + "<br>",
        },
        correctAnswer: 'c'
    },

    {
        question: " Question 5:-Which athlete is considered the fastest man in recorded history for holding the world record in the 100-meter dash?",
        answers: {
            a: 'Usain Bolt'  + "<br>",
            b: 'Carl Lewis'  + "<br>",
            c: 'Jesse Owens' + "<br>",
            d: 'Yohan Blake' + "<br>",
        },
        correctAnswer: 'a'
    },

    {
        question: " Question 6:- In which sport can you score a 'try'?",
        answers: {
            a: 'American Football' + "<br>",
            b: 'Basketball'        + "<br>",
            c: 'Rugby'             + "<br>",
            d: 'Tennis'            + "<br>",
        },
        correctAnswer: 'c'
    },

    {
        question: " Question 7:-Which country won the most gold medals in the 2016 Summer Olympics",
        answers: {
            a: 'United States' + "<br>",
            b: 'China'         + "<br>",
            c: 'Russia'        + "<br>",
            d: 'Great Britain' + "<br>",
        },
        correctAnswer: 'a'
    },

    {
        question: " Question 8:-What is the highest possible break in a standard game of snooker?        ",
        answers: {
            a: '100' + "<br>",
            b: '147' + "<br>",
            c: '180' + "<br>",
            d: '210' + "<br>",
        },
        correctAnswer: 'b'
    },

    {
        question: " Question 9:-Which sport features terms like 'bump,' 'set,'' and 'spike'        ",
        answers: {
            a: 'Volleyball'  + "<br>",
            b: 'Ice Hockey'  + "<br>",
            c: 'Table Tennis'+ "<br>",
            d: 'Badminton'   + "<br>",
        },
        correctAnswer: 'a'
    },

    {
        question: " Question 10:-  In baseball, what is the term for a home run with all three bases occupied by baserunners?        ",
        answers: {
            a: 'Solo home run'            + "<br>",
            b: 'Grand slam'               + "<br>",
            c: 'Inside-the-park home run' + "<br>",
            d: 'Line drive'              + "<br>",


        },
        correctAnswer: 'b'
    }
    
];


let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

let resultsContainer2 = document.getElementById('results2')

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


