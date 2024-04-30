// Javascript LOGIC for all the blog entries that are stored in local storage.

// Gather all necessary query selectors for the blog container, back button.
const blogContainer = document.querySelector('#blog-container');
const backButton = document.querySelector('#back-button');
const blogParse = JSON.parse(localStorage.getItem('blogEntry'));

// On page load, prevent default behaviour then load all existing blog entries, assign them to a variable and flatten them to a string.
window.addEventListener('load', function (event) {
    event.preventDefault();
    let userObjects = JSON.parse(localStorage.getItem('userinfo'));
    // Loop through all existing blog entries stored in local storage and push them to the array.
    for(let i = 0; i < userObjects.length; i++) {
      const userObject = userObjects[i];
      //Then, we assign each existing blog item to its own variable to then be appended to its own HTML element.
      const ul = document.createElement('ul');
      /*
         
          -------------------------------
         
         
      */
      const li = document.createElement('li');
      li.textContent = 'Posted by: ' + userObject.Username;
      li.setAttribute('data-index', i);
      const hr = document.createElement('hr');
      const li2 = document.createElement('li');
      li2.textContent = userObject.Content;
      li2.setAttribute('data-index', i);
      const li3 = document.createElement('li');
      li3.textContent = userObject.Title;
      li3.setAttribute('data-index', i);
      // We then append each newly created blog item to an unordered list, which is then appended to the blogContainer div element.
      // This is how we update new blog entries to the blog entry page.
      blogContainer.appendChild(ul);
      ul.appendChild(li3);
      ul.appendChild(li2);
      ul.appendChild(li);
      ul.appendChild(hr);
  }



/// This will set all new entries to local storage
localStorage.setItem('blogEntry', JSON.stringify(blogParse));
 
});

// Hitting the back button will take the user to the index.html (blog form entry) page.
backButton.addEventListener('click', function() {
  window.location.href="./index.html";
});

