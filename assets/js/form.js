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







