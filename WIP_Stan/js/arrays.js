
let hobbiesArray = ['Writing', 'Music', 'Exercice'];

function printHobbies(pArray) {
    console.log(`I like ${pArray.length} things`);
    for (let i = 0; i < pArray.length; i++) {
        let element = pArray[i];
        console.log('I like ' + element);
    }  
}

printHobbies(hobbiesArray);