// This file is where the user data will be sent. The data will then be stored and manipulated.
// When our visual output requests the data from the server, it will use whatever is stored in this file.
// Author: Nick Will

// An object to represent the input data
let dataObject = {
    lonelyInput: "Hello!",
    creature: 11,
    positiveInput: "",
    powerUp: 0
};

// The array to be sent by the server when requested
const dataArray = [];

// Recieves the data from a client or form.
const loadData = (data) => {
    console.log('Receiving data...')
    dataObject = data;
    console.log(dataObject);

    // Add this object to the array
    dataArray.push(dataObject);

}

// Returns the data array
const getData = () => {
    return dataArray;
}

module.exports = { loadData, getData};