function yourName() {
  let name = prompt("What is your name?");
  document.write("Watson welcomes you, " + name);
}


function guessNumber() {
  let answer;
  let lobsterRolls = 0;

  do {
    lobsterRolls++;
    answer = prompt("How many lobster rolls are you buying me, between 1 and 10");
  } while (parseInt(answer) !== 1)

  if (parseInt(answer) === 1) {
    document.write("You are paying for " + lobsterRolls + " lobster roll(s). Thank you!")
  }

}
function rating() {
  let output = '';
  let rating = prompt("Scale of 1-5 how happy are you?");

  for (let i = 0; i < rating; i++) {
    output += "<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhotemoji.com%2Fimages%2Femoji%2Fa%2F12wsvdp4xj2ba.png&f=1&nofb=1' />";
 }

  document.write(output);

}
