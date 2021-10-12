const data = require('../data/zoo_data');
const {employees} = data;

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  let verify = false;
  managers.forEach(manager => (manager === id) ? verify = true : 0);

  return verify;
}

function getRelatedEmployees(managerId) {
  const result = [];
  const verifyManager = isManager(managerId);

  if (!verifyManager) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!')
  } else {
    employees.filter(({managers, firstName, lastName}) => managers
      .forEach(manager => (manager === managerId) ? result
      .push(`${firstName} ${lastName}`) : 0));
  }

  return result;
}

module.exports = { isManager, getRelatedEmployees };
