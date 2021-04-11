var personnel = [
  {
    id: 5,
    name: 'Luke Skywalker',
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: 'Sabine Wren',
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: 'Zeb Orellios',
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: 'Ezra Bridger',
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: 'Caleb Dume',
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
]

const forceUsers = personnel.filter(({ isForceUser }) => isForceUser)

const scores = forceUsers.map(({ pilotingScore, shootingScore }) => pilotingScore + shootingScore)
console.log("Puntuaciones de los 'isForceUser'");
console.log(scores);

const total = personnel
  .filter(({ isForceUser }) => isForceUser)
  .map(({ pilotingScore, shootingScore }) => pilotingScore + shootingScore)
  .filter(value => value > 111)
  .reduce((prev, current) => prev + current, 0);

console.log("Total entre todos los 'isForceUser'");
console.log(total);