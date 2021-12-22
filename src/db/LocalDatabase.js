import Nullstack from 'nullstack';
import Dexie from 'dexie';

class LocalDatabase extends Nullstack {
  static async start(context) {
    context._db = new Dexie('EmployeesDB');
    const db = context._db;

    db.version(1).stores({
      employees: '++id,name,email,address,phone',
    });

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
      ]);
    });

    db.open();
  }
}

export default LocalDatabase;
