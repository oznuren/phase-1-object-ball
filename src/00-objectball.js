function gameObject() {
  return {
    home: {
      teamName: "Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
      },
      away: {
        teamName: "Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
        },
      },
    },
  };
}

function numPointsScored(playerInput) {
  const game = gameObject();
  for (const gameKey in game) {
    const teamObj = game[gameKey];
    const playerObj = teamObj.players;
    for (const playerKey in playerObj) {
      if (playerKey === playerInput) {
        return playerObj[playerKey].points;
      }
    }
  }
}

const game = gameObject();
const players = playerObj();
const teams = Object.values(game);

function playersObject() {
  return Object.assign({}, homeTeam().players, awayTeam.players);
}

function homeTeam() {
  return game.home;
}

function awayTeam() {
  return game.away;
}

function teamColors(teamName) {
  return findByTeamName(teamName).colors;
}

function findByTeamName(teamName) {
  return teams.find((team) => teamName === team.teamName);
}

function teamNames() {
  return teams.map((team) => team.teamName);
}

function playerNumbers(teamName) {
  return teamName.map((teamName) => teamName.number);
}

function shoeSize(playerInput) {
  const game = gameObject();
  for (const gameKey in game) {
    const teamObj = game[gameKey];
    const playerObj = teamObj.players;
    for (const playerKey in playerObj) {
      if (playerKey === playerInput) {
        return playerObj[playerKey].shoeSize;
      }
    }
  }
}

function playerStats(playerInput) {
  const game = gameObject();
  let stats;
  for (const gameKey in game) {
    const teamObj = game[gameKey];
    const playerObj = teamObj.players;
    for (const playerKey in playerObj) {
      if (playerKey === playerInput) {
        return playerObj[playerKey].p;
      }
    }
  }
}

function bigShoeRebounds() {}
