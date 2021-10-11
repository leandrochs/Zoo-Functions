const data = require('../data/zoo_data');

const species = data.species;

function getAnimalsOlderThan(animal, age) {
  let ageTest = false;
  species.forEach(specie => {
    const {name, residents} = specie;

    (name === animal) ? ageTest = residents
      .every((resident) => (resident.age > age)) : 0;
  });

  return ageTest;
}

module.exports = getAnimalsOlderThan;
