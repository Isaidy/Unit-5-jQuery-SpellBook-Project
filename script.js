//Spell #1

$(".light").click(function(){
    $(".flashlight").fadeToggle();

});



//Spell #2

$(".hide").dblclick(function(){
    $(".hide2").hide();
 
});



//Spell #3

$(".float").click(function(){
    $(".float2").slideUp();
});

$("button").hide();

$("footer").click(function(){
    $("button").show();
});

function h1()
{
document.getElementById ("title").innerHTML ="The Boy who Lived";
}



function photo()
{
    document.getElementById ("harry").innerHTML ="Harry";
}
