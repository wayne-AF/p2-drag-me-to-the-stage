let image = document.getElementById('image');
let textAreaA = document.getElementById('text-area-a');
let textAreaB = document.getElementById('text-area-b');
let userDragName;


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

/** The items the player receives in each scenario
 * get pushed into this */
 let dragArray = [];

/** This array contains the entire range of possible items
 * the player can receive, three possible items per scenario */
let entireOutfitArray = [['bad wig', 'ok wig', 'great wig'],['bad shoes', 'ok shoes', 'great shoes'],['bad padding', 'ok padding', 'great padding'],['bad outfit', 'ok outfit', 'great outfit'],['bad make up', 'ok make up', 'great make up']];