const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
//? 1. Loop over the game.scored array and print each player who scored a goal, along with the goal number (starting from 1)
const goaleEntries = Object.entries(game.scored);
for (const [index, player] of goaleEntries){
    console.log(`Goal ${index}: ${player}`);
}

//? Use the loop to calculate the average odd and log it to the console
const oddEntries = Object.values(game.odds);
let average = 0;
for( const odd of oddEntries) {
  average += odd;
}
average = average / oddEntries.length;
console.log(`Average odd: ${average}`);

//? Print the 3 odds to the console, but in a nice formatted way, exactly like this:
const oddEntries2 = Object.entries(game.odds);
for(const [team,odd] of oddEntries2){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}

//? Create an object called 'scorers' that contains the names of the players who scored as properties, and the number of goals they scored as values. In this game, it will look like this:
const scorers = {};
