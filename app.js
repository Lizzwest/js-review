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