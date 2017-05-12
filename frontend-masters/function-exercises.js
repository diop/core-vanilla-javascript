// Animal username

function AnimalTestUser(username) {
    var argLength = arguments.length;
    var otherArgs = [];
    if (argLength > 1){
        for (var i = 1; i < argLength; i++) {
            otherArgs.push(arguments[i]);
        }
    }

    return {
        username: username,
        otherArgs: otherArgs
    }
}

var AnimalTest = function(username){
    return {
        username: username;
    };
}
var testSheep = AnimalTestUser("Trump the sheep", {"loves lying": true}, [1,2,3]);
condole.log(testSheep);

function AnimalCreator(username, species, tagline, noises){
    var animal = {
        "username": username,
        "species": species,
        "tagline": tagline,
        "noises": noises,
        "friends": []
    }
    return animal;
}

var cow = AnimalCreator("Brie", "cow", "Milk does the body good", ["Moo"]);
console.log(cow);
// Questions 4 & 5
function addFriend(animal, friend) {
    animal.friends.push(friend.username);
}

var lion = AnimalCreator("Zion", "lion", "Kinng of the junlge", ["Little Shaq"]);

console.log(lion);
var llama = AnimalCreator("Marley", "llama", "llll", ["llamaOne", "llammatwo"]);
console.log(llama);
addFriend(cow, lion);
console.log(cow);
addFriend(cow, lion);
console.log(cow);

// Question 6
var myFarm = [lion, cow, llama];
addFrriend(cow, lion);
addFriend(llama, lion);
console.log(myFarm);

// Question 7
function addMatchesArray(farm){
    for (var animal in farm){
        farm[animal].matches = [];
    }
}
addMatchesArray(myFarm);
console.log(myfarm[0]);

// Question 8
function giveMatches(farm){
    for (var animal in farm){
        farm[animal].matches.push(farm[animal].friends[0]);
    }
}

giveMatches(myFarm);
console.log(myFarm[0]);
