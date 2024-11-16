// This script is used for the main web application page, index.html
// Author: Nick Will


// Character limit for text areas
const CHAR_LIMIT = 300;

// The indicator for which creature is currently selected
let selectedCreature = 0;   // 0 is none

// The indicator for which power-up is currently selected
let selectedPowerUp = 0;   // 0 is none

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
    const imagesSet2 = document.getElementById('imagesSet2').querySelectorAll('.option img');

    // Store reference to the submit button
    const submitButton = document.getElementById('submit');

    // Set event handlers for each creature image option
    for (let i =0; i < imagesSet1.length; i++) {
        imagesSet1[i].onclick = () => {

            // Reset any existing selection
            for(let img of imagesSet1) {
                img.style.boxShadow = 'none';
            }

            // Apply a shadow to the image so the user knows they have selected it
            imagesSet1[i].style.boxShadow = '0px 0px 20px 4px white';

            // Store this as the currently selected option
            console.log(`You selected creature ${i+1}`);
            selectedCreature = i + 1;
        }
    }

    // Set event handlers for each power-up image option
    for (let i =0; i < imagesSet2.length; i++) {
        imagesSet2[i].onclick = () => {

            // Reset any existing selection
            for(let img of imagesSet2) {
                img.style.boxShadow = 'none';
            }

            // Apply a shadow to the image so the user knows they have selected it
            imagesSet2[i].style.boxShadow = '0px 0px 20px 4px white';

            // Store this as the currently selected option
            console.log(`You selected power-up ${i+1}`);
            selectedPowerUp = i + 1;
        }
    }


    // Set event handler for submission
    submitButton.onclick = async () => {

        // Build the data object and send it to the backend using the /submit endpoint

        let dataObject = {
            lonelyInput: lonelyInput.value,
            creature: selectedCreature,
            positiveInput: positiveInput.value,
            powerUp: selectedPowerUp
        }

        try {
            const response = await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'  
                },
                body: JSON.stringify(dataObject)
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log('Data submitted successfully:', jsonResponse);
            } else {
                console.error('Error submitting data:', response.statusText);
            }
        }
        catch (error) {
            console.error('Error making POST request:', error);
        }
    };

};

window.onload = init;