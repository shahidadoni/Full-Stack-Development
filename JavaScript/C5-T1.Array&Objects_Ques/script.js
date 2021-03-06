// 1. What are arrays in JavaScript and why are they useful ?
    //JavaScript arrays are used to store multiple values in a single variable.
    // We can store multi datatypes in javasript arrays but it is not recommended
    //What if you want to loop through the cars and find a specific one?
    // And what if you had not 3 cars, but 300?The solution is an array! https://www.w3schools.com/js/js_arrays.asp

// 2. What are objects in JavaScript and why are they useful ?
    //Objects are methods we create that describes something about

// 3. What are a couple of key differences between objects and arrays ?
    //Arrays have index numbers and objects allow us to access data by object properties.
    //Arrays exist has a window function so it is basically an object i.e. a method described in window.

// 4. What is the index of an array ? What is it used for?
    //we use index to refer a particular element in an array.They also denote sequential data format.

// 5. What is a property ?
    //it is what describes an object like color of car, tyres in a car, type of fuel engine,etc.
    //the association between key and value is called property.

// 6. What is a method ?
    //it is function described in an object for instance to describes how will the car work by using its properties such as tyres and engine,etc.

//7. Create an array named colors that contains five different names of colors as strings.
    var colors = ["red", "blue", "yellow", "violet", "green"]

//8. Access the first color in the array and print it to the console using console.log()
    console.log(colors[0]);
    
//9. Now do the same with the third color in the list. 
    console.log(colors[2]);

//10. Write one line of code that changes the value of the last color in the list to "ultraviolet".
    colors[4] = "ultraviolet"
    console.log(colors);

//11. Create a new variable called fourthColor and set it equal to the fourth color in the list.
    var fourthColor = "black"
    colors[3] = fourthColor
    console.log(colors);

//12. Add another color to the end of the list.
    colors.push("pink");

//13. Add another color to the beginning of the list.
    colors.unshift("white");
    console.log(colors)

//14. Print the length of the array to the console with console.log()
    console.log(colors.length);

//15. Remove the last color from the end of list, and then print the length of the array to the console one more time.
    colors.pop()
    console.log(colors.length);

//16. Write a for loop to iterate through every color in the array and print each color's value to the console.
    for (var i = 0; i < colors.length; i++) {
        console.log(colors[i]);

    }

//17. Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.
    for (var i = 0; i < colors.length; i++) {
        console.log(i + ":" + colors[i]);

    }

//18. Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list.
    var last = colors.length - 1;
    var lastColor = colors[last]
    console.log(lastColor);

//19. Pick a penguin from Wikipedia's List of Fictional Penguins and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page.
var myPenguin = {
    character: "Sergant Penguin",
    origin: "Donald Duck",
    notes: "A military penguin"
}

//20. Use console.log() to print the penguin's name to the console as part of a welcome message.
//var character = "hello"
console.log("Hello, Im a penguin and my name is" + myPenguin.character);

//21. Write another line of code that adds a new property to your penguin called canFly and set it to false. 
myPenguin.canFly = false

//22. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"
myPenguin.chirp = function () {
    console.log("CHIRP CHIRP!. Is this what I sound like?");

}
myPenguin.chirp()

//23. Add another method to your penguin called sayHello that prints to the console the same message from step 20 above. 
myPenguin.sayHello = function () {
    console.log("Hello! Im powerful military penguin" + this.character);

}
//24. Next, call your penguin's sayHello() method and make sure that it works.
myPenguin.sayHello()

//25. Without modifying any of your previous code, change the penguin's name to "Penguin" and then call your penguin's sayHello() function one more time to make sure it still works.
myPenguin.character = "Penguin"
myPenguin.sayHello()

//26. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
myPenguin.fly = function () {
    if (this.canFly) {
        console.log("I can fly!");

    } else {
        console.log("No flying for me");

    }
}

//27. Call your penguin's fly() method and make sure it works.
myPenguin.fly()

//28. Change the canFly property to true
myPenguin.canFly = true

