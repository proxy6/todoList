//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

//delete todos
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut("500", function(){
        $(this).remove();
    })
    event.stopPropagation()
})

// take inputs
$("input[type='text']").keypress(function(event){
if(event.which === 13){
    //collect input
    var inputText = $(this).val();
    //clear input tag
    $(this).val("");
    //add to  list
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + inputText + "</li>")
}
})

//toggle plus icon
$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle();
})