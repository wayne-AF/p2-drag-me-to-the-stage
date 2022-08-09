const scenarioContainerA = document.getElementById('scenario-container-a');
const scenarioContainerB = document.getElementById('scenario-container-b');
const playerImageArea = document.getElementById('player-image');
const villainImageArea = document.getElementById('villain-image');
const imagesLocation = 'assets/images/';

// This array contains the entire range of possible items the player can receive, 
// three possible items per scenario. The first three items determine the final 
// image the player will see.
const entireOutfitArray = [
  ['great wig', 'ok wig', 'bad wig'],
  ['great shoes', 'ok shoes', 'bad shoes'],
  ['great outfit', 'ok outfit', 'bad outfit'],
  ['great padding', 'ok padding', 'bad padding'],
  ['great make up', 'ok make up', 'bad make up']
];

// Contains content for scenarios.
const allScenarios = [
  {title:'I need a wig', 
   text:'Your drag mom calls in a favour from her drag sis, who says you can borrow ' + 
   'whatever you need from her apartment while she\'s out of town. Unfortunately, one ' + 
   'of her drag daughters is plucked over some comments you made on her Instagram and ' +  
   'has cleaned out the place! Some queens just can\'t take constructive criticism... ' + 
   'Desperately, you search the almost empty room...', 
   button:'Look under the bed'},
  {title:'Dumpster Diva', 
   text:'Wig in hand, you pass by a charity store with a donations bin outside. ' + 
   'Checking to make sure no one\'s around to record you, you dive right in. You ' + 
   'must be blessed and highly favoured becase you find an entire bag full of shoes! ' + 
   'But will there be any in your size?', 
   button:'Search the bag'},
  {title:'I need an outfit!', 
   text:'You put out an SOS on social media for anyone willing to lend you an outfit. ' + 
   'You don\'t have the best reputation for returning girls\' things back in good ' + 
   'condition but surely SOMEONE will lend you SOMETHING that isn\'t pure gutter! A fan ' + 
   'reaches out and says you can have something from the sale rack in the store ' + 
   'where he works. The entire section is hideous so when he\'s not looking, you ' + 
   'snatch an armful of clothes from another rack and flee the store. In the park ' + 
   'down the street, you stop to catch your breath...', 
   button:'Examine the stolen clothes'},
  {title:'These hips gotta lie', 
   text:'You\'re gonna need padding to fill out this outfit! You come across a ' + 
   'suspect-smelling abandoned couch down a side alley. Using an electric carving ' + 
   'knife you borrowed from the kitchen of a nearby restaurant, you follow a YouTube ' + 
   'tutorial on how to carve your own hips pads.', 
   button:'Slice and dice the couch cushions'},
  {title:'Beat that mug', 
   text:'There\'s not much time left before the show starts and you\'re getting ' + 
   'desperate. The only store selling make up you can find has Fish Lips\' boyfriend ' + 
   'as security and he won\'t let you in! Some teenage girls ask you to buy them ' + 
   'booze and you agree if they\'ll shoplift you some make up. You supply liquor ' + 
   'to the minors, get your shoplifted make up, and then you\'re in a cab on the ' + 
   'way to the club!', 
   button:'Examine the stolen make up'}
]

let userDragName;
let resultImage;

// The player's score, not visible to the player, used to determine the final outcome.
let playerScore = 0;

// The items the player receives in each scenario get pushed into this array.
let dragArray = [];

// Attach event listener to submit button.
document.getElementById('name-form').addEventListener('click', handleSubmit);
document.getElementById('name-form-submit').addEventListener('submit', handleSubmit);

// Add reload/replay function to the logo.
document.getElementById('logo').addEventListener('click', () => {
  location.reload()
});

