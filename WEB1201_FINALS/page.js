function validation(){
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding= "10px";


    if(message.length <10){
        text="Please enter more than 10 characters";
        error_message.innerHTML = text;
        return false;
    }

   

    alert("Form is sent! Thank you :) ")
return true;
}

function validation_login(){
    var password = document.getElementById("password").value;

 if(password.length<=6){
        text="Please enter password more than 6 characters";
        error_message.innerHTML = text;
        return false;
    }
   

    alert("Logged in!")
return true;


}

function openForm() {
    document.getElementById("form_login").style.display = "flex";
  }
  
  function closeForm() {
    document.getElementById("form_login").style.display = "none";
  }

 
function validation_signin(){
    var error_message_signin = document.getElementById("error_message_signin");
    error_message_signin.style.padding= "10px";

    var number = document.getElementById("number").value;
    var number1 = document.getElementById("number1").value;
    var zipcode = document.getElementById("zipcode").value;


    if (isNaN(number) || (number.length<2)  ){
      text="Please enter a valid area code";
      error_message_signin.innerHTML = text;
      return false; }

    


     if (isNaN(number1) || (number1.length<5)  ){
        text="Please enter a valid phone number";
        error_message_signin.innerHTML = text;
        return false; }
     

        


     if (isNaN(zipcode) || (zipcdode.length<5) ){
        text="Please enter a valid zipcode";
        error_message_signin.innerHTML = text;
        return false; }
        

      

          alert("Form sent!")
          return true;
        


    
    

}

