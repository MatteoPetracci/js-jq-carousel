// Selezionare le classi next e prev che contengono le icone delle freccie e assegnargli una funziona che partirà al click dell'utente
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

// Assegnare a delle variabili il contenuto che hanno le img con la classe active e eseguire la stessa cosa per le icone con classe active.

// con il metodo next  prendiamo  il fratello successivo dell'elemento

function changeNext() {
  var imgActive = $('img.active');
  var nextImg = imgActive.next();
  var iconActive = $('i.active');
  var nextIcon = iconActive.next();
  var firstImg = $('img.first');
  var firstIcon = $('i.first');

  // Dettiamo la condizione che se in imgActive è contenuta la classe last rimuoviamo e aggiungiamo la classe active alle varie immagine in successione
  
  if (imgActive.hasClass('last')) {
    imgActive.removeClass('active');
    firstImg.addClass('active');
    iconActive.removeClass('active');
    firstIcon.addClass('active');
  } else {
    imgActive.removeClass('active');
    nextImg.addClass('active');
    iconActive.removeClass('active');
    nextIcon.addClass('active');
  }
}
