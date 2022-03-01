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


  const $popUp = $(`#pop-up`);
  const $closeBtn = $(`#close`);
  const modalOpened = localStorage.getItem("modalOpened");

  const openModal = () => {
    $popUp.css('display', 'block')
  }
  const closeModal = () => {
    $popUp.css('display', 'none');
    localStorage.setItem("modalOpened");
  }
  $closeBtn.on('click', closeModal);

  if(!modalOpened) {
    setTimeout(openModal, 3000)
  }
})