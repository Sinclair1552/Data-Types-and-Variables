// Multiplying variables
var secondsInAMinute = 60;
var minutesInAnHour = 60;
var secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log("Seconds In An Hour", secondsInAnHour);

var balloons = 100;
//balloons *=2;
console.log("Balloons", balloons);
console.log("Balloons pt 2", balloons /= 4);

var myThing = 5;
myThing = "this is a string";
console.log("First String", myThing)

// Joining Strings
var greeting = "Cheerio ";
var myName = "Sin";
console.log("joining strings", greeting + myName);

// Finding the length of a string and adding length to a string
console.log("finding length of a string", "Supercalifragilisticexpialidocious".length);
var Sin = "Sin"
var clair = "Claire"
var Sinclair = Sin + clair;
console.log("adding length", Sinclair.length);

//Finding a single character within a string
var myName = "Sin";
console.log("single character", myName[2]);

//Creating a word from picking out characters from multiple strings
var codeWord1 = "wheat";
var codeWord2 = "lizards";
var codeWord3 = "cereal";
var codeWord4 = "?!";
console.log("secret code", codeWord2[6] + codeWord3[0] + codeWord1[3] + codeWord2[4] + codeWord1[2] + codeWord2[5] + codeWord4[1]);

// Using the slice method to change the string
var longString = "My back hurts so badly";
console.log("slicing strings", longString.slice(0, 13));
console.log("slicing strings pt 2", longString.slice(3));

// Uppercase vs Lowercase and applying it to a string
var sillyString = "hELlo THERE, hOW ARE yOu doINg?";
var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);
console.log("Uppercase and Lowercase", firstCharacterUpper + restOfString);


//Boolean with &&
var hadShower = false;
var hasBrushedTeeth = true;
console.log("Boolean example", hadShower && hasBrushedTeeth);

//Boolean with && and ||
var hasFries = false;
var hasSandwhich = true;
var hasChips = true;
console.log("Boolean pt 2", hasFries || hasSandwhich && hasChips);

// Using the logical operator "!" pg. 32
var isWeekend = true;
var needToShowerToday = !isWeekend;
console.log("! example", needToShowerToday);
console.log("! example pt 2", !needToShowerToday);

// Triple equal pg. 35
var mySecretNumber = 5;
var trentGuess = 3;
console.log("Trent's Guess", mySecretNumber === trentGuess);
var nikoGuess = 7;
console.log("Niko's Guess", mySecretNumber === nikoGuess);
var terranceGuess = 5;
console.log("Terrance's Guess", mySecretNumber === terranceGuess);

//Triple equal vs Double equal pg. 36
var stringNumber = "9";
var actualNumber = 9;
console.log("Triple equal", stringNumber === actualNumber);
console.log("Double equal", stringNumber == actualNumber);

// <= >= exercise pg. 37
/*The rules are, if someone is 13 or over, they’re allowed
in. If they’re not over 13, but they are accompanied by an
adult, they’re also allowed in. Otherwise, they can’t see the
movie.*/
var age = 12;
var accompanied = true;
// var notAccompanied = age >= 12 && accompanied === false; 
var allowed = 13 >= age;
//console.log(allowed);
console.log(13 <= age || accompanied === true);
console.log(13 <= age);
console.log(accompanied === true);
//console.log(allowed);