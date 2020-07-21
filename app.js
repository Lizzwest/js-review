let name = "Lizz";
let age = 26;
let isCool = true;
const friends = ["Gabriel", "Menna", "Phil", "Elizabeth", "Sam"];


const music ={
    genresListenedTo: ["Country,", "Pop", "Hip Hop", "Rap", "Showtunes"],
    faveArtist: "The Offspring",
    attendedConcerts: true,
    leastFaveGenre: "EDM",
    bestMemories:{
        memory1: "Maroon 5 in concert at age 12",
        memory2: "Grupo Mania for New Year's in Puerto Rico",
        memory3: "Neck Deep with my husband"
    },



    


}
console.log(music)


//objects have key value pairs separated by commas
const tesla = {
    industry: "Electric Cars",
    ceo: "Elon Musk",
    yearFounded: 2003,
    foundingMembers: ["Elon Musk", "JB Strauble", "Martin Eberhard"],
    stockTicker: "TSLA",
    vehicles:{
        vehicleOne: "Model S",
        vehicleTwo: "Model X",
        vehicleThree: "Model 3"
    },
    //how to adda function to an object
    print: function (){
        //this means i am calling the ceo within THIS
        //  object because I am still in the object
        console.log("The ceo of Tesla is " + this.ceo);
    }

}

tesla.stockPrice = 1643.00;

//2 ways on how to call an object in an array nested in an object
console.log(tesla.vehicles.vehicleThree);
console.log(tesla["vehicles"]["vehicleThree"]);


console.log(name);
console.log(age)
console.log(isCool)
console.log(friends)
console.log(tesla)
//second part of line 19 20
tesla.print();

//this function takes an array and uses for each 
// to name a new variable and print each
//  one of that variable in an array
function printFriends(array){
    array.forEach(friend =>{
        // //array.forEach(function(element){

        // })
        console.log(friend);
    });
}

function printName(element){
    console.log(element)
}

friends.forEach(function(friend){
    printName(friend);
});

printFriends(friends);
//use the same function to print multiple things
printFriends(tesla.foundingMembers)



//standard function
function addNumbers(num1, num2){
    return num1 + num2;
}
//function expression
const multiplyNumbers = function(num1, num2){
    return num1 * num2;
};

//arrow function
const subtractNumbers = (num1, num2) =>{
    return num1 - num2;
};


//DOM document object model
//telling the dom to find the div with a class of container
const container= document.querySelector(".container");
console.log(container);
//create a new header within hte document; create new element
const headerTwo = document.createElement("h2");
headerTwo.textContent = "My first JS review";
console.log(headerTwo);
//add this to the document without adding in html
container.appendChild(headerTwo);

//add a class to headerTwo
//when used together, the last one overrides the first

headerTwo.classList.add("sub-title", //adding this in will make both classes"header-Two"
);
headerTwo.setAttribute("class", "header-two");
console.log(headerTwo);
//take away a class
headerTwo.classList.remove ("sub-title");
console.log(headerTwo)

//this function changes the value of headerTwo to my name when it is clicked
headerTwo.addEventListener("click", function(){
    headerTwo.textContent = "Lizz";
});

const headerThree = document.createElement("h2");
headerThree.textContent = "Friends";
container.appendChild(headerThree);
console.log(headerThree);


const list = document.createElement("ul");

//iterate through my firends array
for(let i = 0; i < friends.length; i++){
    let eachFriend = friends[i];
    const listItem = document.createElement("li");
    listItem.textContent = eachFriend;
    list.appendChild(listItem);

}

console.log(list);

headerThree.addEventListener("click", function(){
    container.appendChild(list);
});



//reference each friend
//create a li
//add textContent to that li
//append that to a ul(unordered list)


//problem solving
//what i start with
//what i hope to end up with
//understand the problem
//where issues start
//break it down into manageable problems

//fizzBuzz
//write a function that does the following
    //takes in an array
    //check each number in the array
    //if the number is divisible by 5 and 3 === fizzbuzz
    //if number divisible by 3 === fizz
    //if number divisible by 5 === buzz

    //for example:
    //[3,5,15,20,9,7]
    //["fizz", "Buzz", "FizzBuzz", "buzz", "fizz", 7]


    //i need to set up an empty array
    //iterate through rr that going to be passed
    //check remainder
    //push result of each elelment inside the result array
    //return result array

    function fizzBuzz(array){
        let result = [];

        for(let i = 0; i < array.length; i++){
            let num = array[i];
            console.log(num)

            if(num % 3 === 0 && num % 5 === 0){
                result.push("Fizzbuzz");
            } else if(num % 3 === 0){
                result.push("fizz");
            }else if(num % 5 === 0){
                result.push("buzz");
            }else{
                result.push(num);
        }
        return result;

    
    }
    console.log(fizzBuzz([3,5,15,20,9,7]));
    }

