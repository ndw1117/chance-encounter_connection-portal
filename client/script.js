// This script is used for the main web application page, index.html
// Author: Nick Will


// Character limit for text areas
const CHAR_LIMIT = 300;


// The initializer function to be called upon page load
const init = () => {


    // Store references to the text areas for user input
    const lonelyInput = document.getElementById('lonelyInput');
    const positiveInput = document.getElementById('positiveInput');

    // Set character limit for each text area
    lonelyInput.maxlength = 300;
    positiveInput.maxlength = 300;

    // Store references to each image option
    const imagesSet1 = document.getElementById('imagesSet1').querySelectorAll('.option img');

    // Set event handlers for each image option
    for (let image of imagesSet1) {
        image.onclick = () => {

            // Reset any existing selection
            for(let img of imagesSet1) {
                img.style.boxShadow = 'none';
            }

            // Apply a shadow to the image so the user knows they have selected it
            image.style.boxShadow = '0px 0px 20px 4px white';
        }
    }

};

window.onload = init;