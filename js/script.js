$(document).ready(function(){
$(".image-text").click(function(){
    $(".image").toggle();
    $(".text").toggle();
});
});

$(document).ready(function(){
    $(".image-text2").click(function(){
        $(".image2").toggle();
        $(".text2").toggle();
    });
    });

$(document).ready(function(){
    $(".image-text3").click(function(){
        $(".image3").toggle();
         $(".text3").toggle();
        });
        });
/*  */

function validateTheForm() {
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    if (Name == "") {
      alert("please fill in your Name");
      return false;
    } 
    else if (Email == "") {
      alert("Please fill in your name and Email");
      return false;
    }
     else {
      alert(
        Name +
          ", we have received your message. Thank you for reaching out to us."
      );
    }
    event.preventDefault();
  }