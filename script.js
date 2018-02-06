

var list = document.querySelector('.bookmarkBox ul');
var addForm = document.forms['titleAndUrl'];
var titleOne = document.querySelector('#titleOne');
var pOne = document.querySelector('#pOne');
var deleteButton = document.querySelectorAll('.deleteButton');
var pCount = document.querySelector('#count');
var list = document.querySelector('.bookmarkBox ul');
var pCountRead = document.querySelector('#countRead');


// Getting the value of title and Url input
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  var titleValue = addForm.querySelector('input[type= "text"]').value; 
  var urlValue = addForm.querySelector('input[type= "url"]').value; 
  addForm.reset();


  // creating new elements assigning to new variables
  var li= document.createElement('li');
  var websiteTitle= document.createElement('h2');
  var websiteUrl= document.createElement('p');
  var readButton= document.createElement('button');
  var delButton= document.createElement('button');


  // adding classes
  li.classList.add('bookmark');
  websiteTitle.classList.add('title');
  websiteUrl.classList.add('linkTo');
  readButton.classList.add('readButton');
  delButton.classList.add('deleteButton');

  //new elements from above are placed into a new list
  li.appendChild(websiteTitle);
  li.appendChild(websiteUrl);
  li.appendChild(readButton);
  li.appendChild(delButton);
  list.appendChild(li);   //list generation

  // Adding content to new bookmark box
  websiteTitle.textContent = titleValue;
  websiteUrl.textContent = urlValue;
  readButton.textContent = "Read";
  delButton.textContent = "Delete";
  bookmarkCount();
  readCount();

  // Read class
  readButton.addEventListener('click', function(){
  readButton.className = 'readButtonActive';
  li.className = 'readClass bookmark';
  var clearRead = document.querySelector('.read');
  readCount();
  // Clear all read classes
  clearRead.addEventListener('click', function(){
  li.parentNode.removeChild(li);
  bookmarkCount();
  readCount();
  }) 
})   


// Delete button
  delButton.addEventListener('click',function(e){
    var li = e.target.parentElement;
    li.parentNode.removeChild(li);
    bookmarkCount();
    readCount();
})
  })

// bookmark count 
function bookmarkCount(){
var bookmarks = document.querySelectorAll('.bookmark');
var bookmarksCount = bookmarks.length;
pCount.innerHTML= bookmarksCount; 
}

var bookmarks = document.querySelectorAll('.bookmark');

// read count 
function readCount(){
var readClass = document.querySelectorAll('.readClass');
var readCount = readClass.length;
pCountRead.innerHTML= readCount; 
}

// // unread count 
// function bookmarkCount(){
// var bookmarks = document.querySelectorAll('.bookmark');
// var bookmarksCount = bookmarks.length;
// pCount.innerHTML= bookmarksCount; 
// }


