import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Tournament name
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // The user who created the tournament
    format: {
      type: String,
      enum: ["individual", "team_of_2", "team_of_3", "team_of_4"], // Tournament format options
      required: true,
    },
    scoringType: {
      type: String,
      enum: ["net", "gross"],
      required: true,
    },
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }], // Players in the tournament
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }], // Teams (if applicable)
    status: {
      type: String,
      enum: ["upcoming", "in_progress", "completed"],
      default: "upcoming",
    }, // Status of the tournament
    startDate: { type: Date },
    endDate: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("Tournament", tournamentSchema);