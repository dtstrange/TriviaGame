window.onload = function() {
    //quiz object
    var quiz = {
        //universal variables for counters and arrays
        correctSelect: 0,
        wrongSelect: 0,
        unanswered: 10,
        answers: ["Bruce Wayne", "Alfred Pennyworth", "The Great Zatara", "Gotham", "Talia Al'ghul", 'Richard "Dick" Grayson', "Mr. Freeze", "Harley Quinn", "Kathy Kane", "Casandra Cain"],
        userSelect: []

    };
    //set onclick to trigger interval, hide start button, show quiz

    $("#begin").on("click", function() {
        $("#beginRow").css("display", "none")
        $("#game").css("display", "block")

        function countDown() {
            setInterval(function(){
                check()
            }, 90000);
        }
        countDown()
    });

    //make for loop with if else quesions
    function check(e) {
        var radios = document.getElementById('quiz1')
        for (var i = 0; i < quiz.answers.length; i++) {
            console.log(selected)
            var selected = $("input[name='Q" + (i + 1) + "']:checked").val();
            if (selected === quiz.answers[i]) {
                console.log("correct")
                quiz.correctSelect++
                    quiz.unanswered--
            } else if (selected !== quiz.answers[i] && selected !== undefined) {
                console.log("incorrect");
                quiz.wrongSelect++;
                quiz.unanswered--;
            }
        }
        result()
    };


    //function to trigger when time runs out
    function result() {
        $("#game").css("display", "none");
        var newDiv = $('<div>');
        newDiv.css("background-color", "grey");
        newDiv.attr("id", "results");
        

        newDiv.append("<p>Correct Answeres: " + quiz.correctSelect + "</p>");
        newDiv.append("<p>Wrong Answeres: " + quiz.wrongSelect + "</p>");
        newDiv.append("<p>Unanswered Questions: " + quiz.unanswered + "</p>");

        $("#main").append(newDiv);
        $("#main").css("text-align", "center")
    };
    //set onclick for submit to activate time out function
    $("#submit").on("click", function(event) {
        event.preventDefault()

        function clearTimer(){
        clearInterval(countDown)
        check();
        }
    });
};