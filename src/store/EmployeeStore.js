export const EMPLOYEE_STATUSES = [
    { id: 1, name: "Active", color: "green.300" },
    { id: 2, name: "Inactive", color: "red.300" },
    // Ajoutez d'autres statuts si nécessaire
  ];
  
  export const EMPLOYEES = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      status: { id: 1, name: "Active", color: "green.300" },
      startDate: new Date("2023-01-01"),
      notes: "Good performance.",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Project Manager",
      status: { id: 2, name: "Active", color: "green.300" },
      startDate: new Date("2022-05-15"),
      notes: "Excellent leadership skills.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      position: "UX Designer",
      status: { id: 3, name: "Inactive", color: "red.300" },
      startDate: new Date("2021-08-20"),
      notes: "On leave for further studies.",
    },
    {
      id: 4,
      name: "Bob Brown",
      position: "Data Analyst",
      status: { id: 1, name: "Active", color: "green.300" },
      startDate: new Date("2023-02-10"),
      notes: "Great analytical skills.",
    },
    {
      id: 5,
      name: "Emily Davis",
      position: "Marketing Specialist",
      status: { id: 1, name: "Active", color: "green.300" },
      startDate: new Date("2023-03-25"),
      notes: "Creative and proactive.",
    },
    // Ajoutez d'autres employés ici
  ];
  export const employeesES = EMPLOYEES.map(emp => ({
    id: emp.id,
    name: emp.name,
    position: emp.position,
  }));