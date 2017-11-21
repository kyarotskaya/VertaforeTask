var toDoNav = document.getElementsByClassName('header__left-nav')[0],
 popUp = document.getElementsByClassName('pop-up')[0],
 itemContent = document.getElementsByClassName('todo-item__outer');

toDoNav.addEventListener('click', showPopUp);
for(var i = 0; i < itemContent.length; i++){
    itemContent[i].addEventListener('click', showTaskDetails, true);
}

function showPopUp(e){
    if (e.target.innerHTML == 'Todo list'){
        popUp.classList.toggle('pop-up_disabled');
    }
}

function showTaskDetails(e){
    this.nextElementSibling.classList.toggle('pop-up_disabled');
    this.nextElementSibling.classList.toggle('todo-item_enabled');
}