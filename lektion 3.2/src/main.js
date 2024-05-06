import _ from "underscore";
import anime from "animejs";

const suits = ["hearts", "clubs", "diamonds", "spades"];
const chars = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Kn", "Q", "K", "A"];
const deck = [];
// {
// suit: 'hearts',
// char : 'kn'
// }

for (const suit of suits) {
    for (const char of chars) {
        deck.push({suit,char});
        
    }
    
}
console.log(deck);

const a = 10;
const b = 33;
const obj = {a,b}
console.log(obj);

const shuffleDeck = _.shuffle(deck);
console.log(shuffleDeck);

const randomIndex = _.random(shuffleDeck.length-1);
console.log(shuffleDeck[randomIndex]);

const hand = _.sample(shuffleDeck, 5);
console.log(hand);

const shuffledDeckWhitoutHand = _.without(shuffleDeck, ...hand);
console.log(shuffledDeckWhitoutHand);


const animationObj = {
    targets: 'div',
    translateX: '500px',
    duration: 2000,
    loop: true,
    easing: 'linear',
    direction: 'alternate'
}
anime(animationObj);
