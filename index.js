function validateEmail(email){
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}
function validate(){
    var email=$("#email").val();
    var inputBox=$("#email");
    var result= $("#result");
    if(validateEmail(email)){
      result.text("Well done 👍");
      result.css("color"," hsl(0, 6%, 24%)");
      inputBox.css("border-color"," hsl(0, 6%, 24%)")  ;
      $(".error_icon").css("display","none");
    }else{
        result.text("Please provide a valid email");
        result.css("color"," red");
        inputBox.css("border-color"," red")  ;
        $(".error_icon").css("display","unset");
    }
    return false;
}
$("#validate").on("click",validate);