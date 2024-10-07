import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    handicap: { type: Number, required: true }, // Player's handicap for net scoring
    tournaments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tournament" }], // Reference to tournaments they're part of
  },
  { timestamps: true }
);

export default mongoose.model("Player", playerSchema);