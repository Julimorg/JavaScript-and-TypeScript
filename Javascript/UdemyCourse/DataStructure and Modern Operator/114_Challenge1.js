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

//? 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2); 

//? 2. The first player in any player array is the goalkeeper and the others are field players.
//?    For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players (outfield players)
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//? 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//?4. During the game, Bayern Munich (team 1) scored 3 more goals (so total goals = 7) and Borrussia Dortmund scored 2 more goals (so total goals = 2).
//?   So create a new variable 'scoredGoals' based on the game.scored array, and this time it should show all goals scored (it should have 5 elements).
const playersFinal = ["Thiago", "Coutinho", "Perisic", ...players1];
console.log(playersFinal); 

//? 5 Based on game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

//? 6 Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals scored in total (number of player names passed in)
const printGoals = function(...players){
    console.log(players); 
    console.log(`${players.length} goals were scored`);
    for (const player of players) {
        console.log(player);
    }
}
printGoals(...game.scored); // 4 goals were scored

//? 7 The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
const team = team1 < team2 && game.team1 || game.team2;
console.log(`Team ${team} is more likely to win`);
