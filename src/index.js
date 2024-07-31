import { Requset } from "./requests";
import { UI } from "./ui";

const inputName = document.getElementById("name");
const inputDepartment = document.getElementById("department");
const inputSalary = document.getElementById("salary");
const updateButton = document.getElementById("update");
const form = document.getElementById("employee-form");
const employeeList = document.getElementById("employees");

const request = new Requset("http://localhost:3000/employees");
const ui = new UI();

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", getAllEmployees);
  form.addEventListener("submit", addEmployee);
  employeeList.addEventListener("click", updateOrDelete);
  // updateButton.addEventListener("click", updateEmployee);
}

function getAllEmployees() {
  request.get().then((employees) => {
    ui.addEmployeesToUI(employees);
  });
}
function addEmployee(e) {
  const employeeName = inputName.value.trim();
  const employeeDepartment = inputDepartment.value.trim();
  const employeeSalary = inputSalary.value.trim();
  if (
    employeeName === "" ||
    employeeDepartment === "" ||
    employeeSalary === ""
  ) {
    alert("Lütfen tüm alanları doldurunuz");
  } else {
    request
      .post({
        name: employeeName,
        department: employeeDepartment,
        salary: Number(employeeSalary),
      })
      .then((employee) => {
        ui.addEmployeeToUI(employee);
      });
  }

  ui.clearInputs();
  e.preventDefault();
}
function updateOrDelete(e) {
  if (e.target.id === "delete-employee") {
    deleteEmployee(e.target);
  } else if (e.target.id === "update-employee") {
    updateEmployeeController(e.target.parentElement.parentElement);
  }
}
function deleteEmployee(targetEmployee) {
  // Target Element a etiketini gösteriyor.
  const id =
    targetEmployee.parentElement.previousElementSibling.previousElementSibling
      .textContent;

  request.delete(id).then((message) => {
    ui.deleteEmployeeFromUI(targetEmployee.parentElement.parentElement);
  });
}
function updateEmployeeController(targetEmployee) {
  ui.toggleUpdateButton(targetEmployee);
}
