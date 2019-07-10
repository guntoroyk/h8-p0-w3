function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort();
    var newAnimals = [[animals[0]]];
    var index = 0;
    for (let i = 1; i < animals.length; i++) {
        
        if (animals[i][0] === newAnimals[index][0][0]) {
            newAnimals[index].push(animals[i])
        } 
        else {
            newAnimals.push([animals[i]]);
            index++;
        }
        
    }
    return newAnimals;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));