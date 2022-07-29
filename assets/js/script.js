let image = document.getElementById('image');
let textAreaA = document.getElementById('text-area-a');
let textAreaB = document.getElementById('text-area-b');
let userDragName;
let playerScore = 0;


/** Attach event listener to submit button */
document.getElementById('button-a').addEventListener('click', handleSubmit);
document.getElementById('button-a').addEventListener('click', function() {
  textAreaA.innerHTML = `You are ${userDragName}, a queen who blah blah blah!`;
});

/** Convert text entered into title case */
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

/** The items the player receives in each scenario get pushed into this array */
 let dragArray = [];

/** This array contains the entire range of possible items the player can receive, three possible items per scenario */
let entireOutfitArray = [['bad wig', 'ok wig', 'great wig'],['bad shoes', 'ok shoes', 'great shoes'],['bad padding', 'ok padding', 'great padding'],['bad outfit', 'ok outfit', 'great outfit'],['bad make up', 'ok make up', 'great make up']];

/** This iterates through the entireOutfitArray, one string per button click, randomly chooses an item,
 * pushes that item into the dragArray, and displays a message to the player saying what they have received */
var i = 0;
document.getElementById('button-b').addEventListener('click', () => {
    let item = entireOutfitArray[i][Math.floor(Math.random()*entireOutfitArray[i].length)]; 
    
    dragArray.push(item);
    if (item.includes('great')) {
      textAreaB.innerHTML = `Well done, sis! You got the ${item}!`;
      playerScore += 3;
    } else if (item.includes('ok')) {
      textAreaB.innerHTML = `Not too shabby, mama! You got the ${item}.`;
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
});

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
    After all that, you get to host the show and let your star shine bright!
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