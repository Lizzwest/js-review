# JavaScript Review
This is my review of Javascript. 


## Examples of Data Types
```javascript
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
```


## Examples of Functions
```javascript
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
}
```

## DOM Manipulation

```javascript
/telling the dom to find the div with a class of container
const container= document.querySelector(".container");
console.log(container);
//create a new header within hte document; create new element
const headerTwo = document.createElement("h2");
headerTwo.textContent = "My first JS review";
console.log(headerTwo);
//add this to the document without adding in html
container.appendChild(headerTwo);

//add a class to headerTwo

headerTwo.classList.add("sub-title");
headerTwo.setAttribute("class", "header-two");
console.log(headerTwo);
//take away a class
headerTwo.classList.remove ("sub-title");
console.log(headerTwo)

```
