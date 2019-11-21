const database = require("../database");
const { TABLE_STUDENTS } = require("../constants");
const { getIdByEmail } = require("../utils");
const { getEmailById } = require("../utils");

exports.insert = async studentEmail => {
  return await database.insert(TABLE_STUDENTS, studentEmail);
};

exports.getAll = async () => {
  const queryStr = `SELECT * from ${TABLE_STUDENTS}`;
  return await database.query(queryStr);
};

exports.getIdByEmail = async getStudent => {
  const id = await getIdByEmail(TABLE_STUDENTS, getStudent);
  return id;
};

//why not just return email
exports.getEmailById = async getStudent => {
  const email = await getEmailById(TABLE_STUDENTS, getStudent);
  return email === null ? null : email;
};

//update database sql in database js but not select function
exports.suspend = async studentEmail => {
  await database.update(
    TABLE_STUDENTS,
    "is_suspended",
    1,
    "email",
    studentEmail
  );

  exports.getStudentByEmail = async studentEmail => {
    const queryStr = `SELECT * FROM ${TABLE_STUDENTS} WHERE email = '${studentEmail}'`;
    return await database.query(queryStr);
  };
};


/***
 * USE ORM instead of raw sql
 * module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Student', {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false
        },
        ....
    })
}
 * 
 * 
 */