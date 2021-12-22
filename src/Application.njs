import Nullstack from 'nullstack';
import Home from './Home';

import './Application.scss';

class Application extends Nullstack {
  prepare({ page }) {
    page.locale = 'en-US';
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
    );
  }

  render() {
    return (
      <main>
        <Head />
        <Home route="/" />
      </main>
    );
  }
}

export default Application;
