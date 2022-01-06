importScripts('https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js')

function generateEmployees() {
  const employees = [];
  for (let i = 0; i < 10; i++) {
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

self.onmessage = (event) => {
  console.log('Inside the worker');
  console.table(generateEmployees(event.data));
  self.postMessage('Done!');
};
