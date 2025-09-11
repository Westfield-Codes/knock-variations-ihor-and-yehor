
/* Global variables */
var who = "Tank";
var joke = "You're welcome!";
var expected = who + " who?";

/* Simple version */
function knock(){
  prompt("Knock Knock!");
  prompt(who);
  alert(joke);
}

/* Better */
function knockCheck(){
  prompt("Knock Knock!");
  var answer = prompt(who);
  if (answer == expected) alert(joke);
  else alert("Huh?");
}

/* Best */
function knockAgain(){
  prompt("Knock Knock!");
  var answer = prompt(who);
  // what is the difference between = and ==?
  if (answer == expected) alert(joke);
  else askAgain();
}

function askAgain() {
  alert("Huh?");
  var answer = prompt(who);
  if (answer == expected) alert(joke);
  else askAgain(); // recursion
}
