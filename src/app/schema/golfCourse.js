import mongoose from "mongoose";

const golfCourseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Course name
    holes: [
      {
        holeNumber: { type: Number, required: true }, // Hole number (1-18)
        par: { type: Number, required: true }, // Par for the hole
        handicap: { type: Number, required: true }, // Handicap index for this hole
        yardage: { type: Number }, // Optional, yardage for the hole
      },
    ],
    totalPar: { type: Number, required: true }, // Total par for the course
    yardage: { type: Number }, // Total yardage for the course
  },
  { timestamps: true }
);

export default mongoose.model("GolfCourse", golfCourseSchema);