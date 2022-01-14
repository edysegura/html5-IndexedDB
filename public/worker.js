importScripts('https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js');
importScripts('https://cdnjs.cloudflare.com/ajax/libs/dexie/3.2.0/dexie.min.js');

function generateEmployees(numberOfRecords = 1000) {
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

async function indexedDBSeed(numberOfRecords) {
  const db = new Dexie('EmployeesDB');
  db.version(1).stores({
    employees: '++id,name,email,address,phone',
  });
  await db.employees.bulkPut(generateEmployees(numberOfRecords));
}

self.onmessage = async (event) => {
  console.log('Seeding employees database');
  await indexedDBSeed(event.data);
  self.postMessage('Seeding has been completed!');
  self.close();
};
