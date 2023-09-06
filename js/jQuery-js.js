// *** Id selectors exercise ***
// $(function(){
//     // alert("Document has loaded!")
// })
//
// alert($("#ice-cream-list").html());
//
// alert($("#para").html());


// *** Class selectors exercise ***
// $(".codeup").css("border", "1px solid red");


//*** Element selectors exercise ***
// $("li, h1, p").css("background-color", "yellow");
//
// alert($("h1").html());

// *** Mouse Events Exercise ***
$("h1").on("click", function(){
    $("h1").css("background-color", "yellow");
})

$("p").on("dblclick", function(){
    $("p").css("font-size", "18px");
})

$("li").hover(function(){
    $("li").css("color", "red");
},
    function(){
    $("li").css("color", "black");
    })