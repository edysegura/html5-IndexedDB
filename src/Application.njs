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
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://maxcdn.bootstrapcdn.com" rel="preconnect" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
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
