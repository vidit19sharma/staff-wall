const employees = [
  { id: 1, name: "Aarav Sharma", email: "aarav.sharma@factwise.io", department: "Engineering", designation: "Senior Developer", salary: 1250000, status: "Active", rating: 4.5, joinDate: "2021-03-15", age: 29 },
  { id: 2, name: "Priya Patel", email: "priya.patel@factwise.io", department: "Design", designation: "UI/UX Lead", salary: 1100000, status: "Active", rating: 4.8, joinDate: "2020-07-22", age: 31 },
  { id: 3, name: "Rohan Mehta", email: "rohan.mehta@factwise.io", department: "Engineering", designation: "Backend Developer", salary: 950000, status: "Active", rating: 3.9, joinDate: "2022-01-10", age: 26 },
  { id: 4, name: "Sneha Gupta", email: "sneha.gupta@factwise.io", department: "Marketing", designation: "Marketing Manager", salary: 1050000, status: "Active", rating: 4.2, joinDate: "2019-11-05", age: 33 },
  { id: 5, name: "Vikram Singh", email: "vikram.singh@factwise.io", department: "Engineering", designation: "DevOps Engineer", salary: 1150000, status: "Inactive", rating: 3.5, joinDate: "2021-06-18", age: 28 },
  { id: 6, name: "Ananya Reddy", email: "ananya.reddy@factwise.io", department: "HR", designation: "HR Specialist", salary: 750000, status: "Active", rating: 4.0, joinDate: "2022-04-01", age: 27 },
  { id: 7, name: "Karan Joshi", email: "karan.joshi@factwise.io", department: "Engineering", designation: "Frontend Developer", salary: 1000000, status: "Active", rating: 4.3, joinDate: "2021-09-12", age: 25 },
  { id: 8, name: "Divya Nair", email: "divya.nair@factwise.io", department: "Finance", designation: "Financial Analyst", salary: 900000, status: "Active", rating: 4.1, joinDate: "2020-02-28", age: 30 },
  { id: 9, name: "Arjun Kapoor", email: "arjun.kapoor@factwise.io", department: "Engineering", designation: "Tech Lead", salary: 1500000, status: "Active", rating: 4.7, joinDate: "2018-08-15", age: 35 },
  { id: 10, name: "Meera Iyer", email: "meera.iyer@factwise.io", department: "Design", designation: "Graphic Designer", salary: 800000, status: "Inactive", rating: 3.2, joinDate: "2023-01-20", age: 24 },
  { id: 11, name: "Rahul Verma", email: "rahul.verma@factwise.io", department: "Marketing", designation: "Content Strategist", salary: 850000, status: "Active", rating: 3.8, joinDate: "2022-07-05", age: 27 },
  { id: 12, name: "Pooja Deshmukh", email: "pooja.deshmukh@factwise.io", department: "HR", designation: "Talent Acquisition Lead", salary: 950000, status: "Active", rating: 4.4, joinDate: "2020-10-10", age: 32 },
  { id: 13, name: "Siddharth Rao", email: "siddharth.rao@factwise.io", department: "Engineering", designation: "QA Engineer", salary: 880000, status: "Active", rating: 3.6, joinDate: "2021-12-01", age: 26 },
  { id: 14, name: "Neha Kulkarni", email: "neha.kulkarni@factwise.io", department: "Finance", designation: "Accounts Manager", salary: 1020000, status: "Active", rating: 4.0, joinDate: "2019-05-14", age: 34 },
  { id: 15, name: "Amit Tiwari", email: "amit.tiwari@factwise.io", department: "Engineering", designation: "Data Engineer", salary: 1180000, status: "Inactive", rating: 3.4, joinDate: "2022-09-25", age: 29 },
  { id: 16, name: "Ritu Saxena", email: "ritu.saxena@factwise.io", department: "Design", designation: "Product Designer", salary: 1060000, status: "Active", rating: 4.6, joinDate: "2020-04-18", age: 30 },
  { id: 17, name: "Manish Kumar", email: "manish.kumar@factwise.io", department: "Marketing", designation: "SEO Specialist", salary: 720000, status: "Active", rating: 3.7, joinDate: "2023-03-08", age: 25 },
  { id: 18, name: "Kavita Bhatt", email: "kavita.bhatt@factwise.io", department: "HR", designation: "HR Manager", salary: 1100000, status: "Active", rating: 4.5, joinDate: "2018-12-20", age: 36 },
  { id: 19, name: "Deepak Chauhan", email: "deepak.chauhan@factwise.io", department: "Finance", designation: "CFO", salary: 2200000, status: "Active", rating: 4.9, joinDate: "2017-06-01", age: 42 },
  { id: 20, name: "Ishita Malhotra", email: "ishita.malhotra@factwise.io", department: "Engineering", designation: "Mobile Developer", salary: 980000, status: "Inactive", rating: 3.1, joinDate: "2023-05-15", age: 24 },
];

export const departments = [...new Set(employees.map((e) => e.department))];

export default employees;
