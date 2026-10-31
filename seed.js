// Optional: load sample data for demonstration  ->  npm run seed
require("dotenv").config();
const mongoose = require("mongoose");
const Student = require("./models/Student");

const sample = [
  { name: "Ritesh Chaubey", rollNo: "T005", course: "B.Sc.IT", email: "ritesh@example.com", phone: "9876543210", marks: 82 },
  { name: "Aarav Sharma", rollNo: "T006", course: "B.Sc.IT", email: "aarav@example.com", phone: "9123456780", marks: 67 },
  { name: "Neha Patil", rollNo: "C101", course: "B.Com", email: "neha@example.com", phone: "8899776655", marks: 74 },
  { name: "Imran Shaikh", rollNo: "M210", course: "BMS", email: "imran@example.com", phone: "7001122334", marks: 38 },
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Student.deleteMany({});
    await Student.insertMany(sample);
    console.log(`Seeded ${sample.length} students`);
  } catch (err) {
    console.error(err.message);
  } finally {
    await mongoose.disconnect();
  }
})();
