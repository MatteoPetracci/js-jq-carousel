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

// con il metodo next()  prendiamo  il fratello successivo dell'elemento

function changeNext() {
  var imgActive = $('img.active');
  var nextImg = imgActive.next();
  var iconActive = $('i.active');
  var nextIcon = iconActive.next();
  var firstImg = $('img.first');
  var firstIcon = $('i.first');
  console.log(iconActive);
  console.log(nextIcon);

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


// grazie al metodo prev() ottieni il fratello immediatamente precedente di ciascun elemento al contrario di next()

// grazie a questo metodo creare una funzione che permetta di scorrere all'indietro le immagini

function changePrev() {
  var imgActive = $('img.active');
  var prevImg = imgActive.prev();
  var iconActive = $('i.active');
  var prevIcon = iconActive.prev();
  var firstImg = $('img.last');
  var firstIcon = $('i.last');

// ora a differenza di prima controllare se è contenuta in imgActive la classe first

  if (imgActive.hasClass('first')) {
    imgActive.removeClass('active');
    firstImg.addClass('active');
    iconActive.removeClass('active');
    firstIcon.addClass('active');
  } else {
    imgActive.removeClass('active');
    prevImg.addClass('active');
    iconActive.removeClass('active');
    prevIcon.addClass('active');
  }
}
