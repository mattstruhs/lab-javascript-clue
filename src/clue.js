// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
        },
    
    {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
        },

];




// Rooms Collection
const roomsArray = [
    {name: "Dining Room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard Room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Hall"},
    {name: "Spa"},
    {name: "Living Room"},
    {name: "Observatory"},
    {name: "Theater"},
    {name: "Guest House"},
    {name: "Patio"},
];

// Weapons Collection
const weaponsArray = [
    {name: "rope",  weight: 10},
    {name: "knife",  weight: 8},
    {name: "candlestick",  weight: 2},
    {name: "dumbbell",  weight: 30},
    {name: "poison",  weight: 2},
    {name: "axe",  weight: 15},
    {name: "bat",  weight: 13},
    {name: "trophy",  weight: 25},
    {name: "pistol",  weight: 20},
];

// ITERATION 2
function selectRandom(arr){
    const randomNumber = Math.floor(
        Math.random() * arr.length
    );
    return arr[randomNumber];
};

function pickMystery(){
    let suspect = selectRandom(suspectsArray);
    let weapon = selectRandom(weaponsArray);
    let room = selectRandom(roomsArray);
    return {suspect: suspect,weapon: weapon,room: room};
}

// ITERATION 3
function revealMystery(envelope){
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon} in the ${envelope.room}!`
}