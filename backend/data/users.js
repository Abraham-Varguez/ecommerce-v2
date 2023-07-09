import bcrypt from "bcryptjs";

//User Data

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    //The beycrypt.hashSync encrypts what the password is when looking at the source code
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Abraham Varguez",
    email: "abrahamvarguez21@yahoo.com",
    //The beycrypt.hashSync encrypts what the password is when looking at the source code
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Johnny Appleseed",
    email: "johnnyappleseed@email.com",
    //The beycrypt.hashSync encrypts what the password is when looking at the source code
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
