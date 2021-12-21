import Dexie from 'https://cdn.jsdelivr.net/npm/dexie@3.0.3/dist/dexie.mjs'

let db

export default class EmployeesService {
  constructor() {
    this.initializeDB()
  }

  initializeDB() {
    db = new Dexie('EmployeesDB')

    db.version(1).stores({
      employees: '++id,name,email,phone',
    })

    db.on('populate', async () => {
      await db.employees.bulkPut([
        {
          name: 'Thomas Hardy',
          email: 'thomashardy@gmail.com',
          address: '89 Chiaroscuro Rd',
          phone: '1715552222',
        },
        {
          name: 'Dominique Perrier',
          email: 'dominiqueperrier@mail.com',
          address: 'Obere Str. 57, Berlin, Germany',
          phone: '1715552222',
        },
        {
          name: 'Maria Anders',
          email: 'mariaanders@mail.com',
          address: '25, rue Lauriston, Paris, France',
          phone: '1715552222',
        },
        {
          name: 'Fran Wilson',
          email: 'franwilson@mail.com',
          address: 'C/ Araquil, 67, Madrid, Spain',
          phone: '1715552222',
        },
      ])
    })

    db.open()
  }

  getAll() {
    return db.employees.toArray()
  }

  get(id) {
    return db.employees.get(id)
  }

  save(employee) {
    return db.employees.put(employee)
  }

  delete(id) {
    return db.employees.delete(id)
  }
}
