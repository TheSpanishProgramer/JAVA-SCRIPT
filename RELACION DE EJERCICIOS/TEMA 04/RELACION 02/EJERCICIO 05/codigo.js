var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

//5.1
var rebels = pilots.filter(function (pilot) {
  return pilot.faction === "Rebels";
});
document.write (rebels.getAttribute('rebels.id'));
//5.2
const rebelsArrow = pilots.filter(pilot => pilot.faction === "Rebels");
console.log(rebelsArrow);