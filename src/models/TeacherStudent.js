const database = require("../database");
const { TABLE_STUDENTS, TABLE_TEACHERS_STUDENTS } = require("../constants");
const { Teacher } = require("../models");

exports.insert = async (idTeacher, idStudent) => {
  return await database.insertTeacherStudent(
    TABLE_TEACHERS_STUDENTS,
    idTeacher,
    idStudent
  );
};
exports.getAll = async () => {
  const queryStr = `SELECT * from ${TABLE_TEACHERS_STUDENTS}`;
  return await database.query(queryStr);
};

exports.getCommonStudents = async teachersEmailArr => {
  const indexesTeachers = await Promise.all(
    teachersEmailArr.map(async teacher => await Teacher.getIdByEmail(teacher))
  );

  let querySelect = `SELECT DISTINCT * FROM ${TABLE_STUDENTS} t `;
  let queryInnerJoin = `INNER JOIN ${TABLE_TEACHERS_STUDENTS} table_alias ON t.id = table_alias.student_id `;

  querySelect = indexesTeachers.reduce((query, indexTeacher, i) => {
    return query + queryInnerJoin.replace(/table_alias/g, `t${i}`);
  }, querySelect);

  querySelect = querySelect + 'WHERE';
  querySelect = querySelect + indexesTeachers.map((indexTeacher, i) => {
    return ` t${i}.teacher_id = ${indexTeacher} `;
  }).join("AND");

  return database.query(querySelect);
};
