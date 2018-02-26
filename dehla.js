var suites = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var players = [
{
	name: "Playera1",
	cards: [],
},
{
	name: "Playerb1",
	cards: [],
},
{
	name: "Playera2",
	cards: [],
},
{
	name: "Playerb2",
	cards: [],
}];

function getDeck(){
	let deck = new Array();
	for (i = 0; i < suites.length; i++){
		for(j = 0; j < values.length; j++){
			card = {Suite: suites[i], Value: values[j]};
			deck.push(card);
		}
	}
	return deck;
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var deal = function(){
    var index = Math.floor(Math.random() * newDeck.length + 1);
    var card = newDeck[index];
    newDeck.splice(index, 1);
    return card;
};


let newDeck = getDeck();
shuffle(newDeck);
console.log(newDeck);

for(let i = 0; i < players.length; i++){
	for(let j = 0; j < 5; j++){
		players[i].cards.push(deal(newDeck));
	} 
}

console.log(newDeck);







