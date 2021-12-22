import Nullstack from 'nullstack';
import Application from './src/Application';
import LocalDatabase from './src/db/LocalDatabase';

const context = Nullstack.start(Application);

context.start = async function start() {
  // https://nullstack.app/application-startup
  await LocalDatabase.start(context);
}

export default context;