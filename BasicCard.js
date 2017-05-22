module.exports = BasicCard();

function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}

BasicCard ("Who was the first president of the United States?", "George Washington");

console.log("Front of the card: " + global.front);
console.log("Back of the card: " + global.back);