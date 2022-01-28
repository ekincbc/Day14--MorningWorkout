// retrieve the padlock element
const padlock = document.querySelector('.padlock');

// retrieve the text element
const text = document.querySelector('.text');

console.log(text);

let lock_clicked = false;

const toggleTextVisibility = (on) => {
    if (on) {
        text.className = 'text--visible';
    } else {
        text.className = 'text';
    }
}

// when the user moves the mouse over the padlock
padlock.addEventListener('mouseenter', () => {
    // display the text
    toggleTextVisibility(true);
})

// when the user moves the mouse out of the padlock
padlock.addEventListener('mouseleave', () => {
    if (lock_clicked) {
        return; // don't do the rest of this function's code
    }

    // hide the text
    toggleTextVisibility(false);
})

padlock.addEventListener('click', () => {

    if (lock_clicked) {
        lock_clicked = false;
        padlock.className = 'padlock';
    } else {
        lock_clicked = true;
        padlock.className = 'padlock padlock--clicked';
    }
})
// const padlock = document.querySelector(".padlock");

// const text = document.querySelector(".text");

// padlock.addEventListener("mouseeneter", function( event ) {
//     // const showText = document.querySelector(".text");
    

// });

// // test.addEventListener("mouseover", function( event ) {
// //   // highlight the mouseover target

// // });

// // e.onmouseover = function() {
// //   document.getElementById('text').style.display = 'block';
// // }

// // e.onmouseout = function() {
// //   document.getElementById('text').style.display = 'none';
// // }  




//     function displayQuote() {
//         document.querySelector(".padlock").textContent = ".text";
//     }
