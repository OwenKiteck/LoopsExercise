
for (i = 1; i <= 7; i++) {
    console.log(i);
}
console.log(`================`);

for (x = 5; x <= 25; x += 4) {
    console.log(x);
}
console.log(`================`);


const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ran Weasley`
];
for (item of wizards) {
    console.log(item);
}
console.log(`================`);

let harryPotterMovies = 0;
while (harryPotterMovies < 8) {
    harryPotterMovies++;
};
// OR
/*
while (true) {
    if (harryPotterMovies < 8) {
        harryPotterMovies++;
    } else {
        break;
    };
};
*/
console.log(harryPotterMovies);



// BONUS
console.log(`========B=======`);

const hogwartsHouses = [
    `Gryffindor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`
];
for (item of hogwartsHouses) {
    for (letter of item) {
        console.log(letter);
    }
};
console.log(`========B=======`);


// NOT SURE ABOUT THIS ONE (6)
const quote = [
    `Yer`,
    `A`,
    `Wizard`,
    `Harry`
];

let magicQuote = ``;
for (z = 0; z < quote.length; z++) {
    magicQuote = `${magicQuote} ${quote[z]}`
    console.log(magicQuote);
};
console.log(magicQuote);

console.log(`========B=======`);


for (y = 1; y <= 25; y++) {
    
    if (y % 3 == 0 && y % 5 == 0) {
        console.log(`Expecto Patronum`);
    } else {
        if ((y % 3) == 0) {
            console.log(`Expecto`);
        } else {
            if ((y % 5) == 0) {
                console.log(`Patronum`);
            } else {
                console.log(y);
            };
        };
    };
};