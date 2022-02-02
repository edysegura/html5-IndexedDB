import Nullstack from 'nullstack';
import Application from './src/Application';

const context = Nullstack.start(Application);

context.start = async function start() {
  const { project } = context;
  project.root = '/html5-IndexedDB'
  project.cdn = 'https://edysegura.com/HTML5-IndexedDB/'
}

export default context;