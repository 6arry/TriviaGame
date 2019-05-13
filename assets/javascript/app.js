// ON.CLICK FUNCTIONS ================================================== //

$('#start').on('click', function () {
    // console.log("You clicked start")
    game.start();
});

// GLOBAL VARIABLES ==================================================== //

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    start: function(){
        timer = setInterval(game.countDown, 1000);
        $('.timeBoard').prepend('<h3>Time Remaining: <span id="timeLeft">2:00</span></h3>')
        $('#start').remove();
        for (var i=0;i<questions.length;i++){
            $('#main-section').append('<h3>' + questions[i].question + '</h3>');
            for (var j=0;j<questions[i].answers.length;j++){
                $('#main-section').append("<input type='radio' name='question-'" + i + "value=" + questions[i].answers[j] + ">" + " " + questions[i].answers[j] + " " + "</input>")
            }
        }
    },
    countDown: function(){
        game.counter--;
        var convertedCounter = timeConverter(game.counter);
        $('#timeLeft').html(convertedCounter);
        // console.log(convertedCounter)
        if(game.counter<=0){
            // console.log("Time's UP!!!")
            game.done();
        }
    }
}

function timeConverter(t) {
    //  Takes the current time in seconds and convert it to minutes and seconds (m:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    } if (minutes === 0) {
      minutes = "0";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }

// QUESTIONS ============================================== //
var questions = [{ // Question 1 =============================
    question: "What was Bambi's first word?",
    answers: ['Tree', 'Flower', 'Bird', 'Mother'],
    corretAnswer: 'Bird'
},   { // Question 2 =========================================
    question: "What is the only Disney animated feature film that has a title character who doesn't speak?",
    answers: ['The Fox and the Hound', 'Lilo & Stitch', 'Lady & the Tramp', 'Dumbo'],
    correctAnswer: 'Dumbo'
},   { // Question 3 =========================================
    question: "What popular Disney character makes a cameo appearance as a stuffed animal in Frozen?",
    answers: ['Donald Duck', 'Stitch', 'Dumbo', 'Mickey Mouse'],
    correctAnswer: 'Mickey Mouse'
},   { // Question 4 =========================================
    question: "Where does Aladdin live?",
    answers: ['Baghdad', 'Agrabah', 'Ishtar', 'Qumar'],
    correctAnswer: 'Agrabah'
},   { // Question 5 =========================================
    question: "In Aladdin, what is Jafar's last wish?",
    answers: ['To become a sorcerer', 'To become a giant snake', 'To become a sultan', 'To become a genie'],
    correctAnswer: 'To become a genie'
},   { // Question 6 =========================================
    question: "Which Disney princess has a racoon for a sidekick?",
    answers: ['Tiana', 'Mulan', 'Pocahontas', 'Moana'],
    correctAnswer: 'Pocahontas'
},   { // Question 7 =========================================
    question: "In Mulan, what type of animal perches on the shoulder of the villain Shan Yu?",
    answers: ['Tiana', 'Falcon', 'Eagle', 'Dragon'],
    correctAnswer: 'Falcon'
},   { // Question 8 =========================================
    question: "What is Boo's real name in Monster's Inc.?",
    answers: ['Suzie', 'Mary', 'Ashley', 'Alice'],
    correctAnswer: 'Mary'
},   { // Question 9 =========================================
    question: "In The Lion King, what is Simba's mother's name?",
    answers: ['Nala', 'Sarafina', 'Nubia', 'Sarabi'],
    correctAnswer: 'Sarabi'
},   { // Question 10 ========================================
    question: "Which character in Frozen likes warm hugs?",
    answers: ['Elsa', 'Olaf', 'Kristoff', 'Anna'],
    correctAnswer: 'Olaf'
}];


// FUNCTIONS =========================================================== //




// function countDown() {
//     timeLeft = timeLeft - 1;
//     if (timeLeft < 61) {
//         $('#timer').html(timeLeft)
//     }

//     if (timeLeft < 1) {
//         window.clearInterval(update);
//     }
// }

// update = setInterval('countDown()', 1000);

// countDown();