import Nullstack from 'nullstack';
import './Employee.scss';

class Employee extends Nullstack {
  employees = [];

  async hydrate({ _db }) {
    this.employees = await _db.employees.limit(10).toArray();
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
        <td>[actions]</td>
      </tr>
    );
  }

  renderTableTitle() {
    return (
      <div class="table-title">
        <div class="row">
          <div class="col-sm-6">
            <h2>Manage Employees</h2>
          </div>
          <div class="col-sm-6">
            <a
              href="#addEmployeeModal"
              class="btn btn-success"
              data-toggle="modal"
            >
              <i class="material-icons">&#xE147;</i>
              <span>Add New Employee</span>
            </a>
            <a
              href="#deleteEmployeeModal"
              class="btn btn-danger"
              data-toggle="modal"
            >
              <i class="material-icons">&#xE15C;</i>
              <span>Delete</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  renderPaginator() {
    return (
      <div class="clearfix">
        <div class="hint-text">
          Showing
          <b>5</b> out of
          <b>25</b> entries
        </div>
        <ul class="pagination">
          <li class="page-item disabled">
            <a href="#">Previous</a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link">
              1
            </a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link">
              2
            </a>
          </li>
          <li class="page-item active">
            <a href="#" class="page-link">
              3
            </a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link">
              4
            </a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link">
              5
            </a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link">
              Next
            </a>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div class="container">
        <div class="table-wrapper">
          <TableTitle />
          <table class="table table-striped table-hover">
            <Thead />
            <tbody>
              {this.employees.map((employee) => (
                <Row employee={employee} />
              ))}
            </tbody>
          </table>
          <Paginator />
        </div>
      </div>
    );
  }
}

export default Employee;
