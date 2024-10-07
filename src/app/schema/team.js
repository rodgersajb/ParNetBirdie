import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    players: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Player", required: true },
    ],
    tournament: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tournament",
      required: true,
    },
    teamHoleScores: [
      {
        holeNumber: { type: Number, required: true }, // Hole number (1-18)
        grossScore: { type: Number, required: true }, // Combined team score for this hole
        netScore: { type: Number }, // Net score, if applicable
      },
    ],
    totalTeamGrossScore: { type: Number, default: 0 },
    totalTeamNetScore: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Team", teamSchema);