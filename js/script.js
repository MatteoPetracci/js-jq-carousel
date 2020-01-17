// Selezionare le classi next e prev che contengono le icone delle freccie e assegnargli una funziona che partira al click dell'utente
$(document).ready(
  function () {
    $('.next').click(
      function() {
        changeNext();
      }
    );

    $('.prev').click(
      function() {
        changePrev();
      }
    );
  }
)

function changeNext() {
  var imgActive = $('.img.active');
}
