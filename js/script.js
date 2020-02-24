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
$("#submit").click(function (event) {
    event.preventDefault();
    var user = $("#name").val();
    var message = $("email").val();
    var area = $("#random").val();
    //var key = '43ab10333d46e19325f96d210ed40c49-us5';//
    if (user == "" || message == "" || area == "") {
        alert(user + " we have recieved your submission")        } else {
        alert("fill out fields")        }    })
