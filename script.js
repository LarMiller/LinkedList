

var list = document.querySelector('.bookmarkBox ul');
var addForm = document.forms['titleAndUrl'];
var titleOne = document.querySelector('#titleOne');
var pOne = document.querySelector('#pOne');
var deleteButton = document.querySelectorAll('.deleteButton');
var pCount = document.querySelector('#count');
var pCountRead = document.querySelector('#countRead');
var countUnread = document.querySelector('#countUnread');


// Getting the value of title and Url input
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  var titleValue = addForm.querySelector('input[type= "text"]').value; 
  var urlValue = addForm.querySelector('input[type= "url"]').value; 
  addForm.reset();


  // creating new elements assigning to new variables
  var li= document.createElement('li');
  var websiteTitle= document.createElement('h2');
  var websiteUrl= document.createElement('a');
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
  websiteUrl.href = urlValue;
  websiteUrl.target = "_blank";
  readButton.textContent = "Read";
  delButton.textContent = "Delete";
  bookmarkCount();
  readCount();
  unreadCount();


  // Read class
  readButton.addEventListener('click', function(){
  // readButton.className = 'readButtonActive';
  this.classList.toggle('readButtonActive');
  this.classList.toggle('readButton');
  // li.className = 'readClass bookmark';
  readCount();
  unreadCount();

  // Clear all read classes
  var clearRead = document.querySelector('.read');
  var readClass = document.querySelectorAll('.readButtonActive');
  clearRead.addEventListener('click', function(){
  li.parentNode.removeChild(li);
  bookmarkCount();
  readCount();
  unreadCount();
}) 
})   


// Delete button
  delButton.addEventListener('click',function(e){
    var li = e.target.parentElement;
    li.parentNode.removeChild(li);
    bookmarkCount();
    readCount();
    unreadCount();
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
var readClass = document.querySelectorAll('.readButtonActive');
var readCounts = readClass.length;
pCountRead.innerHTML= readCounts; 
}

// unread count 
function unreadCount(){
var bookmarks = document.querySelectorAll('.bookmark');
var bookmarksCount = bookmarks.length;
var readClass = document.querySelectorAll('.readButtonActive');
var readCounts = readClass.length;
var totalCount = parseInt(bookmarksCount - readCounts);
countUnread.innerHTML= totalCount; 
}


