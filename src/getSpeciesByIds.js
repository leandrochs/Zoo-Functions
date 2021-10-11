const data = require('../data/zoo_data');

const species = data.species;

function getSpeciesByIds(...ids) {
  result = [];
  ids.forEach(id => result.push
    (species.find((specie) => specie.id === id)));

  return result;
}

module.exports = getSpeciesByIds;
