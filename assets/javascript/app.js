window.onload = function() {
    //quiz object
    var quiz = {
        //universal variables for counters and arrays
        correctSelect: 0,
        wrongSelect: 0,
        unanswered: 10,
        answers: ["Bruce Wayne", "Alfred Pennyworth", "The Great Zatara", "Gotham", "Talia Al'ghul", 'Richard "Dick" Grayson', "Mr. Freeze", "Harley Quinn", "Kathy Kane", "Casandra Cain"],
        // questions: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"]

    };
    //set onclick to trigger interval, hide start button, show quiz

    $("#begin").on("click", function() {
        $("#beginRow").css("display", "none")
        $("#game").css("display", "block")
        
    });

    //make for loop with if else quesions
    function check(e) {
        
        var radios = $(this).find("input:radio").each(...)
        for (var i = 1; i < typeof(radios["Q" + i]) !== "undefined"; i++) {
            for (var j = 0; j < radios["Q" + i].length; j++) {
                if (radios["Q" + i][j].checked === quiz.answers[j]) {
                    quiz.correctSelect++
                    quiz.unanswered--
                } else if (radios["Q" + i][j].checked !== quiz.answers[j]) {
                    quiz.wrongSelect++
                    quiz.unanswered--
                }
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
        

        $("#results").append("<p>Correct Answeres: " + correctSelect + "</p>");
        $("#results").append("<p>Wrong Answeres: " + wrongSelect + "</p>");
        $("#results").append("<p>Unanswered Questions: " + unanswered + "</p>");

        $("#container").append("#results");
    };
    //set onclick for submit to activate time out function
    $("#submit").on("click", function(event){
        event.preventDefault()
        check()

    });
};