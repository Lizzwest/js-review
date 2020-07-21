function isInside(array, element){
    if (arrayInside.indexOf(element) !== -1){
        return true;
    }else{
        return false;
    
}
}

const arrayInside = [1, 4, 7, 9]
console.log(isInside(arrayInside, 4));
//loop through every item in array
//check if every elelment plugged in is in array



function reverseString(string) {
    let text = '';
    for (let i = string.length - 1; i >= 0; i--) {
        text += string[i];
    } // decrementing for loop
    return text.toLowerCase(); 
    //making sure any string can be passed through.
};
console.log(reverseString('any string you would like'));


//write a function called luckySevens 
//takes a parameter called max
//return an array of all numbers up to and including max divisible (%) by 7

function luckySevens(max){
    let result = [];
    //setting up our output to be an aray
        for(let i = 1; i <= max; i++){

            if(i % 7 === 0){
                result.push(i);
            }
}return result;
}
console.log(luckySevens(50));

//copyMachine
//takes in element and number
//returns an array the length of number
//filled with the element

function copyMachine (element, num) {
    let eArray = [];
        for (let i = 1; i <= num; i++) {
            eArray.push(element);
        }       
        return eArray;
            };

   console.log(copyMachine('wild', 12));

//everyOtherWord takes a param called sentence
//take in a sentence and return an array with every OTHER word in the sentence

//coming back to this
function everyOtherWord(sentence){
    let result= [];
    let splitSentence = sentence.split(" ");
    splitSentence.push(result);

    for( let i = 0; i < sentence.length; i ++){
        result.push(sentence);
    }
    return sentence};
    console.log(everyOtherWord("Carrots grow in the dirt."));




//wordYeller
//takes in a sentence string as input  
//every word has an exclamation point, unless they already have punctuation

//using .split to seperate the sentence at the space
function wordYeller(sentence){
    let words = sentence.split(" ");
 //for loop to add "!" to each word in sentence
        for (let i = 0; i < words.length; i++){
      
            if (punctuationCheck(words[i])){
            words[i] += '!';
         }
    }
   //telling our wordws to rejoin at the space 
    return sentence = words.join(" ");
 
  }
  
  //function to check if each word has punctuation  
 
  
  function punctuationCheck(word){
     let punctuation = ['!', '?', ':', ';', '.', ','];
     //for loop saying if a word has a character from the 
     //punctuation aray, do nothing. If it doesn't, add an "!".
     for (let m = 0; m < punctuation.length; m++){
       if (word[word.length-1] === punctuation[m]){
         return false;
       }
     }
     return true;
  }
console.log(wordYeller("I want to, like, go shopping, but I can't find my keys!"));

// arraySubstring takes in an array of strings and a string as arguments
//returns an array that replaces element with true or false, depeending
//on whether it is a substring or not
//I got false to appear, but I can't figure out whay it won't read through them all.
//I believe the function i wrote is actually telling me whether or not cop
//is in the array. I am unsure how to get it to recognize both.

function arraySubstring(arrayOfStrings, string){
    let result= arrayOfStrings.includes("cop");
for(let i=0; i <= arrayOfStrings.length; i++ ){
    if(string[arrayOfStrings.length] == arraySubstring){
        return true;
    }else{
        return false;
    }
}
}
console.log(arraySubstring(["copper", "cope", "cooperate", "copenhagen"], "cop"))

//evenCaps
//takes in sentence as argument
//capitalizes each even index
//index 0 is even

function evenCaps(sentence) {
    //this line i had to find online to get my code to run
    //the line below is used to find a match at the beginning of a word
    //but my code is outputting every other word as a caps
    //I am going to keep working on it but this is what I have

        let begin = /\b(?![\s.])/
        let result = sentence.split(begin)
        let newArray = []
  
                //for loop to iterate through the length or our result
                for (let m = 0; m < result.length; m++) {
                    let newSentence = "";
                
                //for loop to iterate through indices in the length of the result
                //and an if statement to see if the value is even (or if divisible by 2 result is 0)
                
                    for (let l = 0; l < result[m].length; l++) {
                    if (m % 2 == 0) {
                    //charAt is character at, so the below code is looking for characters at index l
                    
                    newSentence += result[m].charAt(l).toUpperCase()
            } else {
                    newSentence += result[m].charAt(l).toLowerCase()
            }
        }
                 newArray.push(newSentence)
        }
                return newArray.join('')
  }
  
                console.log(evenCaps('Apple bottom jeans, boots with the fur'))

