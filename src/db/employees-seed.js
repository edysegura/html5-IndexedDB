import faker from 'faker';

// TODO move it to WebWorker
export function generateEmployees() {
  const employees = [];
  for (let i = 0; i < 1000; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    employees.push({
      name: `${firstName} ${lastName}`,
      email: faker.internet.email(firstName, lastName).toLowerCase(),
      address: faker.address.streetAddress(),
      phone: faker.phone.phoneNumberFormat(),
    });
  }
  return employees;
}