/* Converts text entered into title case and displays the welcome text. */
function handleSubmit(event) {
  event.preventDefault();
  playerImageArea.innerHTML = ''

  let input = document.getElementById('name-input');
  let nameInput = '';
  if (!input.value.trim()) {
    const errorMessageElement = document.getElementById('error-message')
    errorMessageElement.classList.add('visible')
    errorMessageElement.innerText = 'Please choose a name!'
    return
  } else {
    nameInput = input.value
  }
  
  let lowerCaseName = nameInput.toLowerCase();
  let nameArray = lowerCaseName.split(' ');
    for (let i = 0; i < nameArray.length; i++) {
      nameArray[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
    }
  userDragName = nameArray.join(' '); 
  

  let playerImageBoy = document.createElement('img');
  playerImageBoy.src = 'assets/images/player-image-boy.png';
  playerImageBoy.classList.add('image');
  playerImageArea.appendChild(playerImageBoy);
  
  scenarioContainerA.innerHTML = `
  <h2>It's gonna be a long night</h2>
  <p>You are ${userDragName}, an up-and-coming drag queen with an unquenchable ` + 
  `thirst for attention and a healthy dose of delusion. You're in a new city to ` + 
  `host your first show which could help take your career to the next level but ` + 
  `the airline has lost all your drag luggage! With only a few hours to go before ` + 
  `the most important night of your career, you need to beg, borrow (and maybe ` + 
  `steal) all the supplies you need!</p>
  `

  let soundsFunButton = document.createElement('button')
  soundsFunButton.innerHTML = `Sounds fun!`
  scenarioContainerA.appendChild(soundsFunButton)
  soundsFunButton.addEventListener('click', rivalIntro);
  soundsFunButton.addEventListener('click', () => {
    soundsFunButton.style.display = 'none'
  })
}

/* Inserts the rival introduction text into scenarioContainerB. */
function rivalIntro(event) {
  scenarioContainerB.innerHTML = `
  <p>But watch out: your rival, Fish Lips, is also in town and she's out to ` + 
  `snatch your gig! Try to put together the best look possible so that you can ` + 
  `own the stage like the diva you are!</p>
  `
  
  let fishLipsBoy = document.createElement('img');
  fishLipsBoy.src = 'assets/images/fish-lips-boy.png';
  fishLipsBoy.classList.add('image');
  villainImageArea.appendChild(fishLipsBoy);

  let playButton = document.createElement('button')
  playButton.innerHTML = 'Let\'s play!'
  scenarioContainerB.appendChild(playButton)
  playButton.addEventListener('click', showScenario);
  playButton.addEventListener('click', () => {
    scenarioContainerB.innerHTML = '';
    playerImageArea.removeChild(playerImageArea.firstElementChild);
    villainImageArea.removeChild(villainImageArea.firstElementChild);
  })
}

/* This iterates through the entireOutfitArray, one string per button click, randomly chooses an item,
/ pushes that item into the dragArray, and displays a message to the player saying what they have received.
/ It also adds to the player's score, depending on which item they have received. */
let i = 0;   
function getItem(event) {  
  let item = entireOutfitArray[i][Math.floor(Math.random()*entireOutfitArray[i].length)]; 
    
    dragArray.push(item);
    if (item.includes('great')) {
      scenarioContainerB.innerHTML = `Well done, mama! You got the ${item}!`;
      playerScore += 3;
    } else if (item.includes('ok')) {
      scenarioContainerB.innerHTML = `Not too shabby, sis! You got the ${item}.`;
      playerScore += 2;
    } else {
      scenarioContainerB.innerHTML = `Yikes! Sorry girl, you got the ${item}...`;
      playerScore += 1;
    }
    i++
    if (dragArray.length >= 5) {
      scenarioContainerB.innerHTML = ''
    }
  let nextScenarioButton = document.createElement('button')
  nextScenarioButton.innerText = 'Next!'
  scenarioContainerB.appendChild(nextScenarioButton)
  nextScenarioButton.style.display = 'block'
  nextScenarioButton.addEventListener('click', () => {
    scenarioContainerB.innerHTML = ''
    nextScenarioIndex += 1
    showScenario(nextScenarioIndex)
  })
};

let nextScenarioIndex = 0;
function showScenario(event) {
  
  scenarioContainerA.innerHTML = ''

  if (nextScenarioIndex >= allScenarios.length) {
    scenarioContainerA.innerHTML = ''
    scenarioContainerA.innerHTML = `
    <h2>The stage awaits</h2>
    <p>You get changed in the cab (the driver was definitely watching so no tip ` + 
    `for him) and arrive at the club ready to meet your destiny!</p>
    `
    let finalOutfitButton = document.createElement('button')
    finalOutfitButton.innerText = 'Check yourself in the mirror backstage'
    scenarioContainerA.appendChild(finalOutfitButton)
    finalOutfitButton.addEventListener('click', showFinalOutfit)
    finalOutfitButton.addEventListener('click', () => {
      scenarioContainerA.innerHTML = `
      <h2>Time to werk!</h2>
      <p>Well, you've looked worse! And you can hear the club is pretty full. ` + 
      `Time to make them all know your name!</p>
      `
      finalOutfitButton.style.display = 'none'
      
      let startShowButton = document.createElement('button')
      startShowButton.innerText = 'Start the show'
      scenarioContainerA.appendChild(startShowButton)
      startShowButton.addEventListener('click', () => {
        scenarioContainerA.innerHTML = ''
        startShowButton.style.display = 'none'
        
        let fishLipsDrag = document.createElement('img');
        fishLipsDrag.src = 'assets/images/fish-lips-drag.png';
        fishLipsDrag.classList.add('image');
        villainImageArea.appendChild(fishLipsDrag);
        scenarioContainerB.innerHTML = `
        <p>What the--? It looks like Fish Lips is here! And that witch has ` + 
        `convinced the club manager to let her lip sync against you for the ` + 
        `hosting gig, with the crowd deciding who wins! Time to send her packing!</p>
        `
        let finalBattleButton = document.createElement('button')
        finalBattleButton.innerText = 'Lip sync for the gig!'
        scenarioContainerB.appendChild(finalBattleButton)
        finalBattleButton.addEventListener('click', finalResult)
      })
    })
  }

  /* Cycles through the allScenarios array and inserts the content into the relevant fields. */
  let scenario = allScenarios[i];

  let scenarioTitle = document.createElement('h2')
  scenarioTitle.innerText = scenario.title
  scenarioContainerA.appendChild(scenarioTitle)

  let scenarioText = document.createElement('p')
  scenarioText.innerText = scenario.text
  scenarioContainerA.appendChild(scenarioText)

  let getItemButton = document.createElement('button')
  getItemButton.innerText = scenario.button
  scenarioContainerA.appendChild(getItemButton)
  getItemButton.addEventListener('click', () => {

    getItem();

    getItemButton.style.display = 'none'
  })
}
  
/* Determines which outfit the player has achieved and displays the corresponding image
/ based on the first three items in the dragArray. */
function showFinalOutfit(event) {
  let imageName = getFinalImageName(dragArray[0].split(' ')[0], dragArray[1].split(' ')[0], dragArray[2].split(' ')[0])

  let fullImageSource = imagesLocation + imageName;

  resultImage = document.createElement('img')
  resultImage.src = fullImageSource
  resultImage.classList.add('image');

  playerImageArea.appendChild(resultImage)

}

function getFinalImageName(wigType, shoesType, outfitType) {
// The image combinations for the final outfit are named in the format 
// wigType-shoesType-outfitType.jpg
// e.g. great-great-great.jpg is the final image for a combination of 
// a great wig, great shoes, and great outfit.
  let imageName = `${wigType}-${shoesType}-${outfitType}.png`
  return imageName
}

/* This randomly calculates the rival character's final score, between a minimum of 5 and maximum of 15,
/ (the min and max scores the player can receive) and compares it to the player's final score.
/ If the player's score is equal or higher, the player wins and the corresponding message is shown. */
let rivalScore = 0;

function finalResult(event) {
  playerImageArea.removeChild(playerImageArea.firstElementChild);
  villainImageArea.removeChild(villainImageArea.firstElementChild);
  rivalScore = Math.floor(Math.random() * (15 - 5 + 1)) + 1;

  if (rivalScore <= playerScore) {
    scenarioContainerA.appendChild(resultImage)
    scenarioContainerB.innerHTML = `
    <h2>Congratulations, ${userDragName}!</h2>
    <p>You slayed the lip sync and the crowd has voted you the winner!
    After all that, you get to host the show! Time to let your star shine bright!
    </p>
    `
  } else {
    let fishLipsDrag = document.createElement('img')
    fishLipsDrag.src = 'assets/images/fish-lips-drag.png'
    scenarioContainerA.appendChild(fishLipsDrag)
    scenarioContainerB.innerHTML = `
    <h2>Sorry, ${userDragName}</h2>
    <p>The crowd has voted Fish Lips the winner and this means she gets your hosting gig.
    Better luck next time!
    </p>
    `
  }
  
  let playAgainButton = document.createElement('button')
  playAgainButton.innerText = 'Play again'
  scenarioContainerB.appendChild(playAgainButton)
  playAgainButton.addEventListener('click', () => {
    location.reload()
  })
}

