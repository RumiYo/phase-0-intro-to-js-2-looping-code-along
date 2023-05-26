// Code your solutions in this file
/*
const gifts = ["teddy bear","drone","doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);
*/
const names = ["Tom", "Paul", "David"];
const messages = [];
function writeCards(names){
    for (let i = 0; i < names.length; i++){
        messages[i] =  `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    }
    return messages;
}
writeCards(names);
    
let countdown = 10;
function countDown(countdown) {
    while (countdown >= 0){
        console.log(countdown--);
    }
}
countDown(countDown);