// TODO: Target the div with the id of deep-in-the-heart. When the div is clicked, spawn an alert that says "CLAPCLAPCLAPCLAPCLAP - Deep in the Heart of Texas!~".
$("#deep-in-the-heart").on("click", function(){
    alert("CLAPCLAPCLAPCLAPCLAP");
})

//TODO: Target the div with the id of what-color - when the div is clicked, the value of the color from that div should be populated as a string into the div#answer-color.
$("#what-color").on("click", function(){
   document.getElementById("answer-color").innerHTML = $("#what-color").css("color");
})


// TODO: When the user clicks the button#tacoButton, the value typed into the input#tacoBoutIt will be populated into the span#favorite-taco. Our goal is for our user to be able to type what kind of tacos they like to get and see that value where "*replaceMe" is.
$("#tacoButton").on("click", function(){
    document.getElementById("favorite-taco").innerHTML = document.getElementById("tacoBoutIt").value;
})


// TODO: When a list item from the ul#list-states is hovered over, populate the span#insert-state with the value of the specific state-list-item hovered over to complete the sentence.
    $("li").hover(
        function(){
            document.getElementById("insert-state").innerHTML = document.getElementsByClassName("state-list-item").value;
        },
        function() {
            document.getElementById("insert-state").innerHTML = "";
        }
    )


//TODO: Five seconds after the page loads, insert a string with the message "Oh, hey, didn't see you there" into the div#five-seconds.