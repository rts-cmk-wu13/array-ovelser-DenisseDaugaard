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
    

}) // ends DOMContentLoaded