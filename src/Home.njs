import Nullstack from 'nullstack';
import './Home.scss';

class Home extends Nullstack {
  employees = [];

  async hydrate({ _db }) {
    this.employees = await _db.employees.toArray();
  }

  prepare({ project, page }) {
    page.title = `${project.name} - Welcome to Nullstack!`;
    page.description = `${project.name} was made with Nullstack`;
  }

  render() {
    return (
      <ul>
        {this.employees.map((employee) => (
          <li>{employee.name}</li>
        ))}
      </ul>
    );
  }
}

export default Home;
