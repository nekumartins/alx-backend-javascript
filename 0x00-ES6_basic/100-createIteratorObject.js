export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  const employees = departments.flat();

  return employees[Symbol.iterator]();
}
