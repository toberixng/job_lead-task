function openForm() {
  document.getElementById("popBox").style.display = "block";
}

function closeForm() {
  document.getElementById("popBox").style.display = "none";
}


/* This block of code makes the button to disappear when it is clicked on 
and reappear when the close icon on the pop up box is clicked on */
$(document).ready(function(){
  $(".open-button").click(function(){
    $(this).hide();
  });
  $(".close").click(function(){
    $(".open-button").show();
  });
});