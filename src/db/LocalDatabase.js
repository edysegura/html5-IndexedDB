import Nullstack from 'nullstack';
import Dexie from 'dexie';
import { generateEmployees } from './employees-seed';

class LocalDatabase extends Nullstack {
  static async start(context) {
    const db = context._db = new Dexie('EmployeesDB');

    db.version(1).stores({
      employees: '++id,name,email,address,phone',
    });

    db.on('populate', async () => {
      await db.employees.bulkPut(generateEmployees());
    });

    db.open();
  }
}

export default LocalDatabase;
