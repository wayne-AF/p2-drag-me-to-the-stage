let image = document.getElementById('image');
let textAreaA = document.getElementById('text-area-a');
let textAreaB = document.getElementById('text-area-b');
let userDragName;
 /** The player's score, not visible to the player. */
 let playerScore = 0;
/** The items the player receives in each scenario get pushed into this array. */
let dragArray = [];



/** Attach event listener to submit button. */
document.getElementById('button-a').addEventListener('click', handleSubmit);
document.getElementById('button-a').addEventListener('click', function() {
  textAreaA.innerHTML = `You are ${userDragName}, a queen who blah blah blah!`;
});

/** This function must:
 * - calculate the item the player receives
 * - add it to dragArray
 * - display the outcome in textB (function chooseItem)
 * - show the button to the next scenario (button to call function nextScenario)
 */
function advanceScenario() {

}

/** This function must:
 * - advance to the next scenario
 * - display text in textA by looping through ScenarioA content
 * - show the button to advance the scenario (button to call function advanceScenario)
 */
function nextScenario() {

}

/** Scenario A and B hold the content to fill text areas A and B */
let scenarioA = {
  stage: {
    title: "IT'S GONNA BE A LONG NIGHT",
    textA: "You are ${userDragName}, an up-and-coming drag queen with an unquenchable thirst for attention an appropriate amount of delusion. You're in a new city to host your first show which could help take your career to the next level but the airline has lost all your drag luggage! With only a few hours to go before the most important night of your career, you need to beg, borrow (and maybe steal) all the supplies you need!",
    buttonAContent: "Got it!"
  }
}

let scenarioSectionB = {
  stage: {
    textB: "But watch out: your rival, Fish Lips, is also in town and she's out to snatch your gig! Try to put together the best look possible so that you can own the stage like the diva you are!",
    buttonBContent: "OK, let's play!"
  }
}














/** This array contains the entire range of possible items the player can receive, three possible items per scenario. */
let entireOutfitArray = [['bad wig', 'ok wig', 'great wig'],['bad shoes', 'ok shoes', 'great shoes'],['bad padding', 'ok padding', 'great padding'],['bad outfit', 'ok outfit', 'great outfit'],['bad make up', 'ok make up', 'great make up']];

/** This iterates through the entireOutfitArray, one string per button click, randomly chooses an item,
 * pushes that item into the dragArray, and displays a message to the player saying what they have received.
 * It also adds to the player score, depending on which item they have received. */
var i = 0;
document.getElementById('button-b').addEventListener('click', chooseItem);    
function chooseItem() {  
  let item = entireOutfitArray[i][Math.floor(Math.random()*entireOutfitArray[i].length)]; 
    
    dragArray.push(item);
    if (item.includes('great')) {
      textAreaB.innerHTML = `Well done, mama! You got the ${item}!`;
      playerScore += 3;
    } else if (item.includes('ok')) {
      textAreaB.innerHTML = `Not too shabby, sis! You got the ${item}.`;
      playerScore += 2;
    } else {
      textAreaB.innerHTML = `Yikes! Sorry girl, you got the ${item}...`;
      playerScore += 1;
    }
    i++
    if (dragArray.length >= 5) {
        i = 0;
    }
  console.log(dragArray)
  console.log(playerScore)
};



/** This randomly calculates the rival character's final score, between a minimum of 5 and maximum of 15,
 * (the min and max scores the player can receive) and compares it to the player's final score.
 * If the player's score is equal or higher, the player wins and the corresponding message is shown. 
 */
let rivalScore = 0;
document.getElementById('button-c').addEventListener('click', finalResult);
function finalResult() {
  rivalScore = Math.floor(Math.random() * (15 - 5 + 1)) + 1;

  if (rivalScore <= playerScore) {
    textAreaB.innerHTML = `
    Congratulations, ${userDragName}! 
    You slayed the lip sync and the crowd has voted you the winner!
    After all that, you get to host the show! Time to let your star shine bright!
    `
  } else {
    textAreaB.innerHTML = `
    Sorry, ${userDragName}. 
    The crowd has voted Fish Lips the winner and this means she gets your hosting gig.
    Better luck next time!
    `
  }
  console.log(rivalScore);
}  

/** Convert text entered into title case. */
function handleSubmit(event) {
  event.preventDefault();
  
  let nameInput = document.getElementById('name-input').value;
  let lowerCaseName = nameInput.toLowerCase();
  let nameArray = lowerCaseName.split(' ');
    for (let i = 0; i < nameArray.length; i++) {
      nameArray[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
    }
  userDragName = nameArray.join(' '); 
  console.log(userDragName);
  
}