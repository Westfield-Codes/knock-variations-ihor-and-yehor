
/* Global variables */
var who = "Stalin";
var joke = "Stalin like to know!";
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
  else alert("You want to be sent to Siberia?");
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
  alert("You want to be sent to Siberia?");
  var answer = prompt(who);
  if (answer == expected) alert(joke);
  else askAgain(); // recursion
}
