'use strict';

// variables needed to build this

// getting user input
const user_input = document.getElementById("search");

// adding keyup eventlistner to user_input
user_input.addEventListener("keyup", search);

// declaring a search function 
function search() {

    const userInputValue = user_input.value;
    const menu_list = document.getElementsByTagName("li");

    for (let i = 0; i < menu_list.length; i++) {

        if (menu_list[i].innerHTML.toLowerCase().includes(userInputValue)) {
            menu_list[i].style.display = "";
            
        } else {
            menu_list[i].style.display = "none";
        }
    }
};