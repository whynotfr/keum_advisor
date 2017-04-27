var a = "demo"

console.log(window)

$('#login_facebook')
  .transition('jiggle')
;

$( document ).ready(function() {
   	$("#login_facebook").mouseover(function(){
    $("#login_facebook").transition('jiggle');
	});
});