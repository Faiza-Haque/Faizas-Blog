// Selecting the necessary HTML elements for interaction
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

const createForm = document.querySelector("#create-blog-form")




createForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let userObjects = JSON.parse(localStorage.getItem("userinfo")) || [];
    
    let userObject =
    {
        Title: titleInput.value,
        Content: contentInput.value,
        Username: usernameInput.value,
    }
    console.log(userObject)

    userObjects.push(userObject)

    localStorage.setItem("userinfo", JSON.stringify(userObjects));
  
    window.location.href="blog.html"
})

