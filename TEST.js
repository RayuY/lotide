
var planetMoons = {
  mercury: "",
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};


for (let planet in planetMoons) {
  
  var numberOfMoons = planetMoons[planet];
  if (planetMoons.hasOwnProperty(planet)) {
  console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
}
}
