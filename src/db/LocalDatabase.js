import Nullstack from 'nullstack';
import Dexie from 'dexie';
import { employeesSeed } from './employees-seed';

class LocalDatabase extends Nullstack {
  static async start(context) {
    context._db = new Dexie('EmployeesDB');
    const db = context._db;

    db.version(1).stores({
      employees: '++id,name,email,address,phone',
    });

    db.on('populate', async () => {
      await db.employees.bulkPut(employeesSeed);
    });

    db.open();
  }
}

export default LocalDatabase;
