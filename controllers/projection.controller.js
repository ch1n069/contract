const fetchStudentsApi = require("../services/studentsData");
const models = require("../models"); // Import your Sequelize models

async function calculateProjections(req, res) {
  try {
    // Step 1: Fetch student data from the API
    const studentData = await fetchStudentsApi();
    // this will be returned from the api after calculations
    const projections = [];

    // Convert the students data from an object to an iterable array
    const students = Object.values(studentData);
    // console.log("Students data after converting to an array:", students);

    for (const student of students) {
      console.log(
        "processing record for ",
        student.studentName,
        `${student.university}`
      );
      const universityName = student.university;

      try {
        // Find the university in the database
        const university = await models.University.findOne({
          where: { name: universityName },
        });
        console.log("uni id is", university.id);

        if (!university) {
          console.error(
            `University not found in the database: ${universityName}`
          );
          continue;
        }

        // Find the associated contract
        const contracts = await models.Contract.findAll({
          where: { universityId: university.id },
        });
        console.log("found contract id is", contracts);

        if (!contracts) {
          console.error(`Contract not found for university: ${universityName}`);
          continue;
        }

        // Get the student's course ID
        const studentCourseId = student.course;
        console.log(`Studentid to be used`, studentCourseId);

        // Query the commission rates table based on the contract and student course ID
        for (const contract of contracts) {
          const commissionRate = await models.CommissionRate.findOne({
            where: { contractId: contract.id, courseId: studentCourseId },
          });

          console.log("obtained commission is", commissionRate);

          if (!commissionRate) {
            console.error(
              `Commission rate not found for contract and course: ${contract.id} and ${studentCourseId}`
            );
            continue;
          }
          const tuition = parseFloat(student.tution.replace(/[^0-9.]+/g, ""));
          const commission =
            (tuition * commissionRate.commissionPercentage) / 100;

          // Perform further actions with the commission (e.g., save to a database)
          console.log(
            `Student: ${student.studentName}, Commission: ${commission}`
          );
          projections.push({
            studentName: student.studentName,
            projectedIncome: commission,
            university: universityName,
            intakeYear: student.intakeYear,
            intakeMonth: student.intakeMonth,
          });
        }
      } catch (error) {
        console.error(`Error processing student data: ${error.message}`);
      }
    }

    // Send a success response if needed
    res.status(200).json({ projections });
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  calculateProjections: calculateProjections,
};
