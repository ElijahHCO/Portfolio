
function validation() {
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("error-message");
    let text;

    errorMessage.style.padding = ".8em";

    if(name.length < 5){
        text = "Please Enter Vaild Name";
        errorMessage.innerHTML = text;
        return false;
    }
    return false
  }