//29. Now call your penguin's fly() method again and make sure it works as expected.
myPenguin.fly()

//30. Write a for ... in loop to print each key to the console.
for (var property in myPenguin) {
    console.log(property);

}

//31. Write another for ... in loop to print the value of each key to the console.
for (var property in myPenguin) {
    console.log(myPenguin[property]);

}

//32. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.
myPenguin.favouriteFoods = ["fish", "ice", "chocolate"];

//33. Access your penguin's second favorite food and print it to the console using console.log()
console.log(myPenguin.favouriteFoods[1]);

//34. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.
var firstFavFood = myPenguin.favouriteFoods[0]

//35. Add another food to the end of the list.
myPenguin.favouriteFoods.push("salmon")

//36. Print the length of your penguin's favoriteFoods array to the console with console.log()
console.log(myPenguin.favouriteFoods.length);

//37. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to ???pineapples".
myPenguin.favouriteFoods[3] = "pineapples"

//38. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list. 
var lastFavFood = myPenguin.favouriteFoods[myPenguin.favouriteFoods.length - 1]

//39. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console.  
for (var index = 0; index < myPenguin.favouriteFoods.length; index++) {
    console.log(myPenguin.favouriteFoods[index]);

}

//40. Add a new property to your penguin called outfit and set it equal to another object with the following properties: hat, shirt, pants, and shoes -- each property should have a string as its value!
myPenguin.outfit = {
    hat: "baseball cap",
    shirt: "Black shirt",
    pants: "shorts",
    shoes: "slippers"
}

//41. Create a new variable called penguinHatType and set it equal to the value of the hat in your penguin's outfit! Then print your new variable to the console.
var penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);

//42. Without modifying any of your previous code, write one new line of code to add an accessory property to your penguin's outfit and set it equal to the string "pocket watch"
myPenguin.outfit.accessory = "pocket watch"

//43. Write one more line of code to change the hat in your penguin's outfit to "top hat" and override the previous value.
myPenguin.outfit.hat = "top hat"

//44. This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the pants property from this penguin's outfit property
delete myPenguin.outfit.pants

//45. Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console. 
for (var property in myPenguin.outfit) {
    console.log(myPenguin.outfit[property]);

}

//46. Create a new variable named penguins and set it equal to an array that lists these three penguins!
var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
        console.log("QUACK!!!");
    }
};

var ramon = {
    name: "Ram??n",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
        console.log("Estoy encantado de conocerle.");
    }
};

var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
        console.log("Hi there!");
    }
};

var penguins = [gunter, ramon, fred]

//47. Access the first penguin in the list and print it to the console using console.log()-- notice that you can see all the properties and methods of that object listed in the console
console.log(penguins[0]);

//48. Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.
var secondPenguin = penguins[1]

//49. Print to the console the name of the last penguin in the list.
console.log(penguins[penguins.length-1].name);

//50. Remember the penguin you created earlier, with the variable name of myPenguin ? Add that penguin to the end of the penguins array!
penguins.push(myPenguin)

//51. Print the length of the penguins array to the console.
console.log(penguins.length);

//52. Write one more line of code to change the first penguin's canFly property to the value true (overriding its existing value).
penguins[0].canFly = true;

//53. Call the sayHello method of the first penguin in your penguins array
penguins[0].sayHello()


//54. Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.
for (var i = 0; i < penguins.length; i++) {
    console.log(penguins[i].name);

}

//55. Write a for loop to call the sayHello method of every penguin in the array
for (var i = 0; i < penguins.length; i++) {
    penguins[i].sayHello();

}

//56. Write a for loop to iterate through every penguin in the array, and add a new property to each penguin called numberOfFeet with the value 2
for (var i = 0; i < penguins.length; i++) {
    penguins[i].numberOfFeet = 2

}

//57. Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, print to the console a message containing the penguin's name and " can fly!"
for (var i = 0; i < penguins.length; i++) {
    if (penguins[i].canFly) {
        console.log(penguins[i].name + "can fly");

    }

}
