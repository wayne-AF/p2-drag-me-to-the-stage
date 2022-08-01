let image = document.getElementById('image');
let textAreaA = document.getElementById('text-area-a');
let textAreaB = document.getElementById('text-area-b');
let buttonA = document.getElementById('button-a');
let buttonB = document.getElementById('button-b');
let userDragName;
 /** The player's score, not visible to the player. */
 let playerScore = 0;
/** The items the player receives in each scenario get pushed into this array. */
let dragArray = [];



/** Attach event listener to submit button. */
document.getElementById('button-a').addEventListener('click', handleSubmit);
// document.getElementById('button-a').addEventListener('click', function() {
//   ;
// });

/** This function must:
 * - calculate the item the player receives
 * - add it to dragArray
 * - display the outcome in textB (function chooseItem)
 * - show the button to the next scenario (button to call function nextScenario)
 */
function advanceScenario() {
  
  
}

let allScenarios = [
  {title:"first-title", text:"first-text", button:"first-button"},
  {title:"second-title", text:"second-text", button:"second-button"},
  {title:"third-title", text:"hello, I am the third-text", button:"third-button"},
  {title:"fourth-scenario", text:"fourth-text", button:"fourth-button"},
  {title:"fifth-scenario", text:"fifth-text", button:"fifth-button"}
]
 
/** Scenario A and B hold the content to fill text areas A and B */
let scenarioA = {
  currentScene: "stage",
  stage: {
    title: "IT'S GONNA BE A LONG NIGHT",
    textA: "You are ${userDragName}, an up-and-coming drag queen with an unquenchable thirst for attention an appropriate amount of delusion. You're in a new city to host your first show which could help take your career to the next level but the airline has lost all your drag luggage! With only a few hours to go before the most important night of your career, you need to beg, borrow (and maybe steal) all the supplies you need!",
    buttonAContent: "Got it!"
  },
  stage: {
    title: "I NEED SOME HAIR",
    textA: "Your drag mother has called in a favour from her drag sis, MizMosa. You can have whatever you want from Mabussy's apartment while she's away on tour. One of her drag daughters lets you into her apartment but you find the place has been picked clean. Turns out Fish Lips is friends with the daughter and she's beaten you to the punch! You desperately search the apartment to see if she missed anything.",
    buttonAContent: "Check under the bed"
  },
  stage: {
    title: "I NEED SOME SHOES",
    textA: "You pass by a charity store with a donations bin outside. You pray that no one is around to record you and then you go dumpster diving. Amongst all the old clothes, you find an entire bag of shoes.",
    buttonAContent: "Check for your size"
  }
}




/** This array contains the entire range of possible items the player can receive, three possible items per scenario. */
let entireOutfitArray = [['bad wig', 'ok wig', 'great wig'],['bad shoes', 'ok shoes', 'great shoes'],['bad padding', 'ok padding', 'great padding'],['bad outfit', 'ok outfit', 'great outfit'],['bad make up', 'ok make up', 'great make up']];

/** This iterates through the entireOutfitArray, one string per button click, randomly chooses an item,
 * pushes that item into the dragArray, and displays a message to the player saying what they have received.
 * It also adds to the player score, depending on which item they have received. */
var i = 0;
// document.getElementById('button-b').addEventListener('click', getItem);    
function getItem() {  
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

/** Convert text entered into title case and displays the welcome text. */
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
  textAreaA.innerHTML = `
  <h2>It's gonna be a long night</h2>
  <p>You are ${userDragName}, an up-and-coming drag queen with an unquenchable thirst for attention and a healthy dose of delusion. You're in a new city to host your first show which could help take your career to the next level but the airline has lost all your drag luggage! With only a few hours to go before the most important night of your career, you need to beg, borrow (and maybe steal) all the supplies you need!</p>
  `
  buttonA.innerHTML = `Sounds fun!`
  buttonA.addEventListener('click', rivalIntro);
}

function rivalIntro(event) {
  textAreaB.innerHTML = `
  <p>But watch out: your rival, Fish Lips, is also in town and she's out to snatch your gig! Try to put together the best look possible so that you can own the stage like the diva you are!</p>
  `
  buttonB.addEventListener('click', nextScenario);
}

/** This function must:
 * - advance to the next scenario
 * - display text in textA by looping through ScenarioA content
 * - show the button to advance the scenario (button to call function getItem)
 */
 function nextScenario(event) {
  for (let i = 0; i < scenarios.length; i++) {

  }
  
  

}