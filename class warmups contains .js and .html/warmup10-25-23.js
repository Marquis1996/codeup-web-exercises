// Create a function that randomly pairs students into groups of 2.
// There can be groups of 3 if necessary.



const students = [
    "Amanda",
    "Bianca",
    "Cameron",
    "Chris",
    "Dany",
    "David",
    "Diana",
    "Drew",
    "Evan",
    "Hassan",
    "Jack",
    "Jason",
    "John",
    "Jonathan",
    "Jordan",
    "Joshua",
    "Katie",
    "Luis",
];
const createP = (arr) => {
    for (let i = 0; i < students.length; i++) {
        // let randname = Math.random(i);
        return randname
    }
}
    const createPairs = (arr) => {
        for (let i = 0; i < students.length; i++) {
            let rand = Math.random(arr[i]);
            let rand2 = rand.toString();
                return rand2[arr]
        }
    }
    let pickme = createPairs(students)
    console.log(pickme)




// console.log(createPairs(students));}
// Expected output (pairs will be different each time):
/*
[
    [ 'Amanda', 'Bianca' ],
    [ 'Cameron', 'Chris' ],
    [ 'Dany', 'David' ],
    [ 'Diana', 'Drew' ],
    [ 'Evan', 'Hassan' ],
    [ 'Jack', 'Jason' ],
    [ 'John', 'Jonathan' ],
    [ 'Jordan', 'Joshua' ],
    [ 'Katie', 'Luis' ]
]*/



function randomPairingWithForLoop(students) {
    const shuffledStudents = shuffleArray(students);
    const groups = [];

    for (let i = 0; i < shuffledStudents.length; i += 2) {
        let groupSize = 2;

        // If there are not enough students left for a group of 2, adjust the group size
        if (i + 2 > shuffledStudents.length) {
            groupSize = shuffledStudents.length - i;
        }

        const group = shuffledStudents.slice(i, i + groupSize);
        groups.push(group);
    }

    return groups;
}

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Example usage:
// const students = [
//     "Amanda",
//     "Bianca",
//     "Cameron",
//     "Chris",
//     "Dany",
//     "David",
//     "Diana",
//     "Drew",
//     "Evan",
//     "Hassan",
//     "Jack",
//     "Jason",
//     "John",
//     "Jonathan",
//     "Jordan",
//     "Joshua",
//     "Katie",
//     "Luis",
// ];
const pairedGroups = randomPairingWithForLoop(students);

console.log(pairedGroups);