
function hamburgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(
  () => {
  
    const $popUp = $(`#pop-up`);
    const $closeBtn = $(`#close`);

    const openModal = () => {
      $popUp.css('display', 'block')
    }
    const closeModal = () => {
      $popUp.css('display', 'none');
    }
    $closeBtn.on('click', closeModal);

    setTimeout(openModal, 3000)
  }
)