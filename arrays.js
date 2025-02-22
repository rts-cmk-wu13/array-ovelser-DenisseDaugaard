document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder numbers of arrays --- 
   
    let newArrayNumbers = numbersArray.filter(num => num > 20);
    console.log("opgave 1", newArrayNumbers);

    // -------opgave 2 cats array -------------------- 
    catsArray.push( "Sniffles")
    console.log("Opgave 2", catsArray);

    // --------opgave 3 dogArray ---------------------
    dogsArray.includes( "Trixie")
    console.log("Opgave 3", dogsArray.includes( "Trixie"));
    
    //--------opgave 4 cats array -------------------
    console.log("Opgave 4a", catsArray.find(cat => cat === 'banana'));
    console.log("Opgave 4b", catsArray.find(cat => cat === "Salem"));
    
    //--------opgave 5 catArray----------------------
    let newArrayMultipliedBy3 = numbersArray.map(number => number*3);
    console.log("Opgave 5", newArrayMultipliedBy3);

    //--------opgave 6 dogArray ------------------------------
    let dogsString = dogsArray.join("")
    console.log("opgave 6", dogsString);
    
    //--------opgave 7 fruitsArray --------------------------
    console.log("opgave 7a", fruitsArray.indexOf("Mango"));
    console.log("opgave 7b", fruitsArray.indexOf("Blåbær"));
    
    //--------------Opgave 8 dogsAarry ----------------------
    let newDogsArray = dogsArray.filter(dog => dog !== "Polly");
    console.log("Opgave 8", newDogsArray);

    //--------------Ekstra Opgave ----------------------------
    let sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum);



}) // ends DOMContentLoaded