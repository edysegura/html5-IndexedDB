import Nullstack from 'nullstack';
import './Employee.scss';

class Employee extends Nullstack {
  employees = [];

  async hydrate({ _db }) {
    this.employees = await _db.employees.toArray();
  }

  prepare({ project, page }) {
    page.title = `${project.name}`;
    page.description = `${project.name} was made with Nullstack`;
  }

  renderThead() {
    return (
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
    );
  }

  renderRow({ employee }) {
    return (
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.address}</td>
        <td>{employee.phone}</td>
        <td></td>
      </tr>
    );
  }

  render() {
    return (
      <>
        <h2>Manage Employees</h2>
        <table>
          <Thead />
          <tbody>
            {this.employees.map((employee) => (
              <Row employee={employee} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Employee;
