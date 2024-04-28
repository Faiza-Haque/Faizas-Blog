// Selecting the necessary HTML elements for interaction
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
let array = [];

  
  function renderLastRegistered() {
    const email = localStorage.getItem('username');
    const title = localStorage.getItem('title');
    if (!usernameInput || !titleInput) {
      return;
    }
    usernameInput.textContent = usernameInput;
    titleInput.textContent = titleInput;
  }
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const usernameInput = usernameInput.value;
    const titleInput = titleInputInput.value;
    if (email === '') {
      displayMessage('error', 'Username cannot be blank');
    } else if (password === '') {
      displayMessage('error', 'Password cannot be blank');
    } else {
      displayMessage('success', 'Registered successfully');
      localStorage.setItem('usernameInput', usernameInput);
      localStorage.setItem('titleInput', titleInput);
      renderLastRegistered();
    }
  });




let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

//check if dark mode is enabled
//if it's enabled, turn it off
// if it's disabled, turn it on



const enableDarkMode = () => {

    //1.add the class dark mode to the body
    document.body.classList.add('darkMode');
    darkMode = "enabled"
    //2. update darkMode in the localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {

    //1.add the class dark mode to the body
    document.body.classList.remove('darkMode');
    darkMode = "null"
    //2. update darkMode in the localStorage
    localStorage.setItem('darkMode', null);
}

if (darkMode === "enabled") {
    enableDarkMode();
}



darkModeToggle.addEventListener('click', () => {
    console.log(darkMode)
    if (darkMode !== "enabled") {
        enableDarkMode();
        console.log(darkMode);
    } else {

        disableDarkMode();
        console.log(darkMode);


    }

})