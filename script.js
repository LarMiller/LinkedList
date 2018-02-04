var titleOne = document.querySelector('#titleOne');
var pOne = document.querySelector('#pOne');
var deleteButton = document.querySelectorAll('.deleteButton');
var pCount = document.querySelector('#count')
var list = document.querySelector('.bookmarkBox ul');


// Delete bookmarks
Array.from(deleteButton).forEach(function(deleteButton){
  deleteButton.addEventListener('click',function(e){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li)
    var bookmarks = document.querySelectorAll('.bookmark');
    var bookmarksCount = bookmarks.length;
    pCount.innerHTML= "Total Bookmarks = " + bookmarksCount; 
  })
})


//Count bookmarks

function countBookmarks(){
  var bookmarks = document.querySelectorAll('.bookmark');
  var bookmarksCount = bookmarks.length;
  
}

// Get Name and URL 
const addForm = document.forms['titleAndUrl'];

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const titleValue = addForm.querySelector('input[type = "text"]').value;
  const urlValue = addForm.querySelector('input[type = "url"]').value;
  var bookmarks = document.querySelectorAll('.bookmark');
  var bookmarksCount = bookmarks.length;
  pCount.innerHTML= "Total Bookmarks = " + bookmarksCount; 

// Create elements

const li = document.createElement('li');
const websiteTitle = document.createElement('h2');
const websiteUrl = document.createElement('p');
const readButton = document.createElement('button');
const delButton = document.createElement('button');

//  add content

websiteTitle.textContent = titleValue;
websiteUrl.textContent = urlValue;
readButton.textContent = "Read";
delButton.textContent = "Delete";

// Append to document
li.appendChild(websiteTitle)
li.appendChild(websiteUrl)
li.appendChild(readButton)
li.appendChild(delButton)
list.appendChild(li);

})

// // add title and bookmark to the box

// enterButton.addEventListener('click', valueChange);
// websiteTitle.addEventListener('onblur', disableEnter);
// websiteUrl.addEventListener('onblur', disableEnter);

// function valueChange(){
//   pOne.innerHTML = websiteUrl.value;
//   titleOne.innerHTML =  websiteTitle.value;
// }




// function bookmarkOne(){
//   var bookmarkOne = document.getElementById('bookmarkOne');
//   var bookmarkTwo = bookmarkOne.cloneNode(true);
//   var bookmarkBox = document.querySelector(".bookmarkBox");
//   bookmarkBox.appendChild(bookmarkTwo); 
//   bookmarkTwo.id = "";
// }