//The database setup file that will be use for the project
//The class will perform the setup for the following:
// Teacher table
// Student table
// TeacherStudent link table
//The setup includes creation of table and inserting of data

require("dotenv").config();
const database = require("./database");
const { asyncForEach } = require("./utils/asyncForEach");
const apiController = require("./controllers/apiController");

const {
  TEACHERS,
  STUDENTS,
  TABLE_TEACHERS,
  TABLE_STUDENTS,
  TABLE_TEACHERS_STUDENTS
} = require("./constants");
const { Teacher, Student, TeacherStudent } = require("./models");

const setupTestDB = async () => {
  await database.dropTable(TABLE_TEACHERS_STUDENTS);
  await database.dropTable(TABLE_TEACHERS);
  await database.dropTable(TABLE_STUDENTS);
  await database.initTable(TABLE_TEACHERS);
  await database.initTable(TABLE_STUDENTS);
  await database.initTable(TABLE_TEACHERS_STUDENTS);

  let teachResponse = await Teacher.insert(TEACHERS[0].email);
  TEACHERS[0].id = teachResponse.insertId;
  teachResponse = await Teacher.insert(TEACHERS[1].email);
  TEACHERS[1].id = teachResponse.insertId;
  teachResponse = await Teacher.insert(TEACHERS[2].email);
  TEACHERS[2].id = teachResponse.insertId;
  
  let studResponse = await Student.insert(STUDENTS[0].email);
  STUDENTS[0].id = studResponse.insertId;
  studResponse = await Student.insert(STUDENTS[1].email);
  STUDENTS[1].id = studResponse.insertId; 
  studResponse = await Student.insert(STUDENTS[2].email);
  STUDENTS[2].id = studResponse.insertId; 

  await TeacherStudent.insert(TEACHERS[0].id, STUDENTS[0].id);
  await TeacherStudent.insert(TEACHERS[0].id, STUDENTS[1].id);
  await TeacherStudent.insert(TEACHERS[1].id, STUDENTS[1].id);
  await TeacherStudent.insert(TEACHERS[1].id, STUDENTS[2].id);
};

module.exports = setupTestDB;
