var CARDS = [
  'ビデオ研究', 
  'マンツーマン', 
  'プレス', 
  'カウンター', 
  'ミニゲーム', 
  'ラインコントロール', 
  'セットプレー'
];

function setupCardTable(cards, color) {
  var table = document.getElementById("card");
  table.style.tableLayout = 'fixed';
  var rows = [ table.insertRow(-1), table.insertRow(-1) ];
  for(i in cards) {
    var row = rows[Math.floor(i * 2 / cards.length)];
    var cell = row.insertCell(-1);
    var input = document.createElement('input');
    input.type = 'button';
    input.value = cards[i];
    input.style.width = '100%';
    input.style.backgroundColor = color;
    input.onclick = function() {
      this.style.backgroundColor = '#ff0000';
    }
    cell.appendChild(input);
  }
}

window.onload = function() {
  setupCardTable(CARDS, '#408040');
}
