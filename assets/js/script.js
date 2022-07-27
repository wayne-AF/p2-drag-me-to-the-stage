
let image = document.getElementById("image");
let text = document.getElementById("text");

/**
* Converts the entered text into title case
* and assigns it to a variable
*/
let form = document.getElementById('loginform');
form.addEventListener('submit', handleSubmit);

let userDragName;

function handleSubmit(event) {
  event.preventDefault();
  //
  let enteredName = document.getElementById('entered-name').value;
  let lowerCaseName = enteredName.toLowerCase();
  let nameArray = lowerCaseName.split(' ');
    for (let i = 0; i < nameArray.length; i++) {
      nameArray[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
    }
  userDragName = nameArray.join(' '); 
  console.log(userDragName);
}
