// Arrays as collections
var noiseArray = ["bark"];

noiseArray.unshift("meow");
noiseArray.push("growl");

noiseArray[3] = "oink";

console.log(noiseArray.length);
console.log(noiseArray);

animal.noises = noiseArray;
console..log(animal);

// Animal collection
var animals = [];
animals.push(animal);

var meowers = { username: "Pussycalore", tagline: "The cat", noises: ["meow"]};
animals[animals.length] = meowers;

console.log(animals);

var dog = {
    username: "Little Shaq",
    tagline: "Gold and Purple",
    noises: ["bark", "woof", "Shaqfu!"]
};

var honeyBadger = {};
honeyBadger.username = "Joejoe";
honeyBadger.tagline = "Joejoe for the win";
honeyBadger.noises = ["screech", "growl" ];

animals.push(dog, honeybadger);
console.log(animals.length);
