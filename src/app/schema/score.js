import mongoose from "mongoose";    

const scoreSchema = new mongoose.Schema(
  {
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
      required: true,
    }, // Player's reference
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" }, // Optional, for team scoring
    tournament: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tournament",
      required: true,
    }, // Tournament reference
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GolfCourse",
      required: true,
    }, // Reference to the course
    holeScores: [
      {
        holeNumber: { type: Number, required: true }, // Hole number (1-18 or more)
        grossScore: { type: Number, required: true }, // Raw strokes for this hole
        netScore: { type: Number }, // Net score (adjusted for handicap, if applicable)
      },
    ],
    totalGrossScore: { type: Number, default: 0 }, // Sum of all gross hole scores
    totalNetScore: { type: Number, default: 0 }, // Sum of all net hole scores (optional)
    round: { type: Number, required: true }, // Round number (e.g., 1, 2, 3)
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Score", scoreSchema);