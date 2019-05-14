// ON.CLICK FUNCTIONS ================================================== //

$('#start').on('click', function () {
    // console.log("You clicked start")
    game.start();
});

$(document).on('click', '#finished', function(){
    game.done();
    $('.timeBoard h3').remove();
})

// $('#finished').on('click', function() {
    //     game.done();
    //     $('.timeBoard').remove();
    // });

// GAME OBJECT ==================================================== //
    
var game = {
    correct: 0,
    incorrect: 0,
    counter: 90,
    
    // TIMER, QUESTIONS, ANSWERS, & FINISH ======================== // 
    start: function(){
        timer = setInterval(game.countDown, 1000);
        $('.timeBoard').prepend('<h3>Time Remaining: <span id="timeLeft">2:00</span></h3>')
        $('#start').remove();
        $('#timeLeft').attr('style', 'color:#00bb3e');
        $('#main-section').attr('style', 'background-color:white')
        for (var i=0;i<questions.length;i++){
            $('#main-section').append('<h3>' + questions[i].question + '</h3>');
            for (var j=0;j<questions[i].answers.length;j++){
                $('#main-section').append(" <input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>" + " " + questions[i].answers[j] + " ")
            }
        }
        $('#main-section').append('<br><button id="finished" class="donButton btn btn-success btn-lg" type="submit">Finish</button>')
    },
    // COUNT DOWN PROPERTY METTHOD =============================== //
    countDown: function(){
        game.counter--;
        var convertedCounter = timeConverter(game.counter);
        $('#timeLeft').html(convertedCounter);
        // console.log(convertedCounter)
        if(game.counter<=60) {
            $('#timeLeft').attr('style', 'color:yellow')
        } if (game.counter<=30) {
            $('#timeLeft').attr('style', 'color:red')
        } if(game.counter<=0){
            // console.log("Time's UP!!!")
            game.done();
        }
    },
    // GAME COMPLETED PROPERTY METHOD ============================= //
    done: function(){
        $.each($('input[name="question-0"]:checked'), function(){
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1"]:checked'), function(){
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2"]:checked'), function(){
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3"]:checked'), function(){
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4"]:checked'), function(){
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5"]:checked'), function(){
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6"]:checked'), function(){
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7"]:checked'), function(){
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-8"]:checked'), function(){
            if ($(this).val() == questions[8].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-9"]:checked'), function(){
            if ($(this).val() == questions[9].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.results();
    },
    // RESULTS OF QUIZ SCREEN ==================================== //
    results: function() {
        clearInterval(timer);
        $('.timeBoard h3').remove();
        $('#main-section').html('<h2>The magical trivia game is now OVER!</h2>')
        $('#main-section').append('<h3>Correct answers: ' + this.correct + '</h3>')
        $('#main-section').append('<h3>Incorrect answers: ' + this.incorrect + '</h3>')
        $('#main-section').append('<h3>Unanswered: ' + (questions.length-(this.incorrect+this.correct)) + '</h3>')
        $('#main-section').append('<h3>You got </h3><h1 style="color:#00bb3e">' + (100*(this.correct/questions.length)) + '%</h1>' + '<h3>right!</h3>')

    }
}
    
    // TIME CONVERSION FUNCTION ===================================== //
    function timeConverter(t) {
        //  Takes the current time in seconds and convert it to minutes and seconds (m:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        } if (minutes === 0) {
            minutes = "0";
        }
        //     else if (minutes < 10) {
        //     minutes = "0" + minutes;
        // }
        
        return minutes + ":" + seconds;
        }
    
// QUESTIONS ============================================== //

var questions = [
{ // Question 1 =========================================
    question: "What was Bambi's first word?",
    answers: ['Tree', 'Flower', 'Bird', 'Mother'],
    correctAnswer: 'Bird'
},   

{ // Question 2 =========================================
    question: "What is the only Disney animated feature film that has a title character who doesn't speak?",
    answers: ['The Fox and the Hound', 'Lilo & Stitch', 'Lady & the Tramp', 'Dumbo'],
    correctAnswer: 'Dumbo'
},   

{ // Question 3 =========================================
    question: "What popular Disney character makes a cameo appearance as a stuffed animal in Frozen?",
    answers: ['Donald Duck', 'Stitch', 'Dumbo', 'Mickey Mouse'],
    correctAnswer: 'Mickey Mouse'
},   

{ // Question 4 =========================================
    question: "Where does Aladdin live?",
    answers: ['Baghdad', 'Agrabah', 'Ishtar', 'Qumar'],
    correctAnswer: 'Agrabah'
},   

{ // Question 5 =========================================
    question: "In Aladdin, what is Jafar's last wish? To become a...",
    answers: ['Sorcerer', 'Giant Snake', 'Sultan', 'Genie'],
    correctAnswer: 'Genie'
},   

{ // Question 6 =========================================
    question: "Which Disney princess has a racoon for a sidekick?",
    answers: ['Tiana', 'Mulan', 'Pocahontas', 'Moana'],
    correctAnswer: 'Pocahontas'
},   

{ // Question 7 =========================================
    question: "In Mulan, what type of animal perches on the shoulder of the villain Shan Yu?",
    answers: ['Tiana', 'Falcon', 'Eagle', 'Dragon'],
    correctAnswer: 'Falcon'
},   

{ // Question 8 =========================================
    question: "What is Boo's real name in Monster's Inc.?",
    answers: ['Suzie', 'Mary', 'Ashley', 'Alice'],
    correctAnswer: 'Mary'
},   

{ // Question 9 =========================================
    question: "In The Lion King, what is Simba's mother's name?",
    answers: ['Nala', 'Sarafina', 'Nubia', 'Sarabi'],
    correctAnswer: 'Sarabi'
},   

{ // Question 10 ========================================
    question: "Which character in Frozen likes warm hugs?",
    answers: ['Elsa', 'Olaf', 'Kristoff', 'Anna'],
    correctAnswer: 'Olaf'
}];


// SCRATCH NOTES =========================================================== //

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