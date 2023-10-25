const studentsDataFromApi = require("../services/studentsData");

// this is for testing the mock call to our students api
async function mockCall(req, res) {
  //
  try {
    const studentsData = await studentsDataFromApi();
    res.status(200).json({
      message: "Students Data fetched successfully",
      data: studentsData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching students data", error: error });
  }
}

module.exports = {
  mockCall: mockCall,
};
