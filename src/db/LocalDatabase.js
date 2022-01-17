import Nullstack from 'nullstack';
import Dexie from 'dexie';
import { generateEmployees } from './employees-seed';

class LocalDatabase extends Nullstack {
  static async start(context) {
    const db = (context._db = new Dexie('EmployeesDB'));

    db.version(1).stores({
      employees: '++id,name,email,address,phone',
    });

    db.on('populate', async () => {
      const numberOfEmployees = 1000
      await db.employees.bulkPut(generateEmployees(numberOfEmployees));
      // LocalDatabase.startBackgroundSeed();
    });

    db.open();
  }

  static startBackgroundSeed() {
    console.log('[Web Workers] Instantiating...');
    const worker = new Worker('/worker.js');
    const numberOfEmployees = 100000;
    worker.postMessage(numberOfEmployees);
    worker.onmessage = (event) => console.log(event.data);
  }
}

export default LocalDatabase;
