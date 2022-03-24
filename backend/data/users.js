import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin user",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("admin12345", 10),
    isAdmin: true,
  },
  {
    name: "mohamed",
    email: "mohamed@gmail.com",
    password: bcrypt.hashSync("admin12345", 10),
    isAdmin: false,
  },
  {
    name: "Aliquam",
    email: "ali@gmail.com",
    password: bcrypt.hashSync("admin12345", 10),
    isAdmin: false,
  },
  {
    name: "Ahmed",
    email: "ahmed@gmail.com",
    password: bcrypt.hashSync("admin12345", 10),
    isAdmin: false,
  },
  {
    name: "Abdo",
    email: "abdo@gmail.com",
    password: bcrypt.hashSync("admin12345", 10),
    isAdmin: false,
  },
];

export default users;
