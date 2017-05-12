var animal = {};

animal.username = "Marley";
animal["tagline"] = "The coolest llama";

var noises = [];
animal.noises = noises;

console.log(animal);

var count = 0;
for (var key in animal) {
    count ++;
    if (key === "username") {
        console.log("Hi my name's " + animal[key]);
    } else if (key === "tagline") {
        console.log("I like to yell " + animal[key]);
    }
}
