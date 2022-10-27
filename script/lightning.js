// de animatie starten
// Maak van het animate element een variable en maak een functie die de de animatie start met de method beginElement.
document
  .querySelector('.js-button-lightning')
  .addEventListener('click', function () {
    console.log('click');
    var animate = document.getElementById('lightning');
    animate.beginElement();
  });





