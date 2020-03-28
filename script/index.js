const painters = [
  {
    firstName: "Herb",
    lastName: "Aach",
    born: 1923,
    passed: 1985,
    paintings: 12
  },
  {
    firstName: "Pacita",
    lastName: "Abad",
    born: 1946,
    passed: 2004,
    paintings: 52
  },
  {
    firstName: "Daniel",
    lastName: "Maclise",
    born: 1806,
    passed: 1870,
    paintings: 2
  },
  {
    firstName: "Aileen",
    lastName: "Eagleton",
    born: 1902,
    passed: 1984,
    paintings: 35
  },
  {
    firstName: "Thomas",
    lastName: "Eakins",
    born: 1844,
    passed: 1916,
    paintings: 1
  },
  {
    firstName: "Edgar",
    lastName: "Degas ",
    born: 1834,
    passed: 1917,
    paintings: 34
  },
  {
    firstName: "Martin",
    lastName: "Desjardins",
    born: 1637,
    passed: 1694,
    paintings: 7
  }
];

const clients = [
  "Fiona, Bownd",
  "Bren, Strutt",
  "Cletis, Cobelli",
  "Booth, Kedge",
  "Demetris, Parman",
  "Cull, Itzhaki",
  "Ertha, Bikker",
  "Maggi, Stockport",
  "Horace, Hearthfield",
  "Vassili, Pomfret",
  "Cirilo, Zottoli",
  "Trueman, MacDermot",
  "Karla, Spencer",
  "Allys, McManamon",
  "Saloma, Boolsen",
  "Giacomo, Vedntyev",
  "Essa, Blacket",
  "Dari, Muncer",
  "Jobi, Joscelyn",
  "Eimile, Joberne"
];

const cars = [
  "Honda",
  "Saab",
  "Ford",
  "Mitsubishi",
  "Buick",
  "Toyota",
  "Mitsubishi",
  "Mercedes-Ben",
  "Buick",
  "Volvo",
  "Oldsmobile",
  "Mercedes-Ben",
  "Honda",
  "Chevrolet",
  "Volkswagen",
  "GMC",
  "Chevrolet",
  "Jeep",
  "Acura",
  "Honda",
  "Acura",
  "Suzuki"
];

//1.ARRAY.LENGTH
console.log("The number of painters", painters.length);
console.log("The number of clients as of today", clients.length);
console.log("Mu number of cars:", cars.length);

//2.ITERATION
//using for
for (let i = 0; i < clients.length; i++) {
  console.log(clients[i]);
}
//using forEach
clients.forEach(painter => {
  console.log(painter);
});

//3.STRING TO ARRAY
//split
const myFavBands =
  "Beatles, Depeche Mode, Imagine Dragons, AnnenMayKantereit, Sex Pistols";
console.log(myFavBands.split(", "));
//join
const namesIlike = ["John", "David", "Marin", "Marco", "Joseph", "Stas"];
console.log(namesIlike.join(", "));

//4. ARRAY.FILTER()

const filteredPainters = painters.filter(
  painter => painter.born > 1800 && painter.paintings > 10
);
console.table(filteredPainters);

const longLivers = painters.filter(painter => {
  const years = painter.passed - painter.born;
  if (years > 70) return painter;
});
console.table(longLivers);

//5. ARRAY.MAP ()
const newPainters = painters.map(painter => {
  return {
    name: `${painter.firstName} ${painter.lastName}`
  };
});
console.table(newPainters);

//6. ARRAY.SORT
const sortedCars = cars.sort((lastCar, nextCar) => {
  return lastCar > nextCar ? 1 : -1;
});
console.table(sortedCars);

//7. ARRAY.REDUCE
//total ammount of paintings
const ammountOfPaintings = painters.reduce((sum, painter) => {
  return sum + painter.paintings;
}, 0);
console.log(ammountOfPaintings);

//sum up cars
const allCars = cars.reduce((object, car) => {
  if (!object[car]) {
    object[car] = 0;
  }
  object[car]++;
  return object;
}, {});
console.log(allCars);
