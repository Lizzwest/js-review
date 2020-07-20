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
