export class UI {
  constructor() {
    this.employeesList = document.getElementById("employees");
    this.updateButton = document.getElementById("update");
    this.employeeName = document.getElementById("name");
    this.employeeDepartment = document.getElementById("department");
    this.employeeSalary = document.getElementById("salary");
  }

  addEmployeesToUI(employees) {
    let result = "";
    employees.forEach((employee) => {
      result += `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td>
                <td><a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
            `;
    });
    this.employeesList.innerHTML = result;
  }

  addEmployeeToUI(employee) {
    let result = "";
    result += `
    <tr>
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>${employee.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td>
        <td><a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>
    `;
    this.employeesList.innerHTML += result;
  }

  clearInputs() {
    this.employeeName.value = "";
    this.employeeDepartment.value = "";
    this.employeeSalary.value = "";
  }

  deleteEmployeeFromUI(element) {
    element.remove();
  }

  toggleUpdateButton(target) {
    if (this.updateButton.style.display === "none") {
      this.updateButton.style.display = "block";
      this.addEmployeeInfoToInputs(target);
    } else {
      this.updateButton.style.display = "none";
      this.clearInputs();
    }
  }

  addEmployeeInfoToInputs(target) {
    const children = target.children;
    this.employeeName.value = children[0].textContent;
    this.employeeDepartment.value = children[1].textContent;
    this.employeeSalary.value = children[2].textContent;
  }

  updateEmployeeOnUI(employee, parent) {
    parent.innerHTML = `
        <tr>
          <td>${employee.name}</td>
          <td>${employee.department}</td>
          <td>${employee.salary}</td>
          <td>${employee.id}</td>
          <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td>
          <td><a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>
        `;
    this.clearInputs();
  }
}
