const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  // console.log("Returned planet: ", mars); MANEIRA 1
  setTimeout(() => console.log("Returned planet: ", mars), 4000); // MANEIRA 2
};

// imprime Marte depois de 4 segundos
// setTimeout(() => getPlanet(), 4000);  TAMBEM PODE SER EXECUTADO DESTA MANEIRA - MANEIRA 1
getPlanet(); // MANEIRA 2
