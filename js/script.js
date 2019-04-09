function openBox() {
  document.getElementById("popBox").style.display = "block";
}

function closeBox() {
  document.getElementById("popBox").style.display = "none";
}


/* This block of code makes the button to disappear when it is clicked on 
and reappear when the close icon on the pop up box is clicked on */
$(function(){
  $(".open-button").click(function(){
    $(this).hide();
  });
  $(".close").click(function(){
    $(".open-button").show().addClass('animated fadeInUp');
  });
});

$(function(){

$("button.open-button").on('click', function(){
  
  $('.right-side-pop').addClass('animated bounceInRight');

});
});




