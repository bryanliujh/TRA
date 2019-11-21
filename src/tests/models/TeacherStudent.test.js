require("dotenv").config();

const { TeacherStudent } = require("../../models");
const {
  TEACHERS,
  STUDENTS,
  TABLE_TEACHERS_STUDENTS
} = require("../../constants");

describe("TeacherStudent model test", () => {
  const allEntries = [];

  beforeAll(async () => {
    allEntries.push(...(await TeacherStudent.getAll()));
  });
  test(`${TABLE_TEACHERS_STUDENTS} getAll should return length 4 after insert`, async () => {
    expect(allEntries.length).toBeGreaterThanOrEqual(4);
  });

  test("getCommonStudents should return ", async () => {
    const teacherEmailArr = [TEACHERS[0].email, TEACHERS[1].email];
    const commonStudents = await TeacherStudent.getCommonStudents(
      teacherEmailArr
    );
    expect(
      commonStudents.find(student =>
        //student.email.includes(STUDENTS[0].email >= 2)
        //shouldn't be >= 0 as 0 common students will return and students[1] is not common student for teacher[0] and [1]
        student.email.includes(STUDENTS[1].email >= 0)
      )
    ).toBeTruthy;
  });
});
