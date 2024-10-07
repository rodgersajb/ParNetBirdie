import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    kindeId: { type: String, required: true, unique: true }, // From Kinde
    email: { type: String, required: true, unique: true },
    name: { type: String },
    picture: { type: String },
    tournaments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tournament" }], // Reference to tournaments user creates
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);