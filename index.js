/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)
console.log(GAMES_JSON[1]);
// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/
var d= document.createElement("div");
       
// d.classList.add("game-card");


// var d=document.getElementById("games-container")

// var img =document.createElement("img");
// img.src=GAMES_JSON[1].img;
// d.appendChild(img);



// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(GAMES_JSON) {


    // loop over each item in the data
    for (let i in GAMES_JSON)
{
    var d =document.createElement("div");
    d.className="game-card";
    
    // console.log(GAMES_JSON[i]);
    var img =document.createElement("img");
    img.className="game-img";
    img.src=GAMES_JSON[i].img;
    var des =document.createElement("p");
    des.className="game-text";
    des.innerHTML="description: "+GAMES_JSON[i].description;
    var goal =document.createElement("h5");
    
    goal.innerHTML="goal: "+GAMES_JSON[i].goal;
   d.appendChild(img);
   d.appendChild(des);
   d.appendChild(goal);
    gamesContainer.appendChild(d);
}
 



        // create a new div element, which will become the game card


        // add the class game-card to the list


        // set the inner HTML using a template literal to display some info 
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")


        // append the game to the games-container

}
    



// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games


/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
const totalbackers=GAMES_JSON.reduce((acc,song)=>{
    return acc+song.backers;
},0

)
console.log(totalbackers);
contributionsCard.innerHTML=totalbackers.toLocaleString();

// set the inner HTML using a template literal and toLocaleString to get a number with commas


// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");

// set inner HTML using template literal
const totalple=GAMES_JSON.reduce((acc,song)=>{
    return acc+song.pledged;
},0

)
console.log(totalple);
raisedCard.innerHTML="$"+totalple.toLocaleString() ;

// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");

const total=GAMES_JSON.length;


console.log(total);
gamesCard.innerHTML=total;

/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/
const a=0;
// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have not yet met their goal
    const result = GAMES_JSON.filter(GAMES_JSON => GAMES_JSON.pledged < GAMES_JSON.goal);

    addGamesToPage(result);
  


    // use the function we previously created to add the unfunded games to the DOM

}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
    const result = GAMES_JSON.filter(GAMES_JSON => GAMES_JSON.pledged >= GAMES_JSON.goal);

    addGamesToPage(result);

    // use the function we previously created to add unfunded games to the DOM

}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);
    addGamesToPage(GAMES_JSON);
    // add all games from the JSON data to the DOM

}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

unfundedBtn.addEventListener("click",filterUnfundedOnly);
fundedBtn.addEventListener("click",filterFundedOnly);
allBtn.addEventListener("click",showAllGames);
// add event listeners with the correct functions to each button


/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games


// create a string that explains the number of unfunded games using the ternary operator
var para =document.createElement("p");


descriptionContainer.appendChild(para);
const result = GAMES_JSON.filter(GAMES_JSON => GAMES_JSON.pledged < GAMES_JSON.goal);
const b=result.length;
const all=GAMES_JSON.length;
const displayStr1= `A total of $${totalple} has been raised for ${all} games. Currently, ${b} game remains unfunded. We need your help to fund these amazing games!`
const displayStr2= 'A total of $100,000 has been raised for  games. Currently, 2 game remains unfunded. We need your help to fund these amazing games!'

b>1?para.innerHTML=displayStr1:para.innerHTML=displayStr2;
// create a new DOM element containing the template string and append it to the description container

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");





const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});
let ca,de;
[ca,de]=sortedGames;
console.log(ca);

var new1= document.createElement("p");
new1.innerHTML=ca.name;
firstGameContainer.appendChild(new1);

var new2= document.createElement("p");
new2.innerHTML=de.name;
secondGameContainer.appendChild(new2);


// use destructuring and the spread operator to grab the first and second games

// create a new element to hold the name of the top pledge game, then append it to the correct element

// do the same for the runner up item