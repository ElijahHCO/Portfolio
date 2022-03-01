
function submitEmail() {
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("error-message");
    let text;

    errorMessage.style.padding = ".8em";

    if(name.length < 5){
        text = "Please Enter a Name";
        errorMessage.innerHTML = text;
        return false;
    }

    if(subject.length < 5){
        text = "Please Enter a Subject";
        errorMessage.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length < 9){
        text = "Please Enter a Valid Phone #";
        errorMessage.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter a Vaild Email";
        errorMessage.innerHTML = text;
        return false;
    }

    if(message.length <= 100){
        text = "Message must be more than 100 characters";
        errorMessage.innerHTML = text;
        return false;
    }
    alert(`Thank you, ${name}! I look forward to speaking with you!`)
    return true;
    

  }
 
 
  
  
  