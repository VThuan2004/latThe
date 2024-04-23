
var firstCard = null; 
var secondCard = null; 
var cardsFlipped = 0; // Số các thẻ đã lật
var canFlip = true; // Cho phép lật thẻ
function latThe(card) {
  if (!canFlip) return;
  //kiểm tra thẻ đã được lật chưa
  if (card.classList.contains('flipped')) return;

  // Lấy thẻ
  var img = card.querySelector('img');

  // Lật thẻ
  card.classList.add('flipped');
  img.src = "card_img/" + img.alt + ".png"; 

  if (firstCard === null) {
    // Chưa có thẻ được chọn trước đó
    firstCard = card;
  } else {
    // Đã có thẻ được chọn trước đó
    secondCard = card;
    canFlip = false; // 

    // so sánh 2 thẻ được lật
    if (firstCard.querySelector('img').src === secondCard.querySelector('img').src) {
      // 2thẻ giống nhau
      setTimeout(function() {
        firstCard.style.visibility = 'hidden';
        secondCard.style.visibility = 'hidden';
        resetCards();
      }, 500);
      cardsFlipped += 2;
    } else {
      // Nếu 2 thẻ không giống nhau
      setTimeout(function() {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        
        firstCard.querySelector('img').src = "card_img/img_blank.png";
        secondCard.querySelector('img').src = "card_img/img_blank.png";
        resetCards();
      }, 500);
    }
  }
}
function resetCards() {
  firstCard = null;
  secondCard = null;
  canFlip = true;
}
function shuffleCards() {
  var container = document.getElementById('container');
  for (var i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
  }
}
function Reset() {

  firstCard = null;
  secondCard = null;
  cardsFlipped = 0;
  canFlip = true;

  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
    card.classList.remove('flipped');
    card.style.visibility = 'visible';
    var img = card.querySelector('img');
    img.src = "card_img/img_blank.png";
  });
  shuffleCards();
}
document.addEventListener('DOMContentLoaded', function() {
  shuffleCards();
});