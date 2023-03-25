// Code your solutions in this file

const names = (["Guadalupe", "Ollie", "Aki"]);

function writeCards(names) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
       // console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        debugger;
    }
        return thankYouMessages;
}
writeCards(names);

function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
countDown(4);