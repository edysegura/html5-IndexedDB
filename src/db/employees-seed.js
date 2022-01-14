import faker from 'faker';

// TODO move it to WebWorker
export function generateEmployees(numberOfRecords = 1000) {
  const employees = [];
  for (let i = 0; i < numberOfRecords; i++) {
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
