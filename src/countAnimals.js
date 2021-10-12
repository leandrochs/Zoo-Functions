const data = require('../data/zoo_data');
const {species} = data;

const undefinedParam = () => {
  const obj = {}
  species.map(({name, residents}) => obj[name] = residents.length);

  return obj;
}

const specieAndSex = ({specie, sex}) => {
  let sexFilter = [];

  species.find(({name, residents}) => 
    (name  === specie) ? sexFilter = residents
      .filter((resident) => resident.sex === sex) : 0);

  return sexFilter.length;
}

const justSpecie = ({specie}) => {
  let n = 0;
  species.find(({name, residents}) => 
    (name  === specie) ? n = residents.length : 0);

  return n;
}

const definedParam = (param) => 
  (Object.entries(param).length === 2) ? specieAndSex(param) : justSpecie(param);

const countAnimals = (animal) => 
  (animal === undefined) ? undefinedParam() : definedParam(animal);

module.exports = countAnimals;
