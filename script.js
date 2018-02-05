

var list = document.querySelector('.bookmarkBox ul')
const addForm = document.forms['titleAndUrl'];


addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const titleValue = addForm.querySelector('input[type= "text"]').value; 
  const urlValue = addForm.querySelector('input[type= "url"]').value; 
   


// creating new elements assigning to new variables
const li= document.createElement('li');
const websiteTitle= document.createElement('h2');
const websiteUrl= document.createElement('p');
const readButton= document.createElement('button');
const delButton= document.createElement('button');


//new elements from above are placed into a new list
li.appendChild(websiteTitle)
li.appendChild(websiteUrl)
li.appendChild(readButton)
li.appendChild(delButton)
list.appendChild(li)   //list generation

// adding classes
 li.classList.add('bookmark');
 websiteTitle.classList.add('title');
 websiteUrl.classList.add('linkTo');
 readButton.classList.add('readButton');
 delButton.classList.add('deleteButton');

websiteTitle.textContent = titleValue
websiteUrl.textContent = urlValue
readButton.textContent = "Read"
delButton.textContent = "Delete"

});