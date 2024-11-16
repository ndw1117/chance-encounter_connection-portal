// This file is where the user data will be sent. The data will then be stored and manipulated.
// When our visual output requests the data from the server, it will use whatever is stored in this file.
// Author: Nick Will

// An object to represent the input data
let dataObject = {
    lonelyInput: "",
    creature: 0,
    positiveInput: "",
    powerUp: 0
};

// The array to be sent by the server when requested
// This array is pre-loaded with input from the Wolfjam devs and friends so that the experience will always have base data :)
const dataArray = [
    {
        lonelyInput: "I'm not a traditional technologist. Sometimes I feel like everybody else fits certain roles in the industry, while I've struggled in discovering my professional identity. I feel like I always have to advocate for myself and what I can contribute to the world.",
        creature: 2,
        positiveInput: "You're always less alone than you think. Being different is a beautiful thing that the tech industry will reward you for if you keep expressing your creativity with passion. Hang in there, I feel ya.",
        powerUp: 3
    },
    {
        lonelyInput: "Sometimes I feel like I'm always the one reaching out, but when I need someone, no one is around. It makes me question if I'm valued.",
        creature: 1,
        positiveInput: "You're worth reaching out for, too. Many people get caught up, but that doesn't lessen your value. Keep connecting, and people who appreciate you will show up.",
        powerUp: 2
    },
    {
        lonelyInput: "Even in a room full of people, I feel like I don't belong. I'm present, but not truly part of anything, just floating in the background.",
        creature: 3,
        positiveInput: "I know that feeling well. Being present is a great start. Sometimes it just takes a bit of bravery to step out from the edges. You matter in that room.",
        powerUp: 2
    },
    {
        lonelyInput: "It feels like everyone else is moving forward with life, but I'm stuck in place, watching from the sidelines and unsure how to catch up.",
        creature: 2,
        positiveInput: "It's okay to go at your own pace. Life isn't a race. Some of the best paths take longer to build. You're not alone, and there's still time to find your way.",
        powerUp: 1
    },
    {
        lonelyInput: "Sometimes, I feel like my friends don't really see me. Like they only notice me when I'm helping them out, but otherwise I'm invisible.",
        creature: 1,
        positiveInput: "I've been there. Your kindness and support are valuable, but so are your own needs. True friends will see you for all you are. Don't lose hope.",
        powerUp: 3
    },
    {
        lonelyInput: "I have interests that don't match with those of my friends or family. I end up feeling like an outsider, no matter where I am.",
        creature: 3,
        positiveInput: "Being unique is powerful, even if it feels isolating at times. There are others out there who share your interests, and they'll value you just as you are.",
        powerUp: 1
    },
    {
        lonelyInput: "It seems like I'm the only one who struggles with these feelings. Everyone else looks happy and connected, but I feel so alone.",
        creature: 2,
        positiveInput: "You're not alone. Many people struggle silently. Sharing this feeling is a courageous first step, and connection is closer than you think.",
        powerUp: 2
    },
    {
        lonelyInput: "I've got friends and family, but still, I often feel this emptiness that I can't shake off. It makes me wonder what's wrong with me.",
        creature: 1,
        positiveInput: "There's nothing wrong with you. Loneliness is complex, and it's okay to feel this way. Just remember, you're supported even when it doesn't feel like it.",
        powerUp: 3
    },
    {
        lonelyInput: "I find it hard to open up about my struggles because I don't want to be a burden, but holding it in just makes me feel even lonelier.",
        creature: 2,
        positiveInput: "You're not a burden. Sharing can help lighten the load, and you might be surprised by how much others care. You deserve support, too.",
        powerUp: 1
    },
    {
        lonelyInput: "No one checks in on me unless I reach out first. Sometimes it makes me feel like my presence doesn't mean much to anyone.",
        creature: 3,
        positiveInput: "You are meaningful, even if others don't always show it. Reach out when you can, but remember, you're worthy of care and attention.",
        powerUp: 2
    },
    {
        lonelyInput: "When people see me as the 'strong' one, they assume I don't need support. But it's hard not having anyone to lean on myself.",
        creature: 1,
        positiveInput: "Being strong doesn't mean you don't deserve support. Remember, strength also means knowing when to let others in. You're not alone in this.",
        powerUp: 3
    }
];


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

module.exports = { loadData, getData };