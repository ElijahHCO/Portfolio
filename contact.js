$(document).ready(() => {
    var links = $("#myLinks");
    var hamburger = $("#hamburger");
  
    hamburger.click(() => {
      if (links.css("display") === "block") {
        links.css("display", "none");
      } else {
        links.css("display", "block");
      }
    });

$("#submitBtn").click(submitEmail)

function submitEmail() {
    let name = $("#name").val();
    let subject = $("#subject").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let message = $("#message").val();
    let errorMessage = document.getElementById("error-message");
    let text;

    errorMessage.style.padding = ".8em";

    if (name.length < 5) {
        text = "Please Enter a Name";
        errorMessage.innerHTML = text;
        return false;
    }

    if (subject.length < 3) {
        text = "Please Enter a Subject";
        errorMessage.innerHTML = text;
        return false;
    }

    if (isNaN(phone) || phone.length < 9) {
        text = "Please Enter a Valid Phone #";
        errorMessage.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter a Vaild Email";
        errorMessage.innerHTML = text;
        return false;
    }

    if (message.length <= 10) {
        text = "Message must be more than 100 characters";
        errorMessage.innerHTML = text;
        return false;
    }

    window.open(`mailto:hurnelijah@yahoo.com?subject=${subject}&body=${name}%0A${message}%0A${phone}`)
   
    return true;
}

})
