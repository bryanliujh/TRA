require("dotenv").config();
// const express = require("express");
//no testing done for api controller?
const apiController = require("../../controllers/apiController");
const {
  TABLE_STUDENTS,
  TABLE_TEACHERS,
  TABLE_TEACHERS_STUDENTS
} = require("../../constants");
const { Teacher, Student } = require("../../models");

describe("apiController test", () => {
  test("", () => {
    expect(1).toBe(1);
  });
});
