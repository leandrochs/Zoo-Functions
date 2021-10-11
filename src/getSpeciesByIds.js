const data = require('../data/zoo_data');

// const actual = getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');
  
// const species = [{
//   id: '0938aa23-f153-4937-9f88-4858b24d6bce',
//   name: 'lions',
//   popularity: 4,
//   location: 'NE',
//   availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
//   residents: [
//     { name: 'Zena', sex: 'female', age: 12 },
//     { name: 'Maxwell', sex: 'male', age: 15 },
//     { name: 'Faustino', sex: 'male', age: 7 },
//     { name: 'Dee', sex: 'female', age: 14 },
//   ],
// }];


function getSpeciesByIds(...ids) {
  // seu código aqui
  const findSpecies = species.filter((specie) => specie.id = ids)

  return findSpecies;
}


// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
