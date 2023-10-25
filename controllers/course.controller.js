const models = require("../models");
const Course = models.Course;
// function to responsible to create a course

function createCourse(req, res) {
  const course = {
    courseName: req.body.courseName,
    courseType: req.body.courseType,
    commissionNote: req.body.commissionNote,
  };
  Course.create(course)
    .then((response) => {
      res
        .status(201)
        .json({ message: "Course was created successfully", data: response });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something happened creating your request",
        error: error,
      });
      console.log("error is", error);
    });
}

module.exports = {
  createCourse: createCourse,
};